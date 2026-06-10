"use client";

import { useMotionValue, useSpring } from "framer-motion";
import { type RefObject, useRef } from "react";

export interface MagneticValues {
  ref: RefObject<HTMLDivElement | null>;
  springX: ReturnType<typeof useSpring>;
  springY: ReturnType<typeof useSpring>;
  onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave: () => void;
}

export function useMagnetic(strength = 0.35): MagneticValues {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return { ref, springX, springY, onMouseMove, onMouseLeave };
}
