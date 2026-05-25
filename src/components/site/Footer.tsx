import { Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer id="contato" className="border-t border-border/60 bg-background">
            <div className="mx-auto max-w-6xl px-5 py-14">
                <div className="grid gap-10 md:grid-cols-2">
                    <div>
                        <p className="font-display text-2xl text-primary">contato</p>
                        <h2 className="mt-1 font-display text-3xl text-ink md:text-4xl">
                            Vamos criar algo juntos?
                        </h2>
                        <p className="mt-3 max-w-md text-[15px] text-ink/70">
                            Aberta para projetos de ilustração editorial, livros infantis,
                            identidade de personagens e colaborações.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 md:items-end md:justify-center">
                        <a
                            href="mailto:contato@ilustranastudio.com"
                            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                        >
                            <Mail className="h-4 w-4" /> contato@ilustranastudio.com
                        </a>
                        <div className="flex items-center gap-2">
                            <a
                                href="https://www.instagram.com/ilustranastudio/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="rounded-full border border-ink/15 p-2.5 text-ink/70 transition-colors hover:border-primary hover:text-primary"
                            >
                                <Instagram className="h-4 w-4" />
                            </a>
                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="rounded-full border border-ink/15 p-2.5 text-ink/70 transition-colors hover:border-primary hover:text-primary"
                            >
                                <Linkedin className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-border/60 pt-6 text-xs text-ink/55 md:flex-row md:items-center">
                    <span className="font-display text-base text-primary">ilustrana studio</span>
                    <span>© {new Date().getFullYear()} Ilustrana Studio. Todos os direitos reservados.</span>
                </div>
            </div>
        </footer>
    );
}
