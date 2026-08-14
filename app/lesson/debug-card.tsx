import { challengeOptions } from "@/db/schema";
import { cn } from "@/lib/utils";
import { useCallback } from "react";

type DebugCardProps = {
  question: string;
  codeSnippet: string | null;
  options: (typeof challengeOptions.$inferSelect)[];
  onSelect: (id: number) => void;
  status: "correct" | "wrong" | "none";
  selectedOption?: number;
  disabled?: boolean;
};

export const DebugCard = ({
  question,
  codeSnippet,
  options,
  onSelect,
  status,
  selectedOption,
  disabled,
}: DebugCardProps) => {
  const onClick = useCallback(
    (id: number) => {
      if (disabled) return;
      onSelect(id);
    },
    [disabled, onSelect]
  );

  return (
    <div className="flex flex-col gap-6 w-full">
      {codeSnippet && (
        <pre className="bg-neutral-900 text-yellow-400 p-4 rounded-xl text-sm whitespace-pre-wrap overflow-x-auto">
          {codeSnippet}
        </pre>
      )}

      <div className="flex flex-col gap-3">
        {options.map((option) => (
          <div
            key={option.id}
            onClick={() => onClick(option.id)}
            className={cn(
              "p-4 rounded-xl border-2 cursor-pointer font-mono text-sm",
              selectedOption !== option.id && "hover:bg-neutral-100",
              selectedOption === option.id && "border-sky-300 bg-sky-100",
              selectedOption === option.id && status === "correct" && "border-green-300 bg-green-100",
              selectedOption === option.id && status === "wrong" && "border-rose-300 bg-rose-100",
              disabled && "pointer-events-none opacity-50"
            )}
          >
            <span
              className={cn(
                "text-neutral-700",
                selectedOption === option.id && "text-sky-600",
                selectedOption === option.id && status === "correct" && "text-green-600",
                selectedOption === option.id && status === "wrong" && "text-rose-600"
              )}
            >
              {option.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
