import { challengeOptions } from "@/db/schema";
import { cn } from "@/lib/utils";
import { useCallback } from "react";

type TheoryCardProps = {
  question: string;
  options: (typeof challengeOptions.$inferSelect)[];
  onSelect: (id: number) => void;
  status: "correct" | "wrong" | "none";
  selectedOption?: number;
  disabled?: boolean;
};

export const TheoryCard = ({
  question,
  options,
  onSelect,
  status,
  selectedOption,
  disabled,
}: TheoryCardProps) => {
  const onClick = useCallback(
    (id: number) => {
      if (disabled) return;
      onSelect(id);
    },
    [disabled, onSelect]
  );

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="bg-slate-800 border-2 border-slate-700 p-6 rounded-xl text-slate-200 text-lg">
        <h2 className="font-bold mb-2 flex items-center gap-2">
          <span className="bg-slate-700 text-slate-300 px-2 py-1 rounded-md text-sm">THEORY</span>
          Concept
        </h2>
        {question}
      </div>

      <div className="flex flex-col gap-3">
        {options.map((option) => (
          <div
            key={option.id}
            onClick={() => onClick(option.id)}
            className={cn(
              "p-4 rounded-xl border-2 border-slate-700 cursor-pointer transition-colors text-center text-lg text-slate-300",
              selectedOption !== option.id && "hover:bg-slate-800",
              selectedOption === option.id && "border-yellow-400 bg-yellow-900/30 text-yellow-500",
              selectedOption === option.id && status === "correct" && "border-green-400 bg-green-900/30 text-green-500",
              selectedOption === option.id && status === "wrong" && "border-rose-400 bg-rose-900/30 text-rose-500",
              disabled && "pointer-events-none opacity-50"
            )}
          >
            {option.text}
          </div>
        ))}
      </div>
    </div>
  );
};
