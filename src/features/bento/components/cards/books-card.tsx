import { ArrowUpRight, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function BooksCard() {
  return (
    <Link
      href="/books"
      className="group relative flex h-full min-h-30 w-full overflow-hidden rounded-2xl border border-border ring-1 ring-transparent transition-all duration-500 hover:ring-primary/30 hover:-translate-y-0.5"
    >
      <Image
        src="/assets/books.jpg"
        alt="Books"
        fill
        className="object-cover object-center brightness-[0.5] transition-transform duration-700 group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-linear-to-t from-black/75 via-black/30 to-black/10" />
      <span className="absolute inset-0 bg-linear-to-tr from-emerald-900/40 via-transparent to-transparent mix-blend-overlay" />

      <ArrowUpRight className="absolute right-3 top-3 size-4 text-white/70 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-0.5" />

      <div className="absolute inset-0 flex flex-col justify-between px-4 py-3 text-white">
        <div className="flex items-center justify-between">
          <Quote className="size-4 rotate-180 text-primary/80" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/55">
            reading
          </span>
        </div>
        <div>
          <p className="text-sm font-medium leading-snug">
            A wise man never loses anything, if he has himself.
          </p>
          <span className="mt-1 block font-mono text-[11px] text-white/55">
            ― Michel de Montaigne
          </span>
        </div>
      </div>
    </Link>
  );
}
