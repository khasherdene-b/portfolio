"use client";

import { CornerDownLeft } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import type { CommandItem } from "../types";

interface CommandListProps {
  id: string;
  items: CommandItem[];
  activeIndex: number;
  onHover: (index: number) => void;
  onRun: (item: CommandItem) => void;
}

export const optionId = (listId: string, index: number) =>
  `${listId}-option-${index}`;

export function CommandList({
  id,
  items,
  activeIndex,
  onHover,
  onRun,
}: Readonly<CommandListProps>) {
  if (items.length === 0) {
    return (
      <p className="px-4 py-10 text-center text-sm text-muted-foreground">
        No results. Try “work”, “linkedin” or “theme”.
      </p>
    );
  }

  return (
    <div
      id={id}
      role="listbox"
      aria-label="Commands"
      className="max-h-[min(22rem,60vh)] overflow-y-auto overscroll-contain p-2"
    >
      {items.map((item, index) => {
        const showGroup = index === 0 || items[index - 1]?.group !== item.group;
        const active = index === activeIndex;
        const Icon = item.icon;

        return (
          <div key={item.id} role="presentation">
            {showGroup && (
              <p
                role="presentation"
                className="px-2 pt-2.5 pb-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/80"
              >
                {item.group}
              </p>
            )}
            {/* biome-ignore lint/a11y/useKeyWithClickEvents: keyboard is handled on the combobox input via aria-activedescendant. */}
            <div
              id={optionId(id, index)}
              role="option"
              aria-selected={active}
              tabIndex={-1}
              onPointerMove={() => !active && onHover(index)}
              onClick={() => onRun(item)}
              className={cn(
                "flex cursor-pointer items-center gap-3 rounded-lg px-2.5 py-2 text-sm transition-colors",
                active
                  ? "bg-accent text-accent-foreground"
                  : "text-foreground/90",
              )}
            >
              <Icon
                aria-hidden
                className={cn(
                  "size-4 shrink-0",
                  active ? "text-primary" : "text-muted-foreground",
                )}
              />
              <span className="flex-1 truncate">{item.label}</span>
              {item.hint && (
                <span className="truncate font-mono text-[11px] text-muted-foreground">
                  {item.hint}
                </span>
              )}
              <CornerDownLeft
                aria-hidden
                className={cn(
                  "size-3.5 shrink-0 text-muted-foreground transition-opacity",
                  active ? "opacity-100" : "opacity-0",
                )}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
