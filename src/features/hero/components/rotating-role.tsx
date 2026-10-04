"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ROLE_PREFIX, ROLES } from "../data/hero.data";

const INTERVAL_MS = 2800;
const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Every phrase is rendered into the same grid cell, so the line is always as
 * tall as its longest phrase — no layout shift while cycling, and SSR output
 * matches the first client render (index 0).
 */
export function RotatingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % ROLES.length),
      INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <p className="text-lg leading-snug tracking-tight text-muted-foreground sm:text-xl">
      <span className="sr-only">
        {ROLE_PREFIX} {ROLES[0]}
      </span>
      <span aria-hidden className="block">
        {ROLE_PREFIX}{" "}
        <span className="inline-grid align-top">
          {ROLES.map((role, i) => {
            const active = i === index;
            return (
              <motion.span
                key={role}
                className="col-start-1 row-start-1 font-medium text-foreground"
                initial={false}
                animate={{
                  opacity: active ? 1 : 0,
                  y: active ? 0 : i < index ? -10 : 10,
                  filter: active ? "blur(0px)" : "blur(6px)",
                }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                {role}
              </motion.span>
            );
          })}
        </span>
      </span>
    </p>
  );
}
