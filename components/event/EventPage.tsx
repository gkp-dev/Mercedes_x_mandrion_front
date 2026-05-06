"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "@/components/layout/Footer";

// ─── Types ──────────────────────────────────────────────────────────────────

interface TourStop {
  num: string;
  city: string;
  venue: string;
  date: string;
  isNext?: boolean;
}

interface FormState {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  motivation: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const TOUR_STOPS: TourStop[] = [
  {
    num: "01",
    city: "PARIS",
    venue: "Lancement mondial",
    date: "15 AOÛT 2026",
    isNext: true,
  },
  { num: "02", city: "NEW YORK", venue: "MoMA", date: "2027" },
  {
    num: "03",
    city: "PARIS",
    venue: "Centre Pompidou",
    date: "2027 — 2028",
  },
  { num: "04", city: "BILBAO", venue: "Guggenheim", date: "2028" },
  {
    num: "05",
    city: "BERLIN",
    venue: "Neue Nationalgalerie",
    date: "2028 — 2029",
  },
];

// ─── Subcomponents ──────────────────────────────────────────────────────────

/**
 * Fixed event header — distinct from the main site header.
 * Uses its own dark treatment to suit the black-bg page.
 */
function EventHeader(): React.JSX.Element {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="flex items-center justify-between px-6 md:px-10 h-16 max-w-screen-2xl mx-auto">
        {/* Back to home */}
        <Link
          href="/"
          className="text-xs font-black uppercase tracking-[0.25em] text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-2"
        >
          <span aria-hidden="true">←</span>
          <span>COMPOSITION MB</span>
        </Link>

        {/* Page label */}
        <span
          className="text-[10px] font-black uppercase tracking-[0.4em]"
          style={{ color: "#E60000" }}
        >
          ÉVÉNEMENT
        </span>

        {/* CTA — hidden on mobile */}
        <a
          href="#invitation"
          className="hidden md:flex items-center gap-2 text-xs font-black uppercase tracking-[0.25em] text-white/70 hover:text-white transition-colors duration-200"
        >
          <span>INVITATION PRIVÉE</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </header>
  );
}

/** Full-bleed Mondrian colour strip */
function MondrianStrip(): React.JSX.Element {
  return (
    <div className="flex h-1" aria-hidden="true">
      <div className="flex-1 bg-[#E60000]" />
      <div className="flex-1 bg-[#003DA5]" />
      <div className="flex-1 bg-[#FFD100]" />
      <div className="flex-1 bg-black" />
    </div>
  );
}

/** Scroll-triggered hero with light reveal effect */
function HeroSection(): React.JSX.Element {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Classique fades IN over noir — noir reste toujours visible en base (pas de trou noir)
  const classiqueOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);
  // Hero text fades and slides upward before the swap finishes
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.45], [1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-6%"]);

  return (
    /* Tall container — 200vh creates the "scrollable canvas" for the sticky trick */
    <section ref={containerRef} className="relative h-[200vh]">
      {/* Sticky viewport — stays pinned while scroll consumes the extra 100vh above */}
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* ── Layer 1 (base): noir — toujours visible, jamais animée ── */}
        <div className="absolute inset-0">
          <Image
            src="/images/gallerie/gallerie_noir.png"
            alt="Gallerie noire Mercedes-Benz × Mondrian"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* ── Layer 2 (top): classique — apparaît par-dessus, aucun trou noir ── */}
        <motion.div
          className="absolute inset-0"
          style={{ opacity: classiqueOpacity }}
        >
          <Image
            src="/images/gallerie/gallerie_classique.png"
            alt="Gallerie classique Mercedes-Benz × Mondrian"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>

        {/* ── Layer 3: text content — ancré en haut, galerie visible en bas ── */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-start px-6 md:px-10 pt-10 md:pt-12"
          style={{ opacity: textOpacity, y: textY }}
        >
          {/* Date badge */}
          <p
            className="text-[10px] font-black uppercase tracking-[0.5em] mb-5"
            style={{ color: "#E60000" }}
          >
            15 AOÛT 2026
          </p>

          {/* Main heading — editorial serif, italic, fluid size */}
          <h1
            className="text-white font-black italic leading-[0.9] mb-6 max-w-4xl"
            style={{
              fontFamily: "var(--font-family-serif)",
              fontSize: "clamp(2.8rem, 7vw, 7rem)",
            }}
          >
            L'Immersion dans
            <br />
            l'Avant-Garde
          </h1>

          {/* Tagline */}
          <p
            className="text-white/70 text-sm md:text-base font-light max-w-lg leading-relaxed"
                      >
            "Une immersion totale, une expérience multisensorielle qui brouille les frontières entre l'art et l'automobile."
          </p>

          {/* Scroll indicator — bas de l'écran */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            <motion.div
              className="w-px h-12 bg-white/40"
              animate={{ scaleY: [1, 0.4, 1], originY: 0 }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
            <p className="text-[9px] font-black uppercase tracking-[0.5em] text-white/40">
              DÉFILER
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/** Concept / Showroom section — white bg */
function ConceptSection(): React.JSX.Element {
  return (
    <section className="bg-white py-24 md:py-36 px-6 md:px-10">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-[1fr_2fr] gap-16">
        {/* Left: label */}
        <div>
          {/* Red accent bar */}
          <div className="w-8 h-0.5 bg-[#E60000] mb-4" />
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-black/50 leading-relaxed">
            CONCEPT
            <br />
            <span className="text-black">LE SHOWROOM</span>
            <br />
            <span className="text-black">GALERIE D'ART</span>
          </p>
        </div>

        {/* Right: quote + cards */}
        <div>
          {/* Editorial quote */}
          <blockquote
            className="font-light text-2xl md:text-3xl leading-snug mb-12 text-black"
            style={{
                          }}
          >
            <em>
              "Un espace épuré, minimaliste, où chaque véhicule est une pièce
              maîtresse, éclairée comme une sculpture, entourée de silence et de
              contemplation."
            </em>
          </blockquote>

          {/* Two concept cards */}
          <div className="grid sm:grid-cols-2 border-t-2 border-black">
            <div className="p-8 sm:border-r-2 border-black border-b-2 sm:border-b-0">
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#E60000] mb-4">
                SCULPTURES CINÉTIQUES
              </p>
              <p className="text-sm text-black/70 leading-relaxed">
                Les véhicules ne sont plus de simples voitures. Chaque carrosserie
                devient une surface d'expression plastique, un objet d'art en
                mouvement potentiel.
              </p>
            </div>
            <div className="p-8">
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#E60000] mb-4">
                MANIFESTES ROULANTS
              </p>
              <p className="text-sm text-black/70 leading-relaxed">
                Chaque pièce de la collection incarne une déclaration esthétique —
                la rencontre de la précision mécanique allemande et de la rigueur
                géométrique néoplastique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Grilles Lumineuses — installation interactive section, black bg */
function GrillesSection(): React.JSX.Element {
  // Mondrian grid cell colours — 9 cells for a 3×3 grid
  const MONDRIAN_CELLS = [
    "#E60000",
    "#003DA5",
    "#000000",
    "#FFD100",
    "rgba(255,255,255,0.12)",
    "#E60000",
    "#000000",
    "#003DA5",
    "#FFD100",
  ];

  return (
    <section className="bg-black py-24 md:py-36 px-6 md:px-10">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-[2fr_1fr] gap-16 items-center">
        {/* Left: content */}
        <div>
          <p
            className="text-[10px] font-black uppercase tracking-[0.45em] mb-6"
            style={{ color: "#E60000" }}
          >
            INSTALLATION INTERACTIVE
          </p>

          <h2
            className="text-white italic leading-[0.9] mb-8"
            style={{
              fontFamily: "var(--font-family-serif)",
              fontSize: "clamp(2.5rem, 5vw, 5rem)",
            }}
          >
            Grilles
            <br />
            Lumineuses
          </h2>

          <p
            className="text-white/70 text-base md:text-lg font-light leading-relaxed mb-10 max-w-lg"
            style={{
                          }}
          >
            Une installation où les visiteurs interagissent avec des grilles
            lumineuses inspirées de Mondrian — révélant, en temps réel, la
            géométrie cachée des carrosseries.
          </p>

          {/* Info boxes */}
          <div className="grid grid-cols-2 border-t border-white/20">
            <div className="py-6 pr-6 border-r border-white/20">
              <p
                className="text-[10px] font-black uppercase tracking-[0.35em] mb-3"
                style={{ color: "#FFD100" }}
              >
                DIGITAL
              </p>
              <p className="text-sm text-white/60 leading-relaxed">
                Projection mapping temps réel sur les surfaces des véhicules.
              </p>
            </div>
            <div className="py-6 pl-6">
              <p
                className="text-[10px] font-black uppercase tracking-[0.35em] mb-3"
                style={{ color: "#FFD100" }}
              >
                PHYSIQUE
              </p>
              <p className="text-sm text-white/60 leading-relaxed">
                Panneaux lumineux modulables composant des grilles in situ.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Mondrian visual grid — desktop only */}
        <div
          className="hidden md:grid grid-cols-3 gap-[3px] aspect-square"
          aria-hidden="true"
        >
          {MONDRIAN_CELLS.map((color, i) => (
            <div key={i} style={{ backgroundColor: color }} />
          ))}
        </div>
      </div>
    </section>
  );
}

/** Ultra-VIP personalisation section — white bg, centered */
function UltraVipSection(): React.JSX.Element {
  return (
    <section className="bg-white py-24 md:py-36 px-6 md:px-10 text-center">
      <div className="max-w-screen-md mx-auto">
        <p className="text-[10px] font-black uppercase tracking-[0.45em] text-black/40 mb-6">
          ESPACE ULTRA-VIP
        </p>

        <h2
          className="text-black leading-[0.88] mb-8"
          style={{
            fontFamily: "var(--font-family-serif)",
            fontSize: "clamp(2rem, 5vw, 5.5rem)",
          }}
        >
          PERSONNALISATION
          <br />
          <em>VISUELLE MONDRIAN</em>
        </h2>

        <p className="text-black/60 text-base md:text-lg font-light leading-relaxed mb-12 max-w-lg mx-auto">
          Chaque client Ultra-VIP dispose d'une session de personnalisation
          dédiée — composez votre propre palette Mondrian sur la carrosserie de
          votre véhicule, assisté par nos artistes en résidence.
        </p>

        {/* Massive CTA */}
        <a
          href="#invitation"
          className="inline-block w-full max-w-xl px-10 py-5 bg-black text-white text-xs font-black uppercase tracking-[0.3em] transition-colors duration-300 hover:bg-[#E60000]"
        >
          SOLLICITER UNE INVITATION PRIVÉE
        </a>
      </div>
    </section>
  );
}

/** World tour stops */
function TourneeSection(): React.JSX.Element {
  return (
    <section className="bg-black py-24 md:py-36 px-6 md:px-10">
      <div className="max-w-screen-xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <p
            className="text-[10px] font-black uppercase tracking-[0.45em] mb-6"
            style={{ color: "#E60000" }}
          >
            CYCLE DE 5 LANCEMENTS — 24 À 36 MOIS
          </p>
          <h2
            className="text-white italic leading-[0.9]"
            style={{
              fontFamily: "var(--font-family-serif)",
              fontSize: "clamp(2.5rem, 5vw, 5rem)",
            }}
          >
            Tournée Mondiale
          </h2>
        </div>

        {/* Stops list */}
        <ul className="divide-y divide-white/10">
          {TOUR_STOPS.map((stop) => (
            <li key={stop.num}>
              <div className="grid grid-cols-[3rem_1fr_auto] md:grid-cols-[4rem_1fr_1fr_auto] items-center gap-6 py-6">
                {/* Number */}
                <span className="text-xs font-black text-white/30 tabular-nums">
                  {stop.num}
                </span>

                {/* City + venue */}
                <div>
                  <p
                    className="text-white font-black leading-tight"
                    style={{
                      fontFamily: "var(--font-family-serif)",
                      fontSize: "clamp(1.2rem, 2.5vw, 2rem)",
                    }}
                  >
                    {stop.city}
                  </p>
                  <p
                    className="text-[10px] font-black uppercase tracking-[0.35em] mt-1"
                    style={{ color: "#E60000" }}
                  >
                    {stop.venue}
                  </p>
                </div>

                {/* Date — hidden on mobile */}
                <p className="hidden md:block text-sm text-white/40 font-light tabular-nums text-right">
                  {stop.date}
                </p>

                {/* Badge */}
                <div className="flex justify-end">
                  {stop.isNext ? (
                    <span
                      className="text-[9px] font-black uppercase tracking-[0.3em] px-3 py-1.5 text-white"
                      style={{ backgroundColor: "#E60000" }}
                    >
                      PROCHAIN
                    </span>
                  ) : (
                    // Invisible placeholder to keep grid alignment
                    <span className="w-[68px]" aria-hidden="true" />
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Footer note */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <p
            className="text-sm text-white/40 italic font-light leading-relaxed"
            style={{
                          }}
          >
            Programme soumis à évolution. Des pop-ups éphémères seront organisés
            dans des espaces partenaires et institutions culturelles sélectionnées
            au cours de chaque cycle.
          </p>
        </div>
      </div>
    </section>
  );
}

/** Private invitation form */
function FormSection(): React.JSX.Element {
  const [form, setForm] = useState<FormState>({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    motivation: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    setSubmitting(true);
    // Simulate async submission — replace with real endpoint
    await new Promise<void>((resolve) => setTimeout(resolve, 1200));
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <section id="invitation" className="bg-white py-24 md:py-36 px-6 md:px-10">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-[1fr_2fr] gap-16 md:gap-24">
        {/* ── Left: sticky info panel ── */}
        <div className="md:sticky md:top-24 md:self-start">
          <div className="w-8 h-0.5 bg-[#E60000] mb-6" />
          <h2
            className="text-black italic leading-[0.9] mb-6"
            style={{
              fontFamily: "var(--font-family-serif)",
              fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
            }}
          >
            Invitation
            <br />
            Privée
          </h2>
          <p className="text-sm text-black/60 leading-relaxed mb-10">
            Places limitées. Réservées aux collectionneurs et amateurs d'art
            contemporain.
          </p>

          {/* Mondrian colour squares */}
          <div className="flex gap-2" aria-hidden="true">
            {["#E60000", "#003DA5", "#FFD100", "#000000"].map((color) => (
              <div key={color} className="w-4 h-4" style={{ backgroundColor: color }} />
            ))}
          </div>
        </div>

        {/* ── Right: form ── */}
        <div>
          {submitted ? (
            /* Success state */
            <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
              <p
                className="text-3xl md:text-4xl text-black italic mb-4"
                style={{ fontFamily: "var(--font-family-serif)" }}
              >
                Demande reçue.
              </p>
              <p className="text-sm text-black/60 leading-relaxed max-w-sm">
                Nous examinerons votre demande et reviendrons vers vous sous 48h.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="border-t-2 border-black"
            >
              {/* Row 1: Prénom | Nom */}
              <div className="grid sm:grid-cols-2 border-b-2 border-black">
                <div className="p-5 border-b-2 sm:border-b-0 sm:border-r-2 border-black">
                  <label
                    htmlFor="prenom"
                    className="block text-[9px] font-black uppercase tracking-[0.35em] text-black/40 mb-2"
                  >
                    Prénom
                  </label>
                  <input
                    id="prenom"
                    name="prenom"
                    type="text"
                    required
                    autoComplete="given-name"
                    value={form.prenom}
                    onChange={handleChange}
                    className="w-full bg-transparent text-black text-sm font-light outline-none placeholder:text-black/20"
                    placeholder="Jean-Pierre"
                  />
                </div>
                <div className="p-5">
                  <label
                    htmlFor="nom"
                    className="block text-[9px] font-black uppercase tracking-[0.35em] text-black/40 mb-2"
                  >
                    Nom
                  </label>
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    required
                    autoComplete="family-name"
                    value={form.nom}
                    onChange={handleChange}
                    className="w-full bg-transparent text-black text-sm font-light outline-none placeholder:text-black/20"
                    placeholder="Duchamp"
                  />
                </div>
              </div>

              {/* Row 2: Email | Téléphone */}
              <div className="grid sm:grid-cols-2 border-b-2 border-black">
                <div className="p-5 border-b-2 sm:border-b-0 sm:border-r-2 border-black">
                  <label
                    htmlFor="email"
                    className="block text-[9px] font-black uppercase tracking-[0.35em] text-black/40 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-transparent text-black text-sm font-light outline-none placeholder:text-black/20"
                    placeholder="jean@collection.fr"
                  />
                </div>
                <div className="p-5">
                  <label
                    htmlFor="telephone"
                    className="block text-[9px] font-black uppercase tracking-[0.35em] text-black/40 mb-2"
                  >
                    Téléphone
                  </label>
                  <input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    autoComplete="tel"
                    value={form.telephone}
                    onChange={handleChange}
                    className="w-full bg-transparent text-black text-sm font-light outline-none placeholder:text-black/20"
                    placeholder="+33 6 00 00 00 00"
                  />
                </div>
              </div>

              {/* Row 3: Motivation textarea */}
              <div className="border-b-2 border-black p-5">
                <label
                  htmlFor="motivation"
                  className="block text-[9px] font-black uppercase tracking-[0.35em] text-black/40 mb-2"
                >
                  Motivation / Profil collectionneur
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  rows={4}
                  value={form.motivation}
                  onChange={handleChange}
                  className="w-full bg-transparent text-black text-sm font-light outline-none placeholder:text-black/20 resize-none"
                  placeholder="Décrivez votre intérêt pour la collection et votre profil en tant que collectionneur…"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-5 bg-black text-white text-xs font-black uppercase tracking-[0.3em] transition-colors duration-300 hover:bg-[#E60000] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "ENVOI EN COURS…" : "SOUMETTRE MA DEMANDE"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── Main EventPage ──────────────────────────────────────────────────────────

export default function EventPage(): React.JSX.Element {
  return (
    <div className="bg-black">
      {/* Fixed event-specific header */}
      <EventHeader />

      {/* pt-16 clears the fixed header */}
      <main className="pt-16">
        {/* A) Hero with scroll-triggered light reveal */}
        <HeroSection />

        {/* A2) Galerie classique — plein écran après le scroll */}
        <section className="relative h-[70vh] md:h-screen">
          <Image
            src="/images/gallerie/gallerie_classique.png"
            alt="Galerie Mercedes-Benz × Mondrian — lumières allumées"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/20" />
        </section>

        {/* B) Mondrian colour strip */}
        <MondrianStrip />

        {/* C) Concept section — white */}
        <ConceptSection />

        {/* D) Grilles Lumineuses — black */}
        <GrillesSection />

        {/* E) Ultra-VIP — white */}
        <UltraVipSection />

        {/* F) Mondrian strip again */}
        <MondrianStrip />

        {/* G) World tour — black */}
        <TourneeSection />

        {/* H) Private invitation form — white */}
        <FormSection />
      </main>

      <Footer />
    </div>
  );
}
