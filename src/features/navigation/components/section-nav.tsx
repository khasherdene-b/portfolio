"use client";

import { motion } from "framer-motion";
import { useActiveSection } from "@/shared/hooks/use-active-section";
import { SECTIONS } from "@/shared/lib/config";
import { cn } from "@/shared/lib/utils";

const SECTION_IDS = SECTIONS.map((s) => s.id);

export function SectionNav({ className }: Readonly<{ className?: string }>) {
  const active = useActiveSection(SECTION_IDS);

  return (
    <nav aria-label="Sections" className={className}>
      <ul className="flex items-center gap-0.5">
        {SECTIONS.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "relative isolate block rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="section-nav-pill"
                    className="absolute inset-0 -z-10 rounded-md bg-accent"
                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  />
                )}
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
