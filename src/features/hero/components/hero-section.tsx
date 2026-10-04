import { StatusPill } from "@/shared/components/ui/status-pill";
import { personalInfo } from "@/shared/lib/config";
import { HeroSocials } from "./hero-socials";
import { Portrait } from "./portrait";
import { RotatingRole } from "./rotating-role";

/**
 * Server-rendered hero. Entrance motion is pure CSS (`.stagger`); the only
 * client islands are the rotating role line and the magnetic CTA.
 */
export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate pt-8 sm:pt-20"
    >
      {/* Dotted backdrop that fades out from the top */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-24 -z-10 h-136 bg-[radial-gradient(circle,var(--border)_1px,transparent_1px)] bg-size-[20px_20px] mask-[radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]"
      />

      <div className="stagger">
        <div className="flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <StatusPill
              label={`Software engineer at ${personalInfo.company}`}
            />
            <h1
              id="hero-heading"
              className="mt-5 text-[2.5rem] font-semibold leading-[1.02] tracking-tighter text-balance sm:text-6xl"
            >
              <span className="block text-muted-foreground/70 text-[0.55em] font-medium tracking-tight">
                Hi, I&apos;m
              </span>
              <span className="text-shimmer">{personalInfo.name}</span>
              <span className="text-primary">.</span>
            </h1>
          </div>
          <Portrait />
        </div>

        <div className="mt-6">
          <RotatingRole />
        </div>

        <p className="mt-5 max-w-prose text-[0.975rem] leading-7 text-muted-foreground text-pretty">
          Fullstack engineer and UI/UX-minded builder from{" "}
          {personalInfo.location}. Writing code since 2021, I chase the sweet
          spot between{" "}
          <span className="text-foreground">detail-obsessed craft</span> and{" "}
          <span className="text-foreground">pragmatic shipping</span> — lately
          exploring AI-augmented tooling and design-engineering workflows.
        </p>

        <div className="mt-8">
          <HeroSocials />
        </div>
      </div>
    </section>
  );
}
