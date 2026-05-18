import { BentoGrid } from "@/components/home/bento-grid";
import { Intro } from "@/components/home/intro";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function HomePage() {
  return (
    <div className="relative mx-auto flex w-full max-w-2xl flex-1 flex-col px-5 py-6 sm:px-8">
      <Header />
      <main className="flex-1 animate-fade-in">
        <Intro />
        <BentoGrid />
      </main>
      <Footer className="mt-12" />
    </div>
  );
}
