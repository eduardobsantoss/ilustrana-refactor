import { HashRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from './components/site/Header';
import { Footer } from './components/site/Footer';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { Sobre } from './pages/Sobre';
import { Contato } from './pages/Contato';

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }, [pathname]);
    return null;
}

function Layout() {
    return (
        <div className="app-shell flex min-h-screen flex-col">
            <Header />
            <main className="page-content flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export function App() {
    return (
        <HashRouter>
            <ScrollToTop />
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="portfolio" element={<Portfolio />} />
                    <Route path="sobre" element={<Sobre />} />
                    <Route path="contato" element={<Contato />} />
                    <Route path="*" element={<Home />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}
