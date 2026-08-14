import { useCallback } from "react";

import Image from "next/image";
import { useAudio, useKey } from "react-use";

import { challenges } from "@/db/schema";
import { cn } from "@/lib/utils";

type CardProps = {
  id: number;
  text: string;
  imageSrc: string | null;
  audioSrc: string | null;
  shortcut: string;
  selected?: boolean;
  onClick: () => void;
  status?: "correct" | "wrong" | "none";
  disabled?: boolean;
  type: (typeof challenges.$inferSelect)["type"];
};

export const Card = ({
  text,
  imageSrc,
  audioSrc,
  shortcut,
  selected,
  onClick,
  status,
  disabled,
  type,
}: CardProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [audio, _, controls] = useAudio({ src: audioSrc || "" });

  const handleClick = useCallback(() => {
    if (disabled) return;

    void controls.play();
    onClick();
  }, [disabled, onClick, controls]);

  useKey(shortcut, handleClick, {}, [handleClick]);

  return (
    <div
      onClick={handleClick}
      className={cn(
        "h-full cursor-pointer rounded-xl border-2 border-b-4 border-slate-700 bg-slate-800 p-4 hover:bg-slate-700/50 active:border-b-2 lg:p-6",
        selected && "border-yellow-400 bg-yellow-900/30 hover:bg-yellow-900/30",
        selected &&
          status === "correct" &&
          "border-green-400 bg-green-900/30 hover:bg-green-900/30",
        selected &&
          status === "wrong" &&
          "border-rose-400 bg-rose-900/30 hover:bg-rose-900/30",
        disabled && "pointer-events-none opacity-50",
        type === "ASSIST" && "w-full lg:p-3"
      )}
    >
      {audio}
      {imageSrc && (
        <div className="relative mb-4 aspect-square max-h-[80px] w-full lg:max-h-[150px]">
          <Image src={imageSrc} fill alt={text} />
        </div>
      )}

      <div
        className={cn(
          "flex items-center justify-between",
          type === "ASSIST" && "flex-row-reverse"
        )}
      >
        {type === "ASSIST" && <div aria-hidden />}
        <p
          className={cn(
            "text-sm text-slate-300 lg:text-base",
            selected && "text-yellow-400",
            selected && status === "correct" && "text-green-400",
            selected && status === "wrong" && "text-rose-400"
          )}
        >
          {text}
        </p>

        <div
          className={cn(
            "flex h-[20px] w-[20px] items-center justify-center rounded-lg border-2 border-slate-600 text-xs font-semibold text-slate-400 lg:h-[30px] lg:w-[30px] lg:text-[15px]",
            selected && "border-yellow-400 text-yellow-400",
            selected &&
              status === "correct" &&
              "border-green-400 text-green-400",
            selected && status === "wrong" && "border-rose-400 text-rose-400"
          )}
        >
          {shortcut}
        </div>
      </div>
    </div>
  );
};
