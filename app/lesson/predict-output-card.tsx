import { challengeOptions } from "@/db/schema";
import { cn } from "@/lib/utils";
import { useState } from "react";

type PredictOutputCardProps = {
  question: string;
  codeSnippet: string | null;
  options: (typeof challengeOptions.$inferSelect)[];
  onSelect: (id: number | undefined) => void;
  status: "correct" | "wrong" | "none";
  selectedOption?: number;
  disabled?: boolean;
};

export const PredictOutputCard = ({
  question,
  codeSnippet,
  options,
  onSelect,
  status,
  selectedOption,
  disabled,
}: PredictOutputCardProps) => {
  const [value, setValue] = useState("");

  const correctOption = options.find((o) => o.correct);
  const wrongOption = options.find((o) => !o.correct) || options[0];

  const isChecked = status !== "none";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        <div className="bg-[#1e1e1e] rounded-t-xl p-4 font-mono text-sm text-slate-200 overflow-x-auto border-2 border-slate-800 border-b-0 relative">
          <div className="absolute top-0 left-0 w-full h-6 bg-[#2d2d2d] rounded-t-lg flex items-center px-2 gap-1.5">
             <div className="w-3 h-3 rounded-full bg-red-500"></div>
             <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
             <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <pre className="mt-4">{codeSnippet}</pre>
        </div>
      )}
      
      <div
        className={cn(
          "w-full border-2 p-4 rounded-b-xl flex items-center font-mono text-lg transition-colors",
          status === "wrong" && "border-rose-500 bg-rose-500/10 text-rose-500",
          status === "correct" && "border-green-500 bg-green-500/10 text-green-500",
          status === "none" && "border-slate-800 bg-black text-white",
          !codeSnippet && "rounded-t-xl"
        )}
      >
        <span className="mr-2 opacity-50">{">"}</span>
        <input
          value={value}
          onChange={handleChange}
          disabled={disabled || isChecked}
          placeholder="Output..."
          className={cn(
            "w-full bg-transparent border-0 p-0 font-mono text-lg outline-none",
            status === "wrong" && "text-rose-500 placeholder:text-rose-500/50",
            status === "correct" && "text-green-500 placeholder:text-green-500/50",
            status === "none" && "text-white placeholder:text-slate-500"
          )}
        />
      </div>
    </div>
  );
};
