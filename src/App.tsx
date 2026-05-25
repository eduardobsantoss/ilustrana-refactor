import { About } from './components/site/About';
import { BentoGallery } from './components/site/BentoGallery';
import { Footer } from './components/site/Footer';
import { Header } from './components/site/Header';
import { Hero } from './components/site/Hero';

export function App() {
    return (
        <div className="app-shell">
            <Header />
            <main className="page-content">
                <Hero />
                <BentoGallery />
                <About />
                <Footer />
            </main>
        </div>
    );
}
