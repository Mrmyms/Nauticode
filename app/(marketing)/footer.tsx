import Image from "next/image";

import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <div className="hidden h-20 w-full border-t-2 border-purple-600 p-2 lg:block">
      <div className="mx-auto flex h-full max-w-screen-lg items-center justify-evenly">
        <Button size="lg" variant="ghost" className="w-full cursor-default text-neutral-200">
          <Image
            src="/java.svg"
            alt="Java"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Java
        </Button>

        <Button size="lg" variant="ghost" className="w-full cursor-default text-neutral-200">
          <Image
            src="/cpp.svg"
            alt="C++"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          C++
        </Button>

        <Button size="lg" variant="ghost" className="w-full cursor-default text-neutral-200">
          <Image
            src="/python.svg"
            alt="Python"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Python
        </Button>
      </div>
    </div>
  );
};
