import { BentoGrid } from "@/features/bento/components/bento-grid";
import { HeroSection } from "@/features/hero/components/hero-section";
import { Footer } from "@/features/navigation/components/footer";
import { Header } from "@/features/navigation/components/header";

export default function HomePage() {
  return (
    <div className="relative mx-auto flex w-full max-w-2xl flex-1 flex-col px-5 py-6 sm:px-8">
      <Header />
      <main className="flex-1 animate-fade-in">
        <HeroSection />
        <BentoGrid />
      </main>
      <Footer className="mt-12" />
    </div>
  );
}
