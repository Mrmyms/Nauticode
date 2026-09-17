import { NotebookText } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

type UnitBannerProps = {
  id: number;
  title: string;
  description: string;
};

export const UnitBanner = ({ id, title, description }: UnitBannerProps) => {
  return (
    <div className="flex w-full items-center justify-between rounded-xl border-2 border-[#451F66] bg-[#451F66] p-5 text-white shadow-lg">
      <div className="space-y-2">
        <h3 className="text-2xl font-black uppercase tracking-wide text-[#EDB824]">{title}</h3>
        <p className="text-lg text-neutral-100">{description}</p>
      </div>

      <Link href="/lesson" prefetch>
        <Button
          size="lg"
          variant="primary"
          className="hidden border-2 border-b-4 active:border-b-2 xl:flex"
        >
          <NotebookText className="mr-2" />
          Continue
        </Button>
      </Link>
    </div>
  );
};
