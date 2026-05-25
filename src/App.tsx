import { useEffect, useMemo, useState } from 'react';
import { About } from './components/site/About';
import { ArtworkModal } from './components/site/ArtworkModal';
import { BentoGallery } from './components/site/BentoGallery';
import { Footer } from './components/site/Footer';
import { Header } from './components/site/Header';
import { Hero } from './components/site/Hero';
import { artworks } from './lib/artworks';

export function App() {
    const [activeArtworkId, setActiveArtworkId] = useState<string | null>(null);

    const activeArtworkIndex = useMemo(
        () => artworks.findIndex((artwork) => artwork.id === activeArtworkId),
        [activeArtworkId],
    );

    const activeArtwork = activeArtworkIndex >= 0 ? artworks[activeArtworkIndex] : null;

    const openArtwork = (artworkId: string) => {
        setActiveArtworkId(artworkId);
    };

    const closeArtwork = () => {
        setActiveArtworkId(null);
    };

    const goToNextArtwork = () => {
        if (activeArtworkIndex < 0) {
            return;
        }
        const nextIndex = (activeArtworkIndex + 1) % artworks.length;
        setActiveArtworkId(artworks[nextIndex].id);
    };

    const goToPreviousArtwork = () => {
        if (activeArtworkIndex < 0) {
            return;
        }
        const previousIndex = (activeArtworkIndex - 1 + artworks.length) % artworks.length;
        setActiveArtworkId(artworks[previousIndex].id);
    };

    useEffect(() => {
        document.title = activeArtwork ? `${activeArtwork.titulo} | Ilustrana Studio` : 'Ilustrana Studio | Portfólio da artista';
    }, [activeArtwork]);

    useEffect(() => {
        const previousOverflow = document.body.style.overflow;
        if (activeArtwork) {
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [activeArtwork]);

    return (
        <div className="app-shell">
            <Header />
            <main className="page-content">
                <Hero />
                <BentoGallery artworks={artworks} onOpen={openArtwork} />
                <About />
                <Footer />
            </main>

            <ArtworkModal
                artwork={activeArtwork}
                currentIndex={activeArtworkIndex >= 0 ? activeArtworkIndex : 0}
                total={artworks.length}
                onClose={closeArtwork}
                onNextArtwork={goToNextArtwork}
                onPreviousArtwork={goToPreviousArtwork}
            />
        </div>
    );
}
