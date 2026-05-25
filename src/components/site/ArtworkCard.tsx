import { useState } from "react";
import type { Artwork } from "@/lib/artworks";
import { Sparkles } from "lucide-react";

type Props = {
    artwork: Artwork;
    className?: string;
    onOpen: () => void;
};

export function ArtworkCard({ artwork, className = "", onOpen }: Props) {
    const [flipped, setFlipped] = useState(false);

    return (
        <button
            type="button"
            onClick={onOpen}
            onTouchStart={() => setFlipped((v) => !v)}
            className={`artwork-card group relative block h-full w-full overflow-hidden rounded-3xl bg-card text-left shadow-sm ring-1 ring-border/60 transition-shadow hover:shadow-xl ${flipped ? "is-flipped" : ""
                } ${className}`}
            aria-label={`Abrir detalhes de ${artwork.titulo}`}
        >
            <div className="relative h-full w-full">
                <img
                    src={artwork.sketch}
                    alt=""
                    loading="lazy"
                    className="artwork-sketch absolute inset-0 h-full w-full object-cover"
                />
                <img
                    src={artwork.final}
                    alt={artwork.titulo}
                    loading="lazy"
                    className="artwork-final relative h-full w-full object-cover"
                />
            </div>

            {/* badge "rascunho → final" */}
            <span className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-background/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink/70 backdrop-blur transition-opacity group-hover:opacity-0">
                <Sparkles className="h-3 w-3 text-primary" />
                rascunho
            </span>

            {/* legenda no hover */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-ink/80 via-ink/40 to-transparent p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-display text-xl text-white">{artwork.titulo}</p>
                <p className="text-xs text-white/80">{artwork.tecnica} · {artwork.ano}</p>
            </div>
        </button>
    );
}
