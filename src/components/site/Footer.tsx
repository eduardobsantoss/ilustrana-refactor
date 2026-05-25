import { socials } from "@/lib/socials";

export function Footer() {
    return (
        <footer className="border-t-2 border-ink/10 bg-background">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-6 font-sans text-xs text-ink/60 md:flex-row">
                <span className="font-display text-base text-primary">ilustrana studio ✿</span>
                <span>feito com muito carinho 🌷 © {new Date().getFullYear()} Ilustrana Studio</span>
                <div className="flex items-center gap-2">
                    {socials.map(({ href, label, Icon }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="rounded-full p-1.5 text-ink/60 transition-colors hover:bg-secondary hover:text-primary"
                        >
                            <Icon className="h-4 w-4" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
