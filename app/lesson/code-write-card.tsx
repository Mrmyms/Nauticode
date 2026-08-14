import { challengeOptions } from "@/db/schema";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type CodeWriteCardProps = {
  question: string;
  codeSnippet: string | null;
  options: (typeof challengeOptions.$inferSelect)[];
  onSelect: (id: number | undefined) => void;
  status: "correct" | "wrong" | "none";
  selectedOption?: number;
  disabled?: boolean;
};

export const CodeWriteCard = ({
  question,
  codeSnippet,
  options,
  onSelect,
  status,
  selectedOption,
  disabled,
}: CodeWriteCardProps) => {
  const [value, setValue] = useState("");

  const correctOption = options.find((o) => o.correct);
  const wrongOption = options.find((o) => !o.correct) || options[0]; // fallback if no wrong option provided

  // Disable text area if status is not none (meaning it was checked)
  const isChecked = status !== "none";

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (isChecked || disabled) return;

    const val = e.target.value;
    setValue(val);

    if (!val.trim()) {
      onSelect(undefined);
      return;
    }

    if (!correctOption) return;

    const normalize = (s: string) => s.replace(/\s+/g, " ").trim();
    const isCorrect = normalize(val) === normalize(correctOption.text);

    if (isCorrect) {
      onSelect(correctOption.id);
    } else {
      onSelect(wrongOption.id);
    }
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {codeSnippet && (
        <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm text-slate-200 overflow-x-auto border-2 border-slate-700">
          <pre>{codeSnippet}</pre>
        </div>
      )}
      
      <div
        className={cn(
          "h-full border-2 rounded-xl p-4 lg:p-6",
          status === "wrong" && "border-rose-500 bg-rose-500/10",
          status === "correct" && "border-green-500 bg-green-500/10",
          status === "none" && "border-slate-700 bg-slate-800"
        )}
      >
        <textarea
          value={value}
          onChange={handleChange}
          disabled={disabled || isChecked}
          placeholder="Type your code here..."
          className={cn(
            "w-full bg-transparent border-0 font-mono text-lg text-white placeholder:text-slate-500 outline-none resize-none min-h-[100px]",
            status === "wrong" && "text-rose-500",
            status === "correct" && "text-green-500"
          )}
        />
      </div>
    </div>
  );
};
