import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <div className="sticky top-0 mb-5 flex items-center justify-between border-b-2 border-[#451F66] bg-[#010124] pb-3 text-neutral-300 lg:z-50 lg:mt-[-28px] lg:pt-[28px]">
      <Link href="/courses" prefetch>
        <Button size="sm" variant="ghost">
          <ArrowLeft className="h-5 w-5 stroke-2 text-[#EDB824]" />
        </Button>
      </Link>

      <h1 className="text-lg font-black uppercase tracking-wider text-[#EDB824]">{title}</h1>
      <div aria-hidden />
    </div>
  );
};
