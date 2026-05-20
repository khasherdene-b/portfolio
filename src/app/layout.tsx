import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme/provider";
import { Aurora } from "@/components/ui/aurora";
import { Grain } from "@/components/ui/grain";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://khasherdene.vercel.app"),
  title: "Khash-Erdene — Software Engineer",
  description:
    "Software engineer and fullstack developer based in Ulaanbaatar, Mongolia. Building fast, thoughtful web experiences.",
  keywords: [
    "software engineer",
    "fullstack developer",
    "Mongolia",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Khash-Erdene" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Khash-Erdene — Software Engineer",
    description:
      "Software engineer and fullstack developer based in Ulaanbaatar, Mongolia.",
    type: "website",
    url: "/",
    siteName: "Khash-Erdene",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khash-Erdene — Software Engineer",
    description:
      "Software engineer and fullstack developer based in Ulaanbaatar, Mongolia.",
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
      <body className="relative min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Aurora />
          {children}
          <Grain />
        </ThemeProvider>
      </body>
    </html>
  );
}
