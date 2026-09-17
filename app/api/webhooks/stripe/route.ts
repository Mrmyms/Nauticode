import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";
import Stripe from "stripe";

import db from "@/db/drizzle";
import { userSubscription } from "@/db/schema";
import { stripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = (await headers()).get("Stripe-Signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error: unknown) {
    return new NextResponse(`Webhook error ${JSON.stringify(error)}`, {
      status: 400,
    });
  }

  // user subscription completed
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    if (!session?.metadata?.userId) {
      return new NextResponse("User id is required.", { status: 400 });
    }

    if (!session.subscription) {
      return new NextResponse("Subscription is required.", { status: 400 });
    }

    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string
    );

    const priceId = subscription.items?.data?.[0]?.price?.id;
    const currentPeriodEnd =
      subscription.items?.data?.[0]?.current_period_end ||
      (subscription as any).current_period_end;

    if (!priceId || !currentPeriodEnd) {
      return new NextResponse("Invalid subscription data.", { status: 400 });
    }

    await db
      .insert(userSubscription)
      .values({
        userId: session.metadata.userId,
        stripeSubscriptionId: subscription.id,
        stripeCustomerId: subscription.customer as string,
        stripePriceId: priceId,
        stripeCurrentPeriodEnd: new Date(currentPeriodEnd * 1000),
      })
      .onConflictDoUpdate({
        target: userSubscription.userId,
        set: {
          stripeSubscriptionId: subscription.id,
          stripeCustomerId: subscription.customer as string,
          stripePriceId: priceId,
          stripeCurrentPeriodEnd: new Date(currentPeriodEnd * 1000),
        },
      });
  }

  // renew user subscription
  if (event.type === "invoice.payment_succeeded") {
    const invoice = event.data.object as Stripe.Invoice;
    const parentSub = invoice.parent?.subscription_details?.subscription;
    const legacySub = (invoice as { subscription?: string | Stripe.Subscription | null }).subscription;
    const rawSub = parentSub ?? legacySub;

    const subscriptionId =
      typeof rawSub === "string"
        ? rawSub
        : rawSub && typeof rawSub === "object"
        ? rawSub.id
        : undefined;

    if (subscriptionId) {
      const subscription = await stripe.subscriptions.retrieve(subscriptionId);
      const priceId = subscription.items?.data?.[0]?.price?.id;
      const currentPeriodEnd =
        subscription.items?.data?.[0]?.current_period_end ||
        (subscription as any).current_period_end;

      if (priceId && currentPeriodEnd) {
        await db
          .update(userSubscription)
          .set({
            stripePriceId: priceId,
            stripeCurrentPeriodEnd: new Date(currentPeriodEnd * 1000),
          })
          .where(eq(userSubscription.stripeSubscriptionId, subscription.id));
      }
    }
  }

  // subscription deleted / cancelled
  if (event.type === "customer.subscription.deleted") {
    const subscription = event.data.object as Stripe.Subscription;

    await db
      .delete(userSubscription)
      .where(eq(userSubscription.stripeSubscriptionId, subscription.id));
  }

  return new NextResponse(null, { status: 200 });
}
