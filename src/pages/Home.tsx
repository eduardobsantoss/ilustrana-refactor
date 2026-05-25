import { Hero } from "@/components/site/Hero";
import { FeaturedGrid } from "@/components/site/FeaturedGrid";
import { About } from "@/components/site/About";
import { ContatoSection } from "@/components/site/ContatoSection";

export function Home() {
    return (
        <>
            <Hero />
            <FeaturedGrid />
            <About />
            <ContatoSection />
        </>
    );
}
