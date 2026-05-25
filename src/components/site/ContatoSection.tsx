import { Mail, Heart } from "lucide-react";
import { socials } from "@/lib/socials";

const bgPalette: Record<string, string> = {
    Instagram: "bg-mint",
    TikTok: "bg-lemon",
    Behance: "bg-sky",
};

export function ContatoSection() {
    return (
        <section id="contato" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
            <div className="grid gap-10 md:grid-cols-2">
                <div>
                    <span className="sticker inline-flex items-center gap-2 rounded-full bg-lilac px-4 py-1.5 font-sans text-sm font-semibold text-ink">
                        <Heart className="h-4 w-4 fill-rose text-ink" strokeWidth={2.5} /> contato
                    </span>
                    <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">
                        vamos criar algo <span className="text-primary">fofinho</span> juntos?
                    </h2>
                    <p className="mt-4 max-w-md font-sans text-[15px] leading-relaxed text-ink/75">
                        Aberta pra projetos de ilustração editorial, livros infantis,
                        identidade de personagens e qualquer ideia gostosinha. ✿
                    </p>
                    <p className="mt-3 max-w-md font-sans text-[15px] leading-relaxed text-ink/70">
                        Me chama no e-mail ou nas redes sociais — adoro conversar sobre
                        ideias novas. 🌷
                    </p>
                </div>
                <div className="flex flex-col gap-4 md:items-end md:justify-center">
                    <a
                        href="mailto:contato@ilustranastudio.com"
                        className="sticker inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-sans text-sm font-bold text-primary-foreground"
                    >
                        <Mail className="h-4 w-4" />
                        <span>contato@ilustranastudio.com</span>
                    </a>
                    <div className="flex items-center gap-2">
                        {socials.map(({ href, label, Icon }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className={`sticker rounded-full p-2.5 text-ink ${bgPalette[label] ?? "bg-secondary"}`}
                            >
                                <Icon className="h-4 w-4" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
