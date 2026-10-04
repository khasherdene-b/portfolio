"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/features/theme/components/provider";

export function Providers({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {/* Honour the OS "reduce motion" setting for every framer animation. */}
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ThemeProvider>
  );
}
