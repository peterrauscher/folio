import * as React from "react";
import { cn } from "@/lib/utils";

type TooltipProps = {
  content: React.ReactNode;
  children: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  className?: string;
};

export function Tooltip({ content, children, side = "top", className }: TooltipProps) {
  const sidePos =
    side === "top"
      ? "bottom-full left-1/2 -translate-x-1/2 mb-2"
      : side === "bottom"
      ? "top-full left-1/2 -translate-x-1/2 mt-2"
      : side === "left"
      ? "right-full top-1/2 -translate-y-1/2 mr-2"
      : "left-full top-1/2 -translate-y-1/2 ml-2"; // right

  const arrowPos =
    side === "top"
      ? "top-full left-1/2 -translate-x-1/2"
      : side === "bottom"
      ? "bottom-full left-1/2 -translate-x-1/2"
      : side === "left"
      ? "left-full top-1/2 -translate-y-1/2"
      : "right-full top-1/2 -translate-y-1/2"; // right

  return (
    <span className={cn("relative inline-block group", className)}>
      {children}
      <span
        role="tooltip"
        className={cn(
          "pointer-events-none absolute z-50 whitespace-nowrap rounded-md border bg-popover px-2 py-1 text-xs text-popover-foreground shadow-sm",
          "opacity-0 scale-95 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:scale-100",
          sidePos
        )}
      >
        {content}
        <span
          aria-hidden
          className={cn(
            "absolute block h-2 w-2 rotate-45 border border-border bg-popover",
            arrowPos
          )}
        />
      </span>
    </span>
  );
}

export default Tooltip;

