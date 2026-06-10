"use client";

import { useEffect, useState } from "react";

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

export function useRotatingEmoji() {
  const [emoji, setEmoji] = useState(EMOJIS[0]);

  useEffect(() => {
    const id = globalThis.setInterval(() => {
      setEmoji((prev) => {
        const pool = EMOJIS.filter((e) => e !== prev);
        return pool[Math.trunc(Math.random() * pool.length)];
      });
    }, 600);
    return () => globalThis.clearInterval(id);
  }, []);

  return emoji;
}
