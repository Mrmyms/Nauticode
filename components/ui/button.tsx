import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wide",
  {
    variants: {
      variant: {
        default:
          "bg-[#010124] text-white border-[#451F66] border-2 border-b-4 active:border-b-2 hover:bg-[#451F66]/30 text-neutral-200",

        // custom
        locked:
          "bg-neutral-800 text-neutral-500 hover:bg-neutral-800 border-neutral-700 border-b-4 active:border-b-0",

        primary:
          "bg-[#EDB824] text-[#010124] hover:bg-[#EDB824]/90 border-[#C99B1A] border-b-4 active:border-b-0 font-extrabold",
        primaryOutline:
          "bg-transparent text-[#EDB824] border-2 border-[#EDB824] hover:bg-[#EDB824]/10 active:bg-[#EDB824]/20",

        secondary:
          "bg-[#451F66] text-white hover:bg-[#5D2A8A] border-[#32144D] border-b-4 active:border-b-0 font-bold",
        secondaryOutline:
          "bg-transparent text-purple-300 border-2 border-[#451F66] hover:bg-[#451F66]/20 active:bg-[#451F66]/30",

        danger:
          "bg-rose-500 text-primary-foreground hover:bg-rose-500/90 border-rose-600 border-b-4 active:border-b-0",
        dangerOutline: "bg-transparent text-rose-500 border-2 border-rose-500 hover:bg-rose-500/10",

        super:
          "bg-indigo-500 text-primary-foreground hover:bg-indigo-500/90 border-indigo-600 border-b-4 active:border-b-0",
        superOutline: "bg-transparent text-indigo-500 border-2 border-indigo-500 hover:bg-indigo-500/10",

        ghost:
          "bg-transparent text-neutral-300 border-transparent border-0 hover:bg-white/10 hover:text-white",

        sidebar:
          "bg-transparent text-neutral-300 border-2 border-transparent hover:bg-white/5 transition-none",
        sidebarOutline:
          "bg-[#451F66]/30 text-[#EDB824] border-[#EDB824]/60 border-2 hover:bg-[#451F66]/40 transition-none",
      },
      size: {
        default: "h-11 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-12 px-8",
        icon: "h-10 w-10",

        // custom
        rounded: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
