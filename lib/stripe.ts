import Stripe from "stripe";

export const stripe = new Stripe(
  process.env.STRIPE_API_SECRET_KEY || "sk_test_placeholder_key_for_build",
  {
    apiVersion: "2026-07-29.dahlia",
    typescript: true,
  }
);
