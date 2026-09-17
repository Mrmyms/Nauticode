"use client";


import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  Show,
  UserButton,
  useAuth,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


import { Button } from "@/components/ui/button";
import { links } from "@/config";
import { cn } from "@/lib/utils";

export const Header = () => {
  const { isSignedIn } = useAuth();
  return (
    <>
      <header className="h-20 w-full border-b-2 border-[#451F66] bg-[#010124] px-4">
        <div className="mx-auto flex h-full items-center justify-between lg:max-w-screen-lg">
          <Link
            href="/"
            prefetch
            className="flex items-center gap-x-2.5 pb-7 pl-4 pt-8"
          >
            <Image src="/teus_happy.png" alt="Teus" height={36} width={36} className="rounded-full border border-[#EDB824]" />
            <Image src="/nautilus-logo.png" alt="Nautilus Logo" height={34} width={34} className="rounded" />

            <h1 className="text-2xl font-black uppercase tracking-wider text-[#EDB824]">
              Nauticode
            </h1>
          </Link>

          <div className="flex gap-x-3">
            <ClerkLoading>
              <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
            </ClerkLoading>
            <ClerkLoaded>
              <Show when="signed-in">
                <UserButton />
              </Show>

              <Show when="signed-out">
                <SignInButton mode="modal">
                  <Button size="lg" variant="ghost">
                    Login
                  </Button>
                </SignInButton>
              </Show>

              <Link
                href={links.sourceCode}
                target="_blank"
                rel="noreferrer noopener"
                className={isSignedIn ? "pt-1.5" : "pt-3"}
              >
                <Image
                  src="/github.svg"
                  alt="Source Code"
                  height={20}
                  width={20}
                />
              </Link>
            </ClerkLoaded>
          </div>
        </div>
      </header>
    </>
  );
};
