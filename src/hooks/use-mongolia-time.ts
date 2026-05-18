"use client";

import { useEffect, useState } from "react";

const FORMATTER = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Ulaanbaatar",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

export function useMongoliaTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(FORMATTER.format(new Date()));
    tick();
    const id = globalThis.setInterval(tick, 1000);
    return () => globalThis.clearInterval(id);
  }, []);

  return time;
}
