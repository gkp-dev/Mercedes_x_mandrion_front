export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-black">
      {/* Ligne principale */}
      <div className="flex items-center justify-between px-8 py-6 max-w-screen-2xl mx-auto border-b border-black">
        <span className="text-sm font-black uppercase tracking-[0.25em]">
          COMPOSITION MB
        </span>
        <nav className="flex items-center gap-8" aria-label="Liens légaux">
          {["Mentions légales", "Confidentialité", "Cookies", "Presse"].map(
            (label) => (
              <a
                key={label}
                href="#"
                className="text-xs uppercase tracking-[0.15em] text-black hover:text-[#E60000] transition-colors duration-200"
              >
                {label}
              </a>
            )
          )}
        </nav>
      </div>

      {/* Ligne secondaire */}
      <div className="flex items-center justify-between px-8 py-4 max-w-screen-2xl mx-auto">
        <p className="text-xs uppercase tracking-[0.2em] text-black/70">
          MERCEDES-BENZ × PIET MONDRIAN — COLLECTION EXCLUSIVE 2024
        </p>

        {/* Aplats couleur Mondrian */}
        <div className="flex items-center gap-[3px]" aria-hidden="true">
          <div className="w-6 h-6 bg-[#E60000]" />
          <div className="w-6 h-6 bg-[#003DA5]" />
          <div className="w-6 h-6 bg-[#FFD100]" />
          <div className="w-6 h-6 bg-black" />
        </div>
      </div>
    </footer>
  );
}
