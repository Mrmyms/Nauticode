import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  Show,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function MarketingPage() {
  return (
    <div className="mx-auto flex w-full max-w-[988px] flex-1 flex-col items-center justify-center gap-2 p-4 lg:flex-row">
      <div className="relative mb-8 h-[240px] w-[240px] lg:mb-0 lg:h-[424px] lg:w-[424px]">
        <Image
          src="/hero.jpg"
          alt="Teus Mascota Nauticode"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="flex flex-col items-center gap-y-6">
        <div className="flex flex-col items-center gap-y-2 text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#EDB824] lg:text-sm">
            Nautilus 4010 &bull; &ldquo;Building a Legacy&rdquo;
          </span>
          <h1 className="max-w-[520px] text-center text-2xl font-black uppercase tracking-tight text-white lg:text-4xl">
            Learn, Practice and master coding for FIRST with <span className="text-[#EDB824]">Nauticode</span>.
          </h1>
        </div>

        <div className="flex w-full max-w-[330px] flex-col items-center gap-y-3">
          <ClerkLoading>
            <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
          </ClerkLoading>

          <ClerkLoaded>
            <Show when="signed-in">
              <Button size="lg" variant="primary" className="w-full" asChild>
                <Link href="/learn" prefetch>
                  Continue Learning
                </Link>
              </Button>
            </Show>

            <Show when="signed-out">
              <SignUpButton mode="modal">
                <Button size="lg" variant="primary" className="w-full">
                  Get Started
                </Button>
              </SignUpButton>

              <SignInButton mode="modal">
                <Button size="lg" variant="primaryOutline" className="w-full">
                  I already have an account
                </Button>
              </SignInButton>
            </Show>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
