import { Hero } from "@/components/site/Hero";
import { FeaturedGrid } from "@/components/site/FeaturedGrid";
import { About } from "@/components/site/About";

export function Home() {
    return (
        <>
            <Hero />
            <FeaturedGrid />
            <About />
        </>
    );
}
