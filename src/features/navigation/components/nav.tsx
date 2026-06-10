import Image from "next/image";
import Link from "next/link";

export function Nav() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3 rounded-lg px-1 py-1 transition-opacity hover:opacity-90"
    >
      <span className="relative">
        <Image
          src="/assets/me.jpeg"
          alt="Khash-Erdene"
          width={32}
          height={32}
          className="rounded-full ring-1 ring-border transition-all group-hover:ring-primary/50"
        />
        <span className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full bg-primary ring-2 ring-background animate-pulse-ring" />
      </span>
      <span className="text-sm font-medium text-foreground">
        I own a website.{" "}
        <span aria-label="waving hand" role="img">
          👋
        </span>
      </span>
    </Link>
  );
}
