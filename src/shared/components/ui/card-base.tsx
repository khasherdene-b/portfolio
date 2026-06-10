"use client";

import type { ComponentProps } from "react";
import { cn } from "@/shared/lib/utils";
import { Spotlight } from "./spotlight";

interface CardBaseProps extends ComponentProps<"div"> {
  interactive?: boolean;
}

export function CardBase({
  interactive = true,
  className,
  children,
  ...props
}: CardBaseProps) {
  if (!interactive) {
    return (
      <div className={cn("card-luxe overflow-hidden", className)} {...props}>
        {children}
      </div>
    );
  }

  return (
    <Spotlight
      className={cn("card-luxe overflow-hidden", className)}
      {...props}
    >
      {children}
    </Spotlight>
  );
}
