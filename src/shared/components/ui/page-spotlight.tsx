"use client";

import { useEffect } from "react";

/** Drives the page-level cursor glow. Skipped on touch-only devices. */
export function PageSpotlight() {
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const root = document.documentElement;
    let frame = 0;
    let x = 0;
    let y = 0;

    const handleMouseMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        root.style.setProperty("--page-x", `${x}px`);
        root.style.setProperty("--page-y", `${y}px`);
        frame = 0;
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
