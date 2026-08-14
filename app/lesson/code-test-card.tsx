import { challengeOptions } from "@/db/schema";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type CodeTestCardProps = {
  question: string;
  codeSnippet: string | null;
  options: (typeof challengeOptions.$inferSelect)[];
  onSelect: (id: number) => void;
  status: "correct" | "wrong" | "none";
  selectedOption?: number;
  disabled?: boolean;
};

export const CodeTestCard = ({
  question,
  codeSnippet,
  options,
  onSelect,
  status,
  selectedOption,
  disabled,
}: CodeTestCardProps) => {
  const [value, setValue] = useState("");

  const correctOption = options.find((o) => o.correct);

  useEffect(() => {
    if (value.trim() === "") {
      // Don't select anything if empty, so the Check button is disabled
      onSelect(0); // 0 is falsy, will keep Footer disabled if we handle it correctly, but actually 0 is a number. 
      // Wait, in quiz.tsx: `if (!selectedOption) return;` 0 is falsy, so it acts as disabled!
    } else {
      // If matches correct option (ignoring whitespace differences for robustness)
      const isCorrect = correctOption && value.replace(/\s+/g, '') === correctOption.text.replace(/\s+/g, '');
      if (isCorrect) {
        onSelect(correctOption.id);
      } else {
        onSelect(-1); // wrong option, but truthy
      }
    }
  }, [value, correctOption, onSelect]);

  return (
    <div className="flex flex-col gap-4 w-full">
      {codeSnippet && (
        <pre className="bg-neutral-900 text-yellow-400 p-4 rounded-xl text-sm whitespace-pre-wrap overflow-x-auto">
          {codeSnippet}
        </pre>
      )}

      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
        placeholder="Type your code here..."
        className={cn(
          "w-full h-40 p-4 rounded-xl border-2 resize-none font-mono text-sm",
          status === "correct" && "border-green-500 bg-green-50",
          status === "wrong" && "border-rose-500 bg-rose-50",
          disabled && "opacity-50"
        )}
      />
    </div>
  );
};
