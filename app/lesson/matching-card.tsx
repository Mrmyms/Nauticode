import { challengeOptions } from "@/db/schema";
import { cn } from "@/lib/utils";
import { useEffect, useState, useMemo } from "react";
import { Button } from "@/components/ui/button";

type MatchingCardProps = {
  options: (typeof challengeOptions.$inferSelect)[];
  onSelect: (id: number | undefined) => void;
  status: "correct" | "wrong" | "none";
  disabled?: boolean;
};

type PairItem = {
  id: string; // The database option.id
  text: string;
  type: "term" | "def";
  matched: boolean;
  selected: boolean;
  error: boolean;
};

export const MatchingCard = ({
  options,
  onSelect,
  status,
  disabled,
}: MatchingCardProps) => {
  const [items, setItems] = useState<PairItem[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Initialize and shuffle the items
  useEffect(() => {
    const newItems: PairItem[] = [];
    options.forEach((opt) => {
      const parts = opt.text.split("|||");
      if (parts.length === 2) {
        newItems.push({
          id: opt.id.toString(),
          text: parts[0].trim(),
          type: "term",
          matched: false,
          selected: false,
          error: false,
        });
        newItems.push({
          id: opt.id.toString(),
          text: parts[1].trim(),
          type: "def",
          matched: false,
          selected: false,
          error: false,
        });
      }
    });

    // Fisher-Yates shuffle
    for (let i = newItems.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newItems[i], newItems[j]] = [newItems[j], newItems[i]];
    }

    setItems(newItems);
  }, [options]);

  const handleItemClick = (clickedIndex: number) => {
    if (disabled || status !== "none" || items[clickedIndex].matched) return;

    const clickedItem = items[clickedIndex];

    // If nothing is selected yet, just select this one
    if (!selectedId) {
      setItems((prev) =>
        prev.map((item, idx) =>
          idx === clickedIndex ? { ...item, selected: true } : item
        )
      );
      setSelectedId(clickedItem.id);
      return;
    }

    // If clicking the currently selected item again, deselect it
    if (clickedItem.selected) {
      setItems((prev) =>
        prev.map((item) => ({ ...item, selected: false }))
      );
      setSelectedId(null);
      return;
    }

    // Find the previously selected item
    const prevSelectedIndex = items.findIndex((i) => i.selected);
    const prevSelectedItem = items[prevSelectedIndex];

    // If clicking an item of the same type (e.g. term to term), just switch selection
    if (prevSelectedItem.type === clickedItem.type) {
      setItems((prev) =>
        prev.map((item, idx) => ({
          ...item,
          selected: idx === clickedIndex,
        }))
      );
      setSelectedId(clickedItem.id);
      return;
    }

    // Now we are comparing a term and a def. Do they match?
    if (clickedItem.id === prevSelectedItem.id) {
      // Match successful
      setItems((prev) =>
        prev.map((item) => {
          if (item.id === clickedItem.id) {
            return { ...item, matched: true, selected: false };
          }
          return item;
        })
      );
      setSelectedId(null);

      // Check if all are matched
      // We check if the total matched pairs equals the options length.
      // We update based on the new state
      const totalMatchedNow = items.filter((i) => i.matched).length + 2; 
      if (totalMatchedNow === items.length) {
        // All matched! Trigger win
        onSelect(options[0].id); // Pick any option as the "correct" submitted option
      }
    } else {
      // Match failed
      setItems((prev) =>
        prev.map((item, idx) => {
          if (idx === clickedIndex || idx === prevSelectedIndex) {
            return { ...item, selected: false, error: true };
          }
          return item;
        })
      );
      setSelectedId(null);

      // Reset error state after animation
      setTimeout(() => {
        setItems((prev) =>
          prev.map((item) => ({ ...item, error: false }))
        );
      }, 500);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4 w-full">
      {items.map((item, idx) => (
        <div
          key={`${item.id}-${item.type}`}
          onClick={() => handleItemClick(idx)}
          className={cn(
            "p-4 rounded-xl border-2 border-b-4 flex items-center justify-center text-center cursor-pointer min-h-[80px] transition-all duration-200",
            !item.matched && !item.selected && !item.error && "bg-slate-800 border-slate-700 hover:bg-slate-800/80 text-white",
            item.selected && "bg-sky-500/10 border-sky-500 text-sky-500",
            item.error && "bg-rose-500/10 border-rose-500 text-rose-500 translate-x-[-4px]",
            item.matched && "bg-slate-900 border-slate-800 text-slate-700 opacity-50 cursor-default pointer-events-none"
          )}
        >
          <span className="font-medium text-sm lg:text-base select-none">
            {item.text}
          </span>
        </div>
      ))}
    </div>
  );
};
