import { InstagramIcon, LinkedinIcon } from "@/components/icons";
import { personalInfo } from "@/lib/config";
import Link from "next/link";

export function SocialLinksCard() {
  const { linkedin, instagram } = personalInfo;

  return (
    <div className="flex gap-2">
      <Link
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-16.5 w-full flex-col items-center justify-center gap-0.5 overflow-hidden rounded-xl bg-[#0a3d62] text-white ring-1 ring-white/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px] hover:shadow-[#2867b2]/60"
      >
        <span className="pointer-events-none absolute inset-0 bg-linear-to-br from-[#2867b2]/0 via-[#2867b2]/40 to-[#2867b2]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <LinkedinIcon className="relative size-5" />
        <p className="relative text-[11px] -rotate-2 text-white/70 transition-colors group-hover:text-white">
          serious stuff
        </p>
      </Link>

      <Link
        href={instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-16.5 w-full flex-col items-center justify-center gap-0.5 overflow-hidden rounded-xl bg-zinc-950 text-white ring-1 ring-white/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px] hover:shadow-pink-500/60"
      >
        <span className="pointer-events-none absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,#f59e0b_0deg,#ef4444_90deg,#ec4899_180deg,#8b5cf6_270deg,#f59e0b_360deg)] opacity-0 transition-opacity duration-500 group-hover:opacity-30" />
        <InstagramIcon className="relative size-5" />
        <p className="relative text-[11px] -rotate-2 text-white/50 transition-colors group-hover:text-white/90">
          for connection
        </p>
      </Link>
    </div>
  );
}
