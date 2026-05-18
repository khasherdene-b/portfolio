"use client";

import { cn } from "@/lib/utils";
import type { ComponentProps, MouseEvent } from "react";

export function Spotlight({
  className,
  onMouseMove,
  children,
  ...props
}: ComponentProps<"div">) {
  function handleMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--x",
      `${event.clientX - rect.left}px`,
    );
    event.currentTarget.style.setProperty(
      "--y",
      `${event.clientY - rect.top}px`,
    );
    onMouseMove?.(event);
  }

  return (
    <div
      onMouseMove={handleMove}
      className={cn("spotlight", className)}
      {...props}
    >
      {children}
    </div>
  );
}
