"use client";

export default function ManifesteSection() {
  return (
    <section id="manifeste" className="bg-white border-t-2 border-b-2 border-black">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* ─── Colonne gauche : texte éditorial ─── */}
          <div className="px-12 py-16 lg:py-20 border-b-2 lg:border-b-0 lg:border-r-2 border-black">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-[2px] bg-black" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-black/70">
                Fondements
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tight mb-10 leading-none">
              LE<br />MANIFESTE
            </h2>

            <p className="text-sm leading-relaxed text-black/90 mb-6 font-light">
              Il existe, dans l&apos;histoire de la création humaine, des instants
              rares où deux formes d&apos;absolu se rencontrent. Lorsque l&apos;ingénierie
              allemande — rigoureuse, inflexible, sculptée dans l&apos;acier — croise
              le regard du néoplasticisme néerlandais, la ligne devient langage
              et la couleur, structure.
            </p>

            <p className="text-sm leading-relaxed text-black/90 mb-6 font-light">
              COMPOSITION MB n&apos;est pas une collection automobile. C&apos;est une
              déclaration. Chaque véhicule est traité comme une toile : ses
              proportions relues à travers la grille primaire, ses surfaces
              fragmentées en champs de rouge, de bleu, de jaune. Aucune courbe
              n&apos;est concession — chaque angle est intentionnel, chaque aplat,
              une affirmation.
            </p>

            <p className="text-sm leading-relaxed text-black/90 font-light">
              Six sculptures cinétiques. Six objets qui ne roulent plus — ils
              exposent. Présentées à une clientèle de collectionneurs, d&apos;architectes
              et de penseurs du design, ces œuvres incarnent la conviction que
              le beau n&apos;est jamais accidentel. Il est calculé, mesuré, absolu.
            </p>

            <div className="mt-10 flex items-center">
              <div className="w-12 h-[3px] bg-[#E60000]" />
              <div className="w-8 h-[3px] bg-[#003DA5]" />
              <div className="w-6 h-[3px] bg-[#FFD100]" />
            </div>
          </div>

          {/* ─── Colonne droite : bloc rouge + citation ─── */}
          <div className="relative bg-[#E60000] flex flex-col items-center justify-center px-12 py-16 lg:py-20 min-h-[400px]">
            <div className="absolute top-0 right-0 w-16 h-16 bg-black" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-24 h-8 bg-[#FFD100]" aria-hidden="true" />
            <div className="absolute top-1/4 right-8 w-4 h-24 bg-[#003DA5]" aria-hidden="true" />

            <blockquote className="relative z-10 text-center">
              <p className="text-3xl lg:text-4xl xl:text-5xl font-black text-white italic leading-tight tracking-tight">
                &ldquo;Pas une voiture.
                <br />
                Une œuvre.&rdquo;
              </p>
              <footer className="mt-8">
                <cite className="text-white/75 text-xs font-bold uppercase tracking-[0.3em] not-italic">
                  COMPOSITION MB — Manifeste 2024
                </cite>
              </footer>
            </blockquote>
          </div>

        </div>
      </div>
    </section>
  );
}
