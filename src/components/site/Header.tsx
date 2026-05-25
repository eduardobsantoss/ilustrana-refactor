import { Instagram, Linkedin } from "lucide-react";

const socials = [
    { href: "https://www.instagram.com/ilustranastudio/", label: "Instagram", Icon: Instagram },
    { href: "https://www.linkedin.com/", label: "LinkedIn", Icon: Linkedin },
];

export function Header() {
    return (
        <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
                <a href="#top" className="flex items-baseline gap-2">
                    <span className="font-display text-3xl leading-none text-primary">
                        ilustrana
                    </span>
                    <span className="font-display text-xl leading-none text-ink/70">studio</span>
                </a>

                <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
                    <a href="#portfolio" className="transition-colors hover:text-primary">
                        Portfólio
                    </a>
                    <a href="#sobre" className="transition-colors hover:text-primary">
                        Sobre
                    </a>
                    <a href="#contato" className="transition-colors hover:text-primary">
                        Contato
                    </a>
                </nav>

                <div className="flex items-center gap-3">
                    {socials.map(({ href, label, Icon }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="rounded-full p-2 text-ink/70 transition-colors hover:bg-secondary hover:text-primary"
                        >
                            <Icon className="h-4 w-4" />
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
}
