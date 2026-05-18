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
  title: "Khash-Erdene — Software Engineer",
  description:
    "Software engineer and fullstack developer based in Ulaanbaatar, Mongolia. Building fast, thoughtful web experiences.",
  keywords: ["software engineer", "fullstack developer", "Mongolia", "Next.js", "React"],
  authors: [{ name: "Khash-Erdene" }],
  openGraph: {
    title: "Khash-Erdene — Software Engineer",
    description:
      "Software engineer and fullstack developer based in Ulaanbaatar, Mongolia.",
    type: "website",
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
