import { Spotlight } from "@/components/ui/spotlight";
import { Compass, Globe, MapPin, Navigation } from "lucide-react";
import Link from "next/link";

export function LocationCard() {
  return (
    <Link
      href="https://www.google.com/maps/place/Ulaanbaatar,+Mongolia/"
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      <Spotlight className="card-luxe group flex h-36 w-full flex-col justify-between overflow-hidden rounded-2xl">
        {/* Decorative grid lines suggesting a map */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        <div className="relative px-4 pt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" />
              <span className="text-sm font-semibold">Located</span>
            </div>
            <span className="font-mono text-[10px] text-muted-foreground">
              47.92°N · 106.92°E
            </span>
          </div>
          <div className="mt-3 flex items-center gap-2 border-y border-border py-2.5">
            <Globe className="size-4 shrink-0 text-primary animate-float" />
            <span className="text-sm font-medium">Ulaanbaatar, Mongolia</span>
          </div>
        </div>

        <div className="relative flex items-center justify-between px-4 pb-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Navigation className="size-3" />
              Navigate
            </span>
            <span className="flex items-center gap-1">
              <Compass className="size-3" />
              Explore
            </span>
          </div>
          <span className="translate-x-2 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            Open Maps →
          </span>
        </div>
      </Spotlight>
    </Link>
  );
}
