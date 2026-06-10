"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";
import { StatusPill } from "@/shared/components/ui/status-pill";
import { personalInfo } from "@/shared/lib/config";
import { Magnetic } from "./magnetic-cta";
import { WordFadeBio } from "./word-fade-bio";

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: -8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: EASE },
});

export function HeroSection() {
  return (
    <section className="mt-10">
      <motion.div {...fadeUp(0.05)}>
        <StatusPill label="Software engineer at Arigbank" />
      </motion.div>

      <motion.h1
        className="mt-5 text-[2rem] leading-[1.05] font-semibold tracking-tight sm:text-[2.4rem]"
        {...fadeUp(0.15)}
      >
        Hi, I&apos;m <span className="text-shimmer">Khash-Erdene</span>
        <span className="text-primary">.</span>
      </motion.h1>

      <motion.p
        className="mt-4 max-w-prose text-[0.95rem] leading-7 text-muted-foreground"
        {...fadeUp(0.25)}
      >
        <WordFadeBio baseDelay={0.25}>
          A fullstack engineer from Ulaanbaatar, Mongolia — turning ideas into
          refined, performant web experiences. I&apos;ve been writing code since
          2021, chasing the sweet spot between detail-obsessed craft and
          pragmatic shipping.
        </WordFadeBio>
      </motion.p>

      <motion.p
        className="mt-3 max-w-prose text-[0.95rem] leading-7 text-muted-foreground"
        {...fadeUp(0.35)}
      >
        Currently exploring AI-augmented tooling, edge databases, and the next
        generation of design-engineering workflows.
      </motion.p>

      <motion.div className="my-6 flex items-center gap-3" {...fadeUp(0.45)}>
        <span className="h-px flex-1 bg-linear-to-r from-transparent via-primary/40 to-transparent" />
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          let&apos;s talk
        </span>
        <span className="h-px flex-1 bg-linear-to-r from-transparent via-primary/40 to-transparent" />
      </motion.div>

      <motion.div
        className="flex flex-wrap items-center gap-2.5"
        {...fadeUp(0.5)}
      >
        <Magnetic>
          <Link
            href={`mailto:${personalInfo.social.email}`}
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_8px_30px_-8px] hover:shadow-primary/60 hover:-translate-y-0.5"
          >
            <Mail className="size-3.5" />
            Drop an email
            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Magnetic>
        <Magnetic>
          <Link
            href={personalInfo.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:-translate-y-0.5"
          >
            Say hi on Instagram
            <ArrowUpRight className="size-3.5 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
          </Link>
        </Magnetic>
      </motion.div>
    </section>
  );
}
