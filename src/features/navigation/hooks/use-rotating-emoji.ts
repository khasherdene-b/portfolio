"use client";

import { useState } from "react";

const EMOJIS = [
  "💻",
  "🧠",
  "♟️",
  "🎮",
  "📚",
  "🏆",
  "🧩",
  "📝",
  "🕹️",
  "🍫",
  "🔍",
  "🌟",
  "📈",
  "🤖",
  "🎯",
  "🛠️",
  "🎲",
  "🌱",
  "🇲🇳",
];

/**
 * Picks a new random emoji on demand. Previously this ran on a 600ms timer,
 * which re-rendered the footer forever and pulled the eye away from content;
 * now it's an interaction-driven easter egg.
 */
export function useRotatingEmoji() {
  const [emoji, setEmoji] = useState(EMOJIS[0]);

  function next() {
    setEmoji((prev) => {
      const pool = EMOJIS.filter((e) => e !== prev);
      return pool[Math.trunc(Math.random() * pool.length)];
    });
  }

  return { emoji, next };
}
