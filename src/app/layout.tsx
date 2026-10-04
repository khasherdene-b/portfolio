import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Aurora } from "@/shared/components/ui/aurora";
import { Grain } from "@/shared/components/ui/grain";
import { PageSpotlight } from "@/shared/components/ui/page-spotlight";
import { ScrollProgress } from "@/shared/components/ui/scroll-progress";
import { personalInfo, siteConfig } from "@/shared/lib/config";
import { Providers } from "./providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const shortDescription = `Software engineer and fullstack developer based in ${personalInfo.location}.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "software engineer",
    "fullstack developer",
    "Mongolia",
    "Ulaanbaatar",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: personalInfo.name, url: siteConfig.url }],
  creator: personalInfo.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: shortDescription,
    type: "profile",
    url: "/",
    siteName: personalInfo.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: shortDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f8f6" },
    { media: "(prefers-color-scheme: dark)", color: "#06080a" },
  ],
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col bg-background text-foreground">
        <a
          href="#main"
          className="sr-only z-100 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Providers>
          <ScrollProgress />
          <PageSpotlight />
          <Aurora />
          {children}
          <Grain />
        </Providers>
      </body>
    </html>
  );
}
