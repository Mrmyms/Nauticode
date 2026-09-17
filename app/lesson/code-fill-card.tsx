import { challengeOptions } from "@/db/schema";
import { cn } from "@/lib/utils";
import { useCallback } from "react";

type CodeFillCardProps = {
  question: string;
  codeSnippet: string | null;
  options: (typeof challengeOptions.$inferSelect)[];
  onSelect: (id: number) => void;
  status: "correct" | "wrong" | "none";
  selectedOption?: number;
  disabled?: boolean;
};

export const CodeFillCard = ({
  question,
  codeSnippet,
  options,
  onSelect,
  status,
  selectedOption,
  disabled,
}: CodeFillCardProps) => {
  const onClick = useCallback(
    (id: number) => {
      if (disabled) return;
      onSelect(id);
    },
    [disabled, onSelect]
  );

  const selectedText = selectedOption
    ? options.find((o) => o.id === selectedOption)?.text
    : "___";

  const renderSnippet = () => {
    if (!codeSnippet) return null;
    const parts = codeSnippet.split("___");
    if (parts.length === 1) return <code>{codeSnippet}</code>;

    return (
      <code className="text-lg bg-neutral-900 text-yellow-400 p-4 rounded-xl block whitespace-pre-wrap font-mono leading-relaxed">
        {parts.map((part, index) => {
          if (index === parts.length - 1) return <span key={index}>{part}</span>;
          return (
            <span key={index}>
              {part}
              <span
                className={cn(
                  "mx-1 px-3 py-1 border-b-2 font-bold min-w-[3rem] text-center inline-block",
                  selectedOption ? "border-primary text-primary" : "border-neutral-500 text-neutral-500"
                )}
              >
                {selectedText}
              </span>
            </span>
          );
        })}
      </code>
    );
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="w-full">
        {renderSnippet()}
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))]">
        {options.map((option) => (
          <div
            key={option.id}
            onClick={() => onClick(option.id)}
            className={cn(
              "h-full rounded-xl border-2 p-4 hover:bg-neutral-100 cursor-pointer active:border-b-2 text-center",
              selectedOption === option.id && "border-sky-300 bg-sky-100 hover:bg-sky-100",
              selectedOption === option.id && status === "correct" && "border-green-300 bg-green-100 hover:bg-green-100",
              selectedOption === option.id && status === "wrong" && "border-rose-300 bg-rose-100 hover:bg-rose-100",
              disabled && "pointer-events-none opacity-50"
            )}
          >
            <p className={cn(
              "text-neutral-600 text-sm lg:text-base font-medium",
              selectedOption === option.id && "text-sky-500",
              selectedOption === option.id && status === "correct" && "text-green-500",
              selectedOption === option.id && status === "wrong" && "text-rose-500"
            )}>
              {option.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
