import { StatusPill } from "@/components/ui/status-pill";
import { personalInfo } from "@/lib/config";
import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";

export function Intro() {
  return (
    <section className="mt-10 stagger">
      <StatusPill label="Software engineer at Arigbank" />

      <h1 className="mt-5 text-[2rem] leading-[1.05] font-semibold tracking-tight sm:text-[2.4rem]">
        Hi, I&apos;m <span className="text-shimmer">Khash-Erdene</span>
        <span className="text-primary">.</span>
      </h1>

      <p className="mt-4 max-w-prose text-[0.95rem] leading-7 text-muted-foreground">
        A fullstack engineer from{" "}
        <span className="font-medium text-foreground">
          Ulaanbaatar, Mongolia
        </span>{" "}
        — turning ideas into refined, performant web experiences. I&apos;ve been
        writing code since <span className="font-mono text-primary">2021</span>,
        chasing the sweet spot between detail-obsessed craft and pragmatic
        shipping.
      </p>

      <p className="mt-3 max-w-prose text-[0.95rem] leading-7 text-muted-foreground">
        Currently exploring AI-augmented tooling, edge databases, and the next
        generation of design-engineering workflows.
      </p>

      {/* Decorative divider */}
      <div className="my-6 flex items-center gap-3">
        <span className="h-px flex-1 bg-linear-to-r from-transparent via-primary/40 to-transparent" />
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          let&apos;s talk
        </span>
        <span className="h-px flex-1 bg-linear-to-r from-transparent via-primary/40 to-transparent" />
      </div>

      <div className="flex flex-wrap items-center gap-2.5">
        <Link
          href={`mailto:${personalInfo.email}`}
          className="group inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_8px_30px_-8px] hover:shadow-primary/60 hover:-translate-y-0.5"
        >
          <Mail className="size-3.5" />
          Drop an email
          <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
        <Link
          href={personalInfo.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:-translate-y-0.5"
        >
          Say hi on Instagram
          <ArrowUpRight className="size-3.5 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
        </Link>
      </div>
    </section>
  );
}
