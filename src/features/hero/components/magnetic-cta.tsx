"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useMagnetic } from "../hooks/use-magnetic";

interface MagneticProps {
  children: ReactNode;
}

export function Magnetic({ children }: MagneticProps) {
  const { ref, springX, springY, onMouseMove, onMouseLeave } = useMagnetic();

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </motion.div>
  );
}
