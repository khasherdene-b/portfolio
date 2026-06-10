"use client";

import { useEffect } from "react";

export function PageSpotlight() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--page-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--page-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
}
