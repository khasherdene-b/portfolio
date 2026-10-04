import { ArrowUpRight, Globe, MapPin } from "lucide-react";
import Link from "next/link";
import { CardBase } from "@/shared/components/ui/card-base";
import { personalInfo } from "@/shared/lib/config";

const MAPS_URL = "https://www.google.com/maps/place/Ulaanbaatar,+Mongolia/";

export function LocationCard() {
  return (
    <Link
      href={MAPS_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Based in ${personalInfo.location} — open in Google Maps`}
      className="block h-full rounded-2xl"
    >
      <CardBase className="group relative flex h-full min-h-40 w-full flex-col justify-between rounded-2xl">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.05] mask-[radial-gradient(ellipse_at_center,black,transparent_75%)]"
          style={{
            backgroundImage:
              "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        {/* Pin with ripple, centred on the grid */}
        <span
          aria-hidden
          className="absolute left-1/2 top-[54%] flex size-3 -translate-x-1/2 -translate-y-1/2"
        >
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/50" />
          <span className="relative inline-flex size-3 rounded-full bg-primary ring-4 ring-primary/20" />
        </span>

        <div className="relative z-10 flex items-center justify-between px-4 pt-4">
          <span className="flex items-center gap-2 text-sm font-semibold">
            <MapPin className="size-4 text-primary" />
            Based in
          </span>
          <span className="font-mono text-[10px] text-muted-foreground">
            {personalInfo.coordinates.lat} · {personalInfo.coordinates.lng}
          </span>
        </div>

        <div className="relative z-10 flex items-center justify-between px-4 pb-4">
          <span className="flex items-center gap-2 text-sm font-medium">
            <Globe className="size-4 shrink-0 text-primary animate-float" />
            {personalInfo.location}
          </span>
          <ArrowUpRight className="size-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
        </div>
      </CardBase>
    </Link>
  );
}
