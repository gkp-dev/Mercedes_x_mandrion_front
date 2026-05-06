"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * MondriansGrid — Section décorative réutilisable
 * Grille Mondrian animée au scroll — séparateur visuel premium
 */

interface GridBlock {
  col: number;
  row: number;
  colSpan: number;
  rowSpan: number;
  color: string;
  delay: number;
}

const BLOCKS: GridBlock[] = [
  { col: 1, row: 1, colSpan: 2, rowSpan: 2, color: "#E60000", delay: 0 },
  { col: 3, row: 1, colSpan: 1, rowSpan: 1, color: "#003DA5", delay: 0.1 },
  { col: 4, row: 1, colSpan: 2, rowSpan: 3, color: "#FFD100", delay: 0.2 },
  { col: 3, row: 2, colSpan: 1, rowSpan: 2, color: "#000000", delay: 0.15 },
  { col: 1, row: 3, colSpan: 2, rowSpan: 1, color: "#000000", delay: 0.25 },
  { col: 6, row: 1, colSpan: 1, rowSpan: 2, color: "#E60000", delay: 0.3 },
  { col: 6, row: 3, colSpan: 1, rowSpan: 1, color: "#FFFFFF", delay: 0.1 },
];

export default function MondriansGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div
      ref={ref}
      className="bg-white border-t-2 border-b-2 border-black py-16"
      aria-hidden="true"
    >
      <div className="max-w-screen-2xl mx-auto px-8">
        {/* Label section */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-6 h-[2px] bg-black" />
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-black/40">
            Composition formelle
          </span>
        </div>

        {/* Mini-grille Mondrian décorative */}
        <div
          className="grid border-l-2 border-t-2 border-black"
          style={{
            gridTemplateColumns: "repeat(6, 1fr)",
            gridTemplateRows: "repeat(3, 60px)",
          }}
        >
          {BLOCKS.map((block, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: block.delay }}
              className="border-r-2 border-b-2 border-black"
              style={{
                gridColumn: `${block.col} / span ${block.colSpan}`,
                gridRow: `${block.row} / span ${block.rowSpan}`,
                background: block.color,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
