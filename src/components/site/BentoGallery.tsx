import type { Artwork } from "@/lib/artworks";
import { ArtworkCard } from "./ArtworkCard";

const layoutClasses: Record<string, string> = {
    "heroi-do-navio": "md:col-span-2 md:row-span-2 aspect-square",
    "gatinho-feliz": "aspect-square",
    "retrato-cachos": "md:row-span-2 aspect-[3/4] md:aspect-[3/5]",
    "arvore-outono": "aspect-[3/4]",
    "raposinha-floresta": "aspect-square",
    "viagem-papel": "md:col-span-2 aspect-[5/4]",
};

type Props = {
    artworks: Artwork[];
    onOpen: (artworkId: string) => void;
};

export function BentoGallery({ artworks, onOpen }: Props) {
    return (
        <section id="portfolio" className="mx-auto max-w-6xl px-5 py-12 md:py-20">
            <div className="mb-8 flex items-end justify-between gap-6">
                <div>
                    <p className="font-display text-2xl text-primary">portfólio</p>
                    <h2 className="mt-1 font-display text-4xl text-ink md:text-5xl">
                        Cada obra tem uma história
                    </h2>
                </div>
                <p className="hidden max-w-sm text-sm text-ink/60 md:block">
                    Passe o mouse para ver o rascunho virar arte final. Clique em qualquer
                    ilustração para conhecer o processo por trás dela.
                </p>
            </div>

            <div className="grid auto-rows-[160px] grid-cols-2 gap-4 md:auto-rows-[200px] md:grid-cols-4 md:gap-5">
                {artworks.map((a) => (
                    <ArtworkCard
                        key={a.id}
                        artwork={a}
                        className={layoutClasses[a.id] ?? "aspect-square"}
                        onOpen={() => onOpen(a.id)}
                    />
                ))}
            </div>
        </section>
    );
}
