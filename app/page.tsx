import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ManifesteSection from "@/components/home/ManifesteSection";
import CollectionGrid from "@/components/home/CollectionGrid";
import StatsSection from "@/components/home/StatsSection";
import MondriansGrid from "@/components/home/MondriansGrid";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MondrianSeparator accent="#E60000" />
        <ManifesteSection />
        <CollectionGrid />
        <StatsSection />
        <MondriansGrid />
      </main>
      <Footer />
    </>
  );
}

/* ─── Séparateur géométrique minimaliste entre sections ─── */
interface SeparatorProps {
  accent: string;
}

function MondrianSeparator({ accent }: SeparatorProps) {
  return (
    <div className="flex h-1" aria-hidden="true">
      <div className="flex-1" style={{ background: accent }} />
      <div className="flex-1 bg-[#003DA5]" />
      <div className="flex-1 bg-[#FFD100]" />
      <div className="flex-1 bg-black" />
    </div>
  );
}
