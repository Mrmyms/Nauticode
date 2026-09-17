import Image from "next/image";

type QuestionBubbleProps = {
  question: string;
};

export const QuestionBubble = ({ question }: QuestionBubbleProps) => {
  return (
    <div className="mb-6 flex items-center gap-x-4">
      <Image
        src="/teus_happy.png"
        alt="Teus"
        height={64}
        width={64}
        className="hidden rounded-full border-2 border-[#EDB824] lg:block"
      />
      <Image
        src="/teus_happy.png"
        alt="Teus"
        height={48}
        width={48}
        className="block rounded-full border-2 border-[#EDB824] lg:hidden"
      />

      <div className="relative rounded-xl border-2 border-[#451F66] bg-[#010124] px-4 py-2 text-sm text-neutral-100 lg:text-base">
        {question}

        <div
          className="absolute -left-3 top-1/2 h-0 w-0 -translate-y-1/2 rotate-90 transform border-x-8 border-t-8 border-x-transparent"
          aria-hidden
        />
      </div>
    </div>
  );
};
