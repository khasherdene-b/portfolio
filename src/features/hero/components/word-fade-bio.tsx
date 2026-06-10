"use client";

import { motion } from "framer-motion";

interface WordFadeBioProps {
  readonly children: string;
  readonly className?: string;
  readonly baseDelay?: number;
}

export function WordFadeBio({
  children,
  className,
  baseDelay = 0,
}: WordFadeBioProps) {
  const words = children.split(" ");

  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: baseDelay + i * 0.025,
            duration: 0.3,
            ease: [0.16, 1, 0.3, 1] as const,
          }}
          className="inline-block"
        >
          {word}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </span>
  );
}
