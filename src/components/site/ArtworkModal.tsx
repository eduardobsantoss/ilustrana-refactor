import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import type { Artwork } from "@/lib/artworks";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
    artworks: Artwork[];
    openId: string | null;
    onClose: () => void;
    onNavigate: (id: string) => void;
};

export function ArtworkModal({ artworks, openId, onClose, onNavigate }: Props) {
    const index = artworks.findIndex((a) => a.id === openId);
    const artwork = index >= 0 ? artworks[index] : null;
    const [step, setStep] = useState(0);

    useEffect(() => {
        setStep(0);
    }, [openId]);

    const prev = () =>
        artwork && onNavigate(artworks[(index - 1 + artworks.length) % artworks.length].id);
    const next = () =>
        artwork && onNavigate(artworks[(index + 1) % artworks.length].id);

    return (
        <Dialog open={!!openId} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="grid max-h-[92vh] w-[min(1100px,95vw)] max-w-none gap-0 overflow-hidden rounded-3xl border-0 p-0 sm:max-w-none md:grid-cols-[1.2fr_1fr]">
                {artwork && (
                    <>
                        <div className="relative flex items-center justify-center bg-secondary/40 p-4 md:p-6">
                            <img
                                src={artwork.processo[step]?.src ?? artwork.final}
                                alt={`${artwork.titulo} — ${artwork.processo[step]?.legenda ?? "etapa"}`}
                                className="max-h-[60vh] w-auto rounded-2xl object-contain shadow-md md:max-h-[80vh]"
                            />

                            {artwork.processo.length > 1 && (
                                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-background/90 px-3 py-2 shadow backdrop-blur">
                                    {artwork.processo.map((p, i) => (
                                        <button
                                            key={i}
                                            type="button"
                                            onClick={() => setStep(i)}
                                            aria-label={p.legenda}
                                            className={`h-2.5 rounded-full transition-all ${i === step ? "w-8 bg-primary" : "w-2.5 bg-ink/25 hover:bg-ink/40"
                                                }`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="relative flex flex-col overflow-y-auto bg-card p-6 md:p-8">
                            <div className="mb-2 flex flex-wrap gap-2">
                                {artwork.tags.map((t) => (
                                    <span
                                        key={t}
                                        className="rounded-full bg-secondary px-3 py-0.5 text-[11px] font-medium uppercase tracking-wide text-ink/70"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <DialogTitle className="font-display text-4xl leading-tight text-ink">
                                {artwork.titulo}
                            </DialogTitle>
                            <DialogDescription className="mt-1 text-sm text-ink/60">
                                {artwork.tecnica} · {artwork.ano}
                            </DialogDescription>

                            <div className="mt-5 space-y-3 text-[15px] leading-relaxed text-ink/80">
                                <h3 className="font-display text-xl text-primary">o processo</h3>
                                <p>{artwork.historia}</p>
                                <p className="text-sm text-ink/60">
                                    Etapa atual:{" "}
                                    <span className="font-medium text-ink">
                                        {artwork.processo[step]?.legenda}
                                    </span>{" "}
                                    ({step + 1}/{artwork.processo.length})
                                </p>
                            </div>

                            <div className="mt-auto flex items-center justify-between pt-8">
                                <button
                                    type="button"
                                    onClick={prev}
                                    className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm text-ink/70 transition-colors hover:bg-secondary hover:text-primary"
                                >
                                    <ChevronLeft className="h-4 w-4" /> anterior
                                </button>
                                <button
                                    type="button"
                                    onClick={next}
                                    className="inline-flex items-center gap-1 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                                >
                                    próxima obra <ChevronRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
}
