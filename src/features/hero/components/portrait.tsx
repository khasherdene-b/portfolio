import Image from "next/image";
import { personalInfo } from "@/shared/lib/config";

export function Portrait() {
  return (
    <div className="group relative w-fit shrink-0">
      {/* Soft emerald/gold glow behind the frame */}
      <div
        aria-hidden
        className="absolute -inset-5 rounded-full bg-[radial-gradient(circle_at_30%_30%,var(--primary-glow),transparent_70%)] blur-2xl transition-opacity duration-700 group-hover:opacity-100 sm:opacity-80"
      />

      {/* Gradient ring — straightens on hover */}
      <div className="relative rotate-3 rounded-[1.5rem] sm:rounded-[1.75rem] bg-[conic-gradient(from_140deg,var(--primary),var(--gold-soft),transparent_55%,var(--primary))] p-[2px] shadow-[0_20px_50px_-20px_var(--primary-glow)] transition-transform duration-500 ease-out group-hover:rotate-0 group-hover:scale-[1.02]">
        <Image
          src="/assets/me.jpeg"
          alt={`Portrait of ${personalInfo.name}`}
          width={144}
          height={144}
          preload
          sizes="(min-width: 640px) 144px, 80px"
          className="size-20 rounded-[1.4rem] sm:rounded-[1.65rem] bg-muted object-cover sm:size-36"
        />
      </div>

      <span className="absolute -bottom-2.5 -right-14 flex sm:-left-3 sm:right-auto items-center gap-1.5 rounded-full border border-border bg-card/90 px-2.5 py-1 text-[11px] font-medium text-foreground shadow-sm backdrop-blur-md">
        <span aria-hidden>🇲🇳</span>
        Ulaanbaatar
      </span>
    </div>
  );
}
