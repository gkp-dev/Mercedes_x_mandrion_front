"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { collection, type CarModel } from "@/lib/collection";

const HOVER_COLORS = ["#E60000", "#003DA5", "#FFFFFF", "#E60000", "#003DA5", "#FFFFFF"];

function CarCard({ model, index }: { model: CarModel; index: number }) {
  const [hovered, setHovered] = useState(false);
  const hoverColor = HOVER_COLORS[index % HOVER_COLORS.length];

  return (
    <a
      href={`/collection/${model.id}`}
      className="block relative overflow-hidden bg-black"
      style={{ aspectRatio: "3/4" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={`Voir la fiche — ${model.name} ${model.subtitle}`}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0.3 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.6, delay: index * 0.05 }}
      >
        {model.image ? (
          <Image
            src={model.image}
            alt={`${model.name} ${model.subtitle}`}
            fill
            className="object-cover transition-all duration-700"
            style={{
              filter: hovered ? "grayscale(0%)" : "grayscale(80%)",
              transform: hovered ? "scale(1.04)" : "scale(1)",
            }}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-[#0a0a0a] flex flex-col items-center justify-center">
            <span
              className="font-black text-white/10 select-none leading-none"
              style={{ fontSize: "clamp(6rem, 16vw, 14rem)" }}
            >
              01
            </span>
            <div
              className="absolute top-0 right-0 w-10 h-10 transition-all duration-500"
              style={{ background: hovered ? hoverColor : "#E60000" }}
            />
            <div
              className="absolute bottom-0 left-0 h-1 transition-all duration-700"
              style={{ width: hovered ? "100%" : "25%", background: hoverColor }}
            />
          </div>
        )}

        {/* Overlay dégradé bas */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 50%, transparent 75%)",
            opacity: hovered ? 1 : 0.7,
          }}
        />

        {/* Overlay couleur accent */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{ background: hoverColor, opacity: hovered ? 0.15 : 0 }}
        />

        {/* Numéro — toujours visible */}
        <div className="absolute top-5 left-5 z-10">
          <span className="text-xs font-black text-white/80 uppercase tracking-[0.3em]">
            {model.number}
          </span>
        </div>

        {/* Barre accent droite au hover */}
        <div
          className="absolute top-0 right-0 w-2 h-full transition-opacity duration-300 z-10"
          style={{ background: hoverColor, opacity: hovered ? 1 : 0 }}
        />

        {/* Texte bas — toujours visible */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          {/* Sous-titre */}
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/75 mb-1">
            {model.subtitle}
          </p>
          {/* Nom */}
          <h3 className="text-xl font-black uppercase tracking-wider text-white leading-tight">
            {model.name}
          </h3>
          {/* CTA — apparaît au hover */}
          <div
            className="flex items-center gap-2 mt-3 transition-all duration-300"
            style={{
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateY(0)" : "translateY(4px)",
            }}
          >
            <div className="h-[1px] flex-1" style={{ background: hoverColor }} />
            <span
              className="text-[10px] font-bold uppercase tracking-[0.2em]"
              style={{ color: hoverColor === "#FFFFFF" ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.7)" }}
            >
              VOIR L&apos;ŒUVRE
            </span>
          </div>
        </div>
      </motion.div>
    </a>
  );
}

export default function CollectionGrid() {
  return (
    <section id="collection" className="bg-black border-t-2 border-black">
      <div className="bg-white border-b-2 border-black">
        <div className="max-w-screen-2xl mx-auto px-8 py-10 flex items-end justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/60 mb-2">
              Œuvres disponibles
            </p>
            <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tight leading-none">
              LA COLLECTION
            </h2>
          </div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/60 text-right">
            5 MODÈLES<br />ÉDITION LIMITÉE
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {collection.map((model, index) => (
          <div key={model.id} className="border-r border-b border-white/10">
            <CarCard model={model} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}
