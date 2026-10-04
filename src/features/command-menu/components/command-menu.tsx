"use client";

import { Search } from "lucide-react";
import {
  type KeyboardEvent,
  type MouseEvent,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { useMounted } from "@/shared/hooks/use-mounted";
import { filterCommands, useCommandItems } from "../hooks/use-command-items";
import type { CommandItem } from "../types";
import { CommandList, optionId } from "./command-list";

function isMacLike() {
  return /mac|iphone|ipad/i.test(navigator.userAgent);
}

/**
 * ⌘K / Ctrl+K command palette built on the native <dialog>, which gives us
 * focus trapping, Esc-to-close, background inertness and focus restoration
 * for free.
 */
export function CommandMenu() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listId = useId();
  const mounted = useMounted();
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const results = filterCommands(useCommandItems(), query);
  const safeIndex = Math.min(activeIndex, Math.max(results.length - 1, 0));

  function open() {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    setQuery("");
    setActiveIndex(0);
    dialog.showModal();
    inputRef.current?.focus();
  }

  function close() {
    dialogRef.current?.close();
  }

  useEffect(() => {
    function onKeyDown(e: globalThis.KeyboardEvent) {
      if (e.key.toLowerCase() !== "k" || !(e.metaKey || e.ctrlKey)) return;
      e.preventDefault();
      const dialog = dialogRef.current;
      if (!dialog) return;
      if (dialog.open) {
        dialog.close();
        return;
      }
      setQuery("");
      setActiveIndex(0);
      dialog.showModal();
      inputRef.current?.focus();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document
      .getElementById(optionId(listId, safeIndex))
      ?.scrollIntoView({ block: "nearest" });
  }, [listId, safeIndex]);

  function run(item: CommandItem) {
    if (!item.keepOpen) close();
    item.perform();
  }

  function onInputKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    const count = results.length;
    if (count === 0) return;
    const moves: Record<string, number> = {
      ArrowDown: (safeIndex + 1) % count,
      ArrowUp: (safeIndex - 1 + count) % count,
      Home: 0,
      End: count - 1,
    };
    if (e.key in moves) {
      e.preventDefault();
      setActiveIndex(moves[e.key] ?? 0);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const item = results[safeIndex];
      if (item) run(item);
    }
  }

  // Clicks on the ::backdrop target the <dialog> element itself.
  function onDialogClick(e: MouseEvent<HTMLDialogElement>) {
    if (e.target === e.currentTarget) close();
  }

  const shortcut = mounted && !isMacLike() ? "Ctrl K" : "⌘K";

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-haspopup="dialog"
        aria-keyshortcuts="Meta+K Control+K"
        className="group flex h-9 items-center gap-2 rounded-lg border border-border bg-card/50 pl-2.5 pr-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
      >
        <Search aria-hidden className="size-3.5" />
        <span className="hidden sm:inline">Search</span>
        <kbd className="rounded-md border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
          {shortcut}
        </kbd>
      </button>

      {/* biome-ignore lint/a11y/useKeyWithClickEvents: Esc closes the dialog natively; this only handles backdrop clicks. */}
      <dialog
        ref={dialogRef}
        aria-label="Command menu"
        onClick={onDialogClick}
        onClose={() => setQuery("")}
        className="command-dialog m-0 mx-auto mt-[12vh] w-[calc(100%-2rem)] max-w-lg overflow-hidden rounded-2xl border border-border bg-card p-0 text-foreground shadow-2xl shadow-black/40 backdrop:bg-background/60 backdrop:backdrop-blur-sm"
      >
        <div className="flex items-center gap-3 border-b border-border px-4 transition-colors focus-within:border-primary/50">
          <Search aria-hidden className="size-4 shrink-0 text-primary" />
          <input
            ref={inputRef}
            type="text"
            role="combobox"
            aria-expanded="true"
            aria-controls={listId}
            aria-autocomplete="list"
            aria-activedescendant={
              results.length ? optionId(listId, safeIndex) : undefined
            }
            placeholder="Type a command or search…"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIndex(0);
            }}
            onKeyDown={onInputKeyDown}
            className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground focus-visible:outline-none"
          />
          <kbd className="rounded-md border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
            esc
          </kbd>
        </div>

        <CommandList
          id={listId}
          items={results}
          activeIndex={safeIndex}
          onHover={setActiveIndex}
          onRun={run}
        />

        <div className="flex items-center gap-4 border-t border-border px-4 py-2 font-mono text-[10px] text-muted-foreground">
          <span>↑↓ navigate</span>
          <span>↵ select</span>
          <span className="ml-auto">esc close</span>
        </div>
      </dialog>
    </>
  );
}
