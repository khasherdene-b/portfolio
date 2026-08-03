import Image from "next/image";

export function AnimeCard() {
  return (
    <div className="group relative flex h-full min-h-36 w-full overflow-hidden rounded-2xl border border-border ring-1 ring-transparent transition-all duration-500 hover:ring-primary/30 hover:-translate-y-0.5">
      <Image
        src="/assets/aot.jpg"
        alt="Attack on Titan"
        fill
        priority
        className="object-cover object-center brightness-[0.55] transition-transform duration-700 group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />
      <span className="absolute inset-0 bg-linear-to-br from-emerald-500/15 via-transparent to-transparent mix-blend-overlay" />

      <p className="absolute bottom-3 left-0 origin-bottom-left -rotate-90 translate-x-[-2.6rem] whitespace-nowrap font-mono text-xs font-bold tracking-[0.3em] text-white drop-shadow-[0_0_8px_rgba(0,0,0,0.6)]">
        進撃の巨人
      </p>

      <span className="absolute bottom-3 right-3 font-mono text-[10px] uppercase tracking-[0.22em] text-white/70">
        anime
      </span>
    </div>
  );
}
