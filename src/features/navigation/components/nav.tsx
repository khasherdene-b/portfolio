import Image from "next/image";
import Link from "next/link";
import { personalInfo } from "@/shared/lib/config";

export function Nav() {
  return (
    <Link
      href="/"
      aria-label={`${personalInfo.name} — home`}
      className="group flex items-center gap-2.5 rounded-lg p-1 transition-opacity hover:opacity-90"
    >
      <span className="relative shrink-0">
        <Image
          src="/assets/me.jpeg"
          alt=""
          width={32}
          height={32}
          preload
          className="size-8 rounded-full object-cover ring-1 ring-border transition-all group-hover:ring-primary/50"
        />
        <span
          aria-hidden
          className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full bg-primary ring-2 ring-background animate-pulse-ring"
        />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-sm font-medium text-foreground">
          {personalInfo.name}
        </span>
        <span className="hidden text-[11px] text-muted-foreground min-[400px]:block">
          I own a website. 👋
        </span>
      </span>
    </Link>
  );
}
