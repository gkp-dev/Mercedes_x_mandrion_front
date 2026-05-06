"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-black"
    >
      {/* ─── Image de fond plein écran ─── */}
      <Image
        src="/images/mercedes_benz_r107.png"
        alt="Mercedes-Benz SL R107 — Rythme Primaire"
        fill
        priority
        className="object-cover object-center"
        style={{ filter: "grayscale(0%) contrast(1.05) brightness(1.0)" }}
        sizes="100vw"
      />

      {/* ─── Overlay dégradé noir — léger, seulement à gauche et en bas pour la lisibilité du texte ─── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.0) 45%), linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 30%)",
        }}
      />

      {/* ─── Lignes Mondrian — overlay géométrique ─── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Ligne verticale gauche */}
        <div className="absolute top-0 bottom-0 w-[2px] bg-white/10" style={{ left: "8%" }} />
        {/* Ligne verticale droite */}
        <div className="absolute top-0 bottom-0 w-[2px] bg-white/10" style={{ right: "28%" }} />
        {/* Ligne horizontale */}
        <div className="absolute left-0 right-0 h-[2px] bg-white/10" style={{ bottom: "22%" }} />

        {/* Aplat rouge — coin supérieur droit */}
        <div
          className="absolute bg-[#E60000]"
          style={{ top: 0, right: 0, width: 6, height: "35%" }}
        />
        {/* Aplat bleu — coin inférieur gauche */}
        <div
          className="absolute bg-[#003DA5]"
          style={{ bottom: 0, left: "8%", width: "8%", height: 4 }}
        />
        {/* Aplat jaune — petit carré */}
        <div
          className="absolute bg-[#FFD100]"
          style={{ top: "12%", right: "28%", width: 32, height: 32 }}
        />
      </div>

      {/* ─── Contenu principal ─── */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen px-12 lg:px-20 pt-32 pb-16 max-w-screen-2xl mx-auto">

        {/* Haut : étiquette série */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center gap-4"
        >
          <div className="w-8 h-[2px] bg-[#E60000]" />
          <span className="text-xs font-bold uppercase tracking-[0.35em] text-white/75">
            Collection Capsule 2024
          </span>
        </motion.div>

        {/* Centre : titre principal */}
        <div className="flex flex-col gap-6 max-w-4xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-white/70"
          >
            Mercedes-Benz × Piet Mondrian
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
            className="font-black uppercase leading-none text-white"
            style={{ fontSize: "clamp(3.5rem, 8vw, 8.5rem)" }}
          >
            L&apos;Art<br />de la<br />
            <span className="relative inline-block">
              Collision
              {/* Soulignement accent rouge */}
              <span
                className="absolute bottom-0 left-0 h-[5px] bg-[#E60000]"
                style={{ width: "100%" }}
              />
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex items-center gap-6 mt-4"
          >
            <a
              href="#collection"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-xs font-black uppercase tracking-[0.2em] border-2 border-white transition-all duration-200 hover:bg-[#E60000] hover:border-[#E60000] hover:text-white"
            >
              DÉCOUVRIR LA COLLECTION
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#manifeste"
              className="text-xs font-bold uppercase tracking-[0.2em] text-white/75 hover:text-white transition-colors duration-200"
            >
              Lire le manifeste
            </a>
          </motion.div>
        </div>

        {/* Bas : specs techniques style référence */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex items-end justify-between"
        >
          {/* Specs gauche */}
          <div className="flex items-end gap-12">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 mb-1">
                Modèle présenté
              </p>
              <p className="text-sm font-black uppercase tracking-wider text-white">
                SL R107
              </p>
              <p className="text-xs italic text-white/75">&ldquo;Rythme Primaire&rdquo;</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 mb-1">
                Millésime
              </p>
              <p className="text-sm font-black uppercase tracking-wider text-white">
                1971 — 1989
              </p>
            </div>
          </div>

          {/* Specs droite */}
          <div className="flex items-end gap-12 text-right">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 mb-1">
                Œuvre n°
              </p>
              <p
                className="font-black text-white leading-none"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                03
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 mb-1">
                Collection
              </p>
              <p className="text-sm font-black uppercase tracking-wider text-white">
                6 Pièces
              </p>
              <p className="text-xs text-white/65 uppercase tracking-wider">Édition Limitée</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ─── Barre Mondrian bas de page ─── */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] flex z-20" aria-hidden="true">
        <div className="flex-1 bg-[#E60000]" />
        <div className="flex-1 bg-[#003DA5]" />
        <div className="flex-1 bg-[#FFD100]" />
        <div className="flex-1 bg-white/30" />
      </div>
    </section>
  );
}
