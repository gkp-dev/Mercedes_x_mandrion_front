"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "COLLECTION", href: "#collection" },
  { label: "MANIFESTE", href: "#manifeste" },
  { label: "GALERIE", href: "#galerie" },
  { label: "CONTACT", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black"
    >
      <div className="flex items-center justify-between px-8 h-16 max-w-screen-2xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-black uppercase tracking-[0.3em] text-black hover:text-[#E60000] transition-colors duration-200"
        >
          COMPOSITION MB
        </Link>

        {/* Navigation centrale */}
        <nav className="flex items-center gap-10" aria-label="Navigation principale">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-bold uppercase tracking-[0.2em] text-black hover:text-[#E60000] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Indicateur Mondrian — décoration droite */}
        <div className="flex items-center gap-[2px]" aria-hidden="true">
          <div className="w-3 h-3 bg-[#E60000]" />
          <div className="w-3 h-3 bg-[#003DA5]" />
          <div className="w-3 h-3 bg-[#FFD100]" />
          <div className="w-3 h-3 bg-black" />
        </div>
      </div>
    </header>
  );
}
