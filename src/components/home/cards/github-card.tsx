import { GithubIcon } from "@/components/icons";
import { Spotlight } from "@/components/ui/spotlight";
import { ArrowUpRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function GithubCard() {
  return (
    <Link
      href="https://github.com/khasherdene-xt"
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      <Spotlight className="card-luxe group relative flex h-full min-h-36 w-full flex-col justify-between overflow-hidden rounded-2xl text-white">
        <span aria-hidden className="absolute inset-0 -z-10">
          <Image
            src="/assets/octocat.jpg"
            alt=""
            fill
            priority
            className="object-cover object-center brightness-[0.45]"
          />
          <span className="absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-transparent" />
          <span className="absolute inset-0 bg-linear-to-tr from-emerald-950/60 via-transparent to-emerald-500/10 mix-blend-overlay" />
        </span>

        <span className="relative z-10 flex items-start justify-between p-5">
          <span className="flex items-center gap-2">
            <GithubIcon className="size-6" />
            <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white/80 backdrop-blur-sm">
              <Star className="size-2.5 fill-current" />
              open source
            </span>
          </span>
          <ArrowUpRight className="size-4 -translate-y-0.5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" />
        </span>

        <span className="relative z-10 space-y-0.5 p-5 pt-0">
          <span className="block text-sm font-semibold tracking-tight">
            GitHub
          </span>
          <span className="block text-xs text-white/65">
            My experiments &amp; projects
          </span>
        </span>
      </Spotlight>
    </Link>
  );
}
