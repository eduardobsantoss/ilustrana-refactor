import { useState } from "react";
import { artworks } from "@/lib/artworks";
import { ArtworkCard } from "./ArtworkCard";
import { ArtworkModal } from "./ArtworkModal";

// Cada item recebe uma "receita" de span no bento, posições escolhidas a mão
// para um ritmo visual interessante.
const layoutClasses: Record<string, string> = {
  "heroi-do-navio": "md:col-span-2 md:row-span-2",
  "gatinho-feliz": "",
  "retrato-cachos": "md:row-span-2",
  "arvore-outono": "",
  "raposinha-floresta": "",
  "viagem-papel": "md:col-span-2",
};

export function BentoGallery() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-5 py-12 md:py-20">
      <div className="mb-8 flex items-end justify-between gap-6">
        <div>
          <span className="sticker tilt-l inline-flex items-center gap-2 rounded-full bg-sky px-4 py-1.5 font-sans text-sm font-semibold text-ink">
            ✿ portfólio
          </span>
          <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">
            cada obra tem uma <span className="text-primary">historinha</span>
          </h2>
        </div>
        <p className="hidden max-w-sm font-display text-lg leading-snug text-ink/70 md:block">
          Passa o mouse pra ver o rabisco virar arte ✨ e clica pra conhecer o
          processo por trás de cada uma!
        </p>
      </div>

      <div className="grid auto-rows-[160px] grid-cols-2 gap-4 md:auto-rows-[200px] md:grid-cols-4 md:gap-5">
        {artworks.map((a) => (
          <ArtworkCard
            key={a.id}
            artwork={a}
            className={layoutClasses[a.id] ?? "aspect-square"}
            onOpen={() => setOpenId(a.id)}
          />
        ))}
      </div>

      <ArtworkModal
        artworks={artworks}
        openId={openId}
        onClose={() => setOpenId(null)}
        onNavigate={setOpenId}
      />
    </section>
  );
}
