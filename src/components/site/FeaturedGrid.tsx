import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { artworks } from "@/lib/artworks";
import { ArtworkCard } from "./ArtworkCard";
import { ArtworkModal } from "./ArtworkModal";

export function FeaturedGrid() {
    const featured = artworks.filter((a) => a.destaque);
    const [openId, setOpenId] = useState<string | null>(null);

    return (
        <section className="mx-auto max-w-6xl px-5 py-12 md:py-16">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                <div>
                    <span className="sticker tilt-l inline-flex items-center gap-2 rounded-full bg-sky px-4 py-1.5 font-sans text-sm font-semibold text-ink">
                        ✿ obras em destaque
                    </span>
                    <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">
                        um <span className="text-primary">gostinho</span> do portfólio
                    </h2>
                </div>
                <Link
                    to="/portfolio"
                    className="sticker tilt-r inline-flex items-center gap-2 rounded-full bg-lemon px-5 py-2.5 font-sans text-sm font-bold text-ink"
                >
                    ver tudo <ArrowRight className="h-4 w-4" />
                </Link>
            </div>

            <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[260px] md:grid-cols-3 md:gap-5">
                {featured.map((a) => (
                    <ArtworkCard
                        key={a.id}
                        artwork={a}
                        onOpen={() => setOpenId(a.id)}
                    />
                ))}
            </div>

            <ArtworkModal
                artworks={featured}
                openId={openId}
                onClose={() => setOpenId(null)}
                onNavigate={setOpenId}
            />
        </section>
    );
}
