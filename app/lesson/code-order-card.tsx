import { challengeOptions } from "@/db/schema";
import { cn } from "@/lib/utils";
import { useEffect, useState, useMemo } from "react";

type CodeOrderCardProps = {
  question: string;
  options: (typeof challengeOptions.$inferSelect)[];
  onSelect: (id: number) => void;
  status: "correct" | "wrong" | "none";
  selectedOption?: number;
  disabled?: boolean;
};

// Shuffles the array initially to present a challenge
const shuffle = (array: any[]) => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

export const CodeOrderCard = ({
  options,
  onSelect,
  status,
  selectedOption,
  disabled,
}: CodeOrderCardProps) => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  
  // Sort expected order by audioSrc if provided, otherwise by ID
  const expectedOrder = useMemo(() => {
    return [...options].sort((a, b) => {
      if (a.audioSrc && b.audioSrc) {
        return parseInt(a.audioSrc) - parseInt(b.audioSrc);
      }
      return a.id - b.id;
    }).map(o => o.id);
  }, [options]);

  const shuffledOptions = useMemo(() => shuffle(options), [options]);

  useEffect(() => {
    if (selectedIds.length === options.length) {
      const isCorrect = selectedIds.every((id, index) => id === expectedOrder[index]);
      if (isCorrect) {
        onSelect(expectedOrder[0]); // Select first option to represent "correct"
      } else {
        onSelect(-1); // Wrong
      }
    } else {
      onSelect(0); // Keep disabled
    }
  }, [selectedIds, options.length, expectedOrder, onSelect]);

  const toggleOption = (id: number) => {
    if (disabled) return;
    
    if (selectedIds.includes(id)) {
      setSelectedIds(prev => prev.filter(selectedId => selectedId !== id));
    } else {
      setSelectedIds(prev => [...prev, id]);
    }
  };

  const selectedOptions = selectedIds.map(id => options.find(o => o.id === id)!);
  const unselectedOptions = shuffledOptions.filter(o => !selectedIds.includes(o.id));

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className={cn(
        "min-h-[150px] p-4 border-2 rounded-xl border-dashed bg-neutral-50 flex flex-col gap-2",
        status === "correct" && "border-green-300 bg-green-50",
        status === "wrong" && "border-rose-300 bg-rose-50"
      )}>
        {selectedOptions.length === 0 && (
          <div className="h-full w-full flex items-center justify-center text-neutral-400">
            Click blocks below to order them here
          </div>
        )}
        {selectedOptions.map((option) => (
          <div
            key={option.id}
            onClick={() => toggleOption(option.id)}
            className="p-3 rounded-lg bg-neutral-900 text-yellow-400 font-mono text-sm cursor-pointer shadow-sm hover:opacity-80"
          >
            {option.text}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 justify-center">
        {unselectedOptions.map((option) => (
          <div
            key={option.id}
            onClick={() => toggleOption(option.id)}
            className={cn(
              "p-3 rounded-lg bg-white border-2 text-neutral-700 font-mono text-sm cursor-pointer hover:bg-neutral-100 shadow-sm transition-all",
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
