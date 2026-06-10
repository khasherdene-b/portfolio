import type { ComponentProps } from "react";
import { cn } from "@/shared/lib/utils";

export function GlowBorder({
  className,
  children,
  ...props
}: ComponentProps<"div">) {
  return (
    <div className={cn("card-luxe overflow-hidden", className)} {...props}>
      {children}
    </div>
  );
}
