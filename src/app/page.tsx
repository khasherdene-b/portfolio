import { BentoGrid } from "@/features/bento";
import { HeroSection } from "@/features/hero";
import { Footer, Header } from "@/features/navigation";
import { ProjectsSection } from "@/features/projects";
import { personalInfo, siteConfig } from "@/shared/lib/config";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.name,
  url: siteConfig.url,
  image: `${siteConfig.url}/assets/me.jpeg`,
  jobTitle: "Software Engineer",
  worksFor: { "@type": "Organization", name: personalInfo.company },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ulaanbaatar",
    addressCountry: "MN",
  },
  sameAs: Object.values(personalInfo.social),
};

export default function HomePage() {
  return (
    <div
      id="top"
      className="relative mx-auto flex w-full max-w-2xl flex-1 flex-col px-5 sm:px-8"
    >
      <script
        type="application/ld+json"
        // Escape "<" so the payload can never close the script tag (XSS).
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static, escaped JSON-LD as recommended by the Next.js docs.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <HeroSection />
        <BentoGrid />
        <ProjectsSection />
      </main>
      <Footer className="mt-20" />
    </div>
  );
}
