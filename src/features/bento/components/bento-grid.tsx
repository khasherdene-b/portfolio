"use client";

import { motion } from "framer-motion";
import { cn } from "@/shared/lib/utils";
import { BENTO_LAYOUT } from "../data/bento-layout.data";
import type { BentoCell } from "../types";

const COLS_CLASS: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
};

function renderCell(cell: BentoCell) {
  if (cell.children) {
    return (
      <div key={cell.id} className="flex h-full flex-col gap-3">
        {cell.children.map(({ id, component: Card }) => (
          <div key={id} className="flex-1">
            <Card />
          </div>
        ))}
      </div>
    );
  }

  if (!cell.component) return null;
  const Card = cell.component;

  return (
    <div
      key={cell.id}
      className={cn("h-full", cell.colSpan === 2 && "sm:col-span-2")}
    >
      <Card />
    </div>
  );
}

export function BentoGrid() {
  return (
    <div className="mt-10 space-y-3">
      {BENTO_LAYOUT.map((row, rowIndex) => (
        <motion.div
          key={row.cells[0]?.id ?? rowIndex}
          className={cn("grid grid-cols-1 gap-3", COLS_CLASS[row.cols ?? 3])}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.5,
            delay: rowIndex * 0.07,
            ease: [0.16, 1, 0.3, 1] as const,
          }}
        >
          {row.cells.map(renderCell)}
        </motion.div>
      ))}
    </div>
  );
}
