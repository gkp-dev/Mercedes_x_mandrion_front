"use client";

interface StatItem {
  value: string;
  label: string;
}

const STATS: StatItem[] = [
  { value: "5", label: "ŒUVRES ORIGINALES" },
  { value: "1952", label: "PREMIÈRE SCULPTURE" },
  { value: "100%", label: "ÉDITION LIMITÉE" },
  { value: "∞", label: "VALEUR ARTISTIQUE" },
];

export default function StatsSection() {
  return (
    <section id="galerie" className="bg-black border-t-2 border-b-2 border-black">
      <div className="max-w-screen-2xl mx-auto px-8">
        {/* En-tête */}
        <div className="py-12 border-b border-white/20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-6 h-[2px] bg-white/40" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">
              En chiffres
            </span>
          </div>
          <div className="flex items-center gap-[2px]" aria-hidden="true">
            <div className="w-4 h-4 bg-[#E60000]" />
            <div className="w-4 h-4 bg-[#003DA5]" />
            <div className="w-4 h-4 bg-[#FFD100]" />
          </div>
        </div>

        {/* Grille stats 4 colonnes */}
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center py-16 px-8 text-center ${
                i < STATS.length - 1 ? "border-r border-white/20" : ""
              }`}
            >
              <span
                className="block font-black text-white leading-none mb-4"
                style={{ fontSize: "clamp(3.5rem, 7vw, 6rem)" }}
              >
                {stat.value}
              </span>
              <div className="w-8 h-[1px] bg-white/40 mb-4" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/80">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
