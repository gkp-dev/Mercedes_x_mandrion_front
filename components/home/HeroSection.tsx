"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

function AudioPlayer() {
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  function toggle() {
    if (!audioRef.current) {
      const audio = new Audio("/audio/gullwing_valves.mp3");
      audio.loop = true;
      audio.volume = 0.15;
      audio.addEventListener("canplaythrough", () => setLoaded(true));
      audio.addEventListener("ended", () => setPlaying(false));
      audioRef.current = audio;
      audio.play().then(() => setPlaying(true));
      return;
    }
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().then(() => setPlaying(true));
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label={playing ? "Mettre en pause" : "Écouter la bande-son"}
      className="group inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-white text-black text-xs font-black uppercase tracking-[0.2em] transition-all duration-200 hover:bg-black hover:text-white"
    >
      {/* Icône play / pause */}
      <span className="relative flex items-center justify-center w-4 h-4" aria-hidden="true">
        {playing ? (
          /* Pause — deux barres verticales */
          <>
            <span className="absolute left-0 w-[5px] h-full bg-black group-hover:bg-white transition-colors duration-200" />
            <span className="absolute right-0 w-[5px] h-full bg-black group-hover:bg-white transition-colors duration-200" />
          </>
        ) : (
          /* Play — triangle SVG */
          <svg viewBox="0 0 10 12" className="w-full h-full">
            <polygon points="0,0 10,6 0,12" className="fill-black group-hover:fill-white transition-colors duration-200" />
          </svg>
        )}
      </span>

      <span>{playing ? "PAUSE" : "ÉCOUTER"}</span>

      {/* Indicateur d'animation sonore quand en lecture */}
      {playing && (
        <span className="flex items-end gap-[3px] h-3" aria-hidden="true">
          {[1, 2, 3].map((i) => (
            <span
              key={i}
              className="w-[3px] bg-[#E60000]"
              style={{
                animation: `soundbar 0.${5 + i * 2}s ease-in-out infinite alternate`,
                height: "100%",
              }}
            />
          ))}
        </span>
      )}
    </button>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden bg-black"
    >
      {/* Animation barres sonores */}
      <style>{`
        @keyframes soundbar {
          from { transform: scaleY(0.2); }
          to   { transform: scaleY(1); }
        }
      `}</style>

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

      {/* ─── Overlay dégradé noir ─── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.0) 45%), linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 30%)",
        }}
      />

      {/* ─── Lignes Mondrian — overlay géométrique ─── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 bottom-0 w-[2px] bg-white/10" style={{ left: "8%" }} />
        <div className="absolute top-0 bottom-0 w-[2px] bg-white/10" style={{ right: "28%" }} />
        <div className="absolute left-0 right-0 h-[2px] bg-white/10" style={{ bottom: "22%" }} />
        <div className="absolute bg-[#E60000]" style={{ top: 0, right: 0, width: 6, height: "35%" }} />
        <div className="absolute bg-[#003DA5]" style={{ bottom: 0, left: "8%", width: "8%", height: 4 }} />
        <div className="absolute bg-[#FFD100]" style={{ top: "12%", right: "28%", width: 32, height: 32 }} />
      </div>

      {/* ─── Contenu principal ─── */}
      <div className="relative z-10 flex flex-col justify-between min-h-[100svh] px-8 lg:px-20 pt-28 pb-12 max-w-screen-2xl mx-auto">

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
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4"
          >
            {/* CTA principal — gauche sur desktop */}
            <a
              href="#collection"
              className="inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-white text-black text-xs font-black uppercase tracking-[0.2em] border-2 border-white transition-all duration-200 hover:bg-[#E60000] hover:border-[#E60000] hover:text-white"
            >
              DÉCOUVRIR LA COLLECTION
              <span aria-hidden="true">→</span>
            </a>

            {/* Lien manifeste — visible seulement sur mobile */}
            <a
              href="#manifeste"
              className="sm:hidden text-xs font-bold uppercase tracking-[0.2em] text-white/75 hover:text-white transition-colors duration-200"
            >
              Lire le manifeste
            </a>

            {/* Bouton audio — à droite sur desktop, caché sur mobile */}
            <span className="hidden sm:block sm:ml-auto">
              <AudioPlayer />
            </span>
          </motion.div>
        </div>

        {/* Bas : specs techniques */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="hidden md:flex items-end justify-between"
        >
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
                5 Pièces
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
