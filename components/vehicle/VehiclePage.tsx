import Image from "next/image";
import { collection, type CarModel } from "@/lib/collection";
import Footer from "@/components/layout/Footer";

interface VehiclePageProps {
  car: CarModel;
}

function parseSpec(spec: string): { label: string; value: string } {
  const colonIndex = spec.indexOf(":");
  if (colonIndex === -1) return { label: "", value: spec };
  return {
    label: spec.slice(0, colonIndex).trim(),
    value: spec.slice(colonIndex + 1).trim(),
  };
}

function MondrianStrip({ colors }: { colors: string[] }): React.ReactElement {
  const segments = [...colors, "#000000"];
  return (
    <div className="flex w-full h-1" aria-hidden="true">
      {segments.map((color, i) => (
        <div key={i} className="flex-1" style={{ backgroundColor: color }} />
      ))}
    </div>
  );
}

export default function VehiclePage({ car }: VehiclePageProps): React.ReactElement {
  const currentIndex = collection.findIndex((c) => c.id === car.id);
  const prevCar = currentIndex > 0 ? collection[currentIndex - 1] : null;
  const nextCar = currentIndex < collection.length - 1 ? collection[currentIndex + 1] : null;

  const primaryAccent = car.accentColors[0] ?? "#E60000";
  const cibleAccent = car.accentColors.find((c) => c !== "#FFFFFF") ?? primaryAccent;

  return (
    <div className="min-h-screen bg-white text-black">

      {/* ── A) HEADER ── */}
      <header className="bg-white border-b-2 border-black sticky top-0 z-50">
        <div className="max-w-screen-2xl mx-auto px-6 h-14 flex items-center justify-between">
          <a
            href="/#collection"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-black hover:text-[#E60000] transition-colors duration-200"
          >
            <span aria-hidden="true">←</span>
            <span>COLLECTION</span>
          </a>

          <a
            href="/"
            className="hidden md:block text-sm font-black uppercase tracking-[0.3em] text-black hover:text-[#E60000] transition-colors duration-200"
          >
            COMPOSITION MB
          </a>

          <div className="flex items-center gap-4">
            {prevCar ? (
              <a
                href={`/collection/${prevCar.id}`}
                className="text-xs font-bold uppercase tracking-[0.15em] text-black hover:text-[#E60000] transition-colors duration-200"
                aria-label={`Œuvre précédente : ${prevCar.name}`}
              >
                ←
              </a>
            ) : (
              <span className="text-xs text-black/20">←</span>
            )}

            <span className="text-xs font-black uppercase tracking-[0.3em] tabular-nums">
              {car.number} / {String(collection.length).padStart(2, "0")}
            </span>

            {nextCar ? (
              <a
                href={`/collection/${nextCar.id}`}
                className="text-xs font-bold uppercase tracking-[0.15em] text-black hover:text-[#E60000] transition-colors duration-200"
                aria-label={`Œuvre suivante : ${nextCar.name}`}
              >
                →
              </a>
            ) : (
              <span className="text-xs text-black/20">→</span>
            )}
          </div>
        </div>
      </header>

      {/* ── B) HERO ── */}
      <section
        className="relative bg-black flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ minHeight: "50vh" }}
      >
        <span
          className="absolute select-none font-black text-white leading-none pointer-events-none"
          style={{ fontSize: "clamp(10rem, 30vw, 26rem)", opacity: 0.07, letterSpacing: "-0.05em" }}
          aria-hidden="true"
        >
          {car.number}
        </span>

        <div className="relative z-10 px-6 py-20">
          <p
            className="text-xs font-bold uppercase tracking-[0.4em] mb-6"
            style={{ color: primaryAccent === "#FFFFFF" ? "#E60000" : primaryAccent }}
          >
            {car.role}
          </p>

          <h1
            className="font-black italic text-white leading-none mb-4"
            style={{
              fontFamily: "var(--font-family-serif)",
              fontSize: "clamp(3rem, 10vw, 8rem)",
              letterSpacing: "-0.02em",
            }}
          >
            {car.name}
          </h1>

          <p className="text-sm uppercase tracking-[0.25em]" style={{ color: "rgba(255,255,255,0.55)" }}>
            {car.subtitle}
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <MondrianStrip colors={car.accentColors} />
        </div>
      </section>

      {/* ── C) 3 COLONNES ── */}
      <section className="border-b-2 border-black">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr]">

          {/* Col gauche */}
          <div className="order-2 md:order-1 border-b-2 md:border-b-0 md:border-r-2 border-black p-8 flex flex-col gap-6">
            <div>
              <div
                className="h-[3px] w-12 mb-4"
                style={{ backgroundColor: primaryAccent === "#FFFFFF" ? "#000000" : primaryAccent }}
              />
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-black/70">INTENTION</p>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-black">NÉOPLASTIQUE</p>
            </div>

            <p
              className="text-sm leading-relaxed font-light text-black/80"
              style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
            >
              {car.intentionNéoplastique}
            </p>

            {car.cible && (
              <div className="border-2 border-black p-4 mt-auto">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-black/65 mb-2">CIBLE</p>
                <p
                  className="text-xs leading-relaxed text-black"
                  style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                >
                  {car.cible}
                </p>
              </div>
            )}
          </div>

          {/* Col centre : image */}
          <div className="order-1 md:order-2 border-b-2 md:border-b-0 md:border-r-2 border-black bg-white flex items-center justify-center p-8">
            {car.image ? (
              <div className="relative w-full" style={{ maxHeight: "500px" }}>
                <Image
                  src={car.image}
                  alt={`${car.name} ${car.subtitle}`}
                  width={900}
                  height={600}
                  className="w-full h-auto object-contain"
                  style={{ maxHeight: "500px" }}
                  priority
                />
              </div>
            ) : (
              <div className="w-full bg-black flex items-center justify-center" style={{ minHeight: "400px" }}>
                <span
                  className="font-black text-white/10 select-none leading-none"
                  style={{ fontSize: "clamp(8rem, 20vw, 18rem)" }}
                  aria-hidden="true"
                >
                  {car.number}
                </span>
              </div>
            )}
          </div>

          {/* Col droite */}
          <div className="order-3 p-8 flex flex-col gap-6">
            <div>
              <div
                className="h-[3px] w-12 mb-4"
                style={{ backgroundColor: primaryAccent === "#FFFFFF" ? "#000000" : primaryAccent }}
              />
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-black/70">PRÉCISION</p>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-black">MÉCANIQUE</p>
            </div>

            <ul className="flex flex-col divide-y divide-black/10">
              {car.précisionMécanique.map((spec, i) => {
                const { label, value } = parseSpec(spec);
                return (
                  <li key={i} className="py-4">
                    {label && (
                      <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-black/65 mb-1">{label}</p>
                    )}
                    <p
                      className="text-sm font-bold text-black leading-snug"
                      style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" }}
                    >
                      {value || label}
                    </p>
                  </li>
                );
              })}
            </ul>

            <div className="mt-auto flex items-center gap-[2px]" aria-hidden="true">
              {car.accentColors.map((color, i) => (
                <div
                  key={i}
                  className="w-4 h-4"
                  style={{
                    backgroundColor: color === "#FFFFFF" ? "#000000" : color,
                    border: color === "#FFFFFF" ? "1px solid #000" : "none",
                  }}
                />
              ))}
              <div className="w-4 h-4 bg-black" />
            </div>
          </div>
        </div>
      </section>

      {/* ── D) BANDE MONDRIAN ── */}
      <MondrianStrip colors={car.accentColors} />

      {/* ── E) SECTION CIBLE ── */}
      {car.cible && (
        <section className="py-20 px-6 text-center" style={{ backgroundColor: cibleAccent }}>
          <p className="text-xs font-black uppercase tracking-[0.4em] text-white/60 mb-4">PUBLIC VISÉ</p>
          <p
            className="text-2xl lg:text-4xl font-black text-white max-w-3xl mx-auto leading-snug"
            style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
          >
            {car.cible}
          </p>
        </section>
      )}

      {/* ── F) NAVIGATION PRÉCÉDENT / SUIVANT ── */}
      <nav className="bg-black border-t-2 border-black">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-2">
          <div className="border-r-2 border-white/10">
            {prevCar ? (
              <a
                href={`/collection/${prevCar.id}`}
                className="flex flex-col justify-between h-full p-8 hover:bg-white/5 transition-colors duration-200"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 mb-3">
                  ← OEUVRE PRÉCÉDENTE
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 mb-1">{prevCar.number}</p>
                  <p
                    className="text-xl lg:text-2xl font-black italic text-white hover:text-[#E60000] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-family-serif)" }}
                  >
                    {prevCar.name}
                  </p>
                  <p className="text-xs text-white/65 mt-1 uppercase tracking-[0.15em]">{prevCar.subtitle}</p>
                </div>
              </a>
            ) : (
              <div className="flex items-center justify-center h-full p-8">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">PREMIÈRE OEUVRE</span>
              </div>
            )}
          </div>

          <div>
            {nextCar ? (
              <a
                href={`/collection/${nextCar.id}`}
                className="flex flex-col items-end justify-between h-full p-8 hover:bg-white/5 transition-colors duration-200 text-right"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 mb-3">
                  OEUVRE SUIVANTE →
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 mb-1">{nextCar.number}</p>
                  <p
                    className="text-xl lg:text-2xl font-black italic text-white hover:text-[#E60000] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-family-serif)" }}
                  >
                    {nextCar.name}
                  </p>
                  <p className="text-xs text-white/65 mt-1 uppercase tracking-[0.15em]">{nextCar.subtitle}</p>
                </div>
              </a>
            ) : (
              <div className="flex items-center justify-center h-full p-8">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">DERNIÈRE OEUVRE</span>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* ── G) FOOTER ── */}
      <Footer />
    </div>
  );
}
