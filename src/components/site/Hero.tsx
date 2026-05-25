export function Hero() {
    return (
        <section id="top" className="relative overflow-hidden">
            <div className="mx-auto max-w-6xl px-5 pt-16 pb-10 md:pt-24 md:pb-16">
                <p className="mb-4 font-display text-2xl text-primary md:text-3xl">olá! eu sou a ilustrana</p>
                <h1 className="font-display text-5xl leading-[1.05] text-ink md:text-7xl">
                    Ilustrações que <span className="text-primary">contam histórias</span> —
                    do rascunho ao traço final.
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 md:text-lg">
                    Portfólio de personagens, retratos e cenas para livros infantis, marcas e
                    projetos autorais. Passe o mouse nas obras para ver como cada uma nasceu.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                    <a
                        href="#portfolio"
                        className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                    >
                        Ver portfólio
                    </a>
                    <a
                        href="#contato"
                        className="rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-secondary"
                    >
                        Trabalhar comigo
                    </a>
                </div>
            </div>

            {/* blob decorativo */}
            <div
                aria-hidden
                className="pointer-events-none absolute -top-32 -right-40 h-[480px] w-[480px] rounded-full bg-secondary blur-3xl opacity-60"
            />
        </section>
    );
}
