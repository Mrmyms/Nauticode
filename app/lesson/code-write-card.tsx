import { challengeOptions } from "@/db/schema";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { VSCodeEditor } from "@/components/vscode-editor";

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

  const handleEditorChange = (val: string | undefined) => {
    const textVal = val || "";
    if (isChecked || disabled) return;

    setValue(textVal);

    if (!textVal.trim()) {
      onSelect(undefined);
      return;
    }

    if (!correctOption) return;

    const normalize = (s: string) => s.replace(/\s+/g, " ").trim();
    const isCorrect = normalize(textVal) === normalize(correctOption.text);

    if (isCorrect) {
      onSelect(correctOption.id);
    } else {
      onSelect(wrongOption.id);
    }
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {codeSnippet && (
        <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm text-slate-200 overflow-x-auto border-2 border-slate-700 shadow-md">
          <pre>{codeSnippet}</pre>
        </div>
      )}
      
      <div
        className={cn(
          "w-full rounded-xl transition-all",
          status === "wrong" && "p-1 rounded-2xl bg-rose-500/20 border-2 border-rose-500",
          status === "correct" && "p-1 rounded-2xl bg-green-500/20 border-2 border-green-500"
        )}
      >
        <VSCodeEditor
          value={value}
          onChange={handleEditorChange}
          disabled={disabled || isChecked}
          height="200px"
          language="java"
        />
      </div>
    </div>
  );
};

