import { Instagram, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer id="contato" className="relative border-t-2 border-ink/10 bg-background">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <span className="sticker inline-flex items-center gap-2 rounded-full bg-lilac px-4 py-1.5 font-sans text-sm font-semibold text-ink">
              <Heart className="h-4 w-4 fill-rose text-ink" strokeWidth={2.5} /> contato
            </span>
            <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
              vamos criar algo <span className="text-primary">fofinho</span> juntos?
            </h2>
            <p className="mt-3 max-w-md font-sans text-[15px] text-ink/70">
              Aberta pra projetos de ilustração editorial, livros infantis,
              identidade de personagens e qualquer ideia gostosinha. ✿
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end md:justify-center">
            <a
              href="mailto:contato@ilustranastudio.com"
              className="sticker inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-sans text-sm font-bold text-primary-foreground"
            >
              <Mail className="h-4 w-4" />
              <span>contato@ilustranastudio.com</span>
            </a>
            <div className="flex items-center gap-2">
              <a
                href="https://www.instagram.com/ilustranastudio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="sticker rounded-full bg-mint p-2.5 text-ink"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="sticker rounded-full bg-sky p-2.5 text-ink"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t-2 border-dashed border-ink/15 pt-6 font-sans text-xs text-ink/60 md:flex-row md:items-center">
          <span className="font-display text-base text-primary">ilustrana studio ✿</span>
          <span>feito com muito carinho 🌷 © Ilustrana Studio</span>
        </div>
      </div>
    </footer>
  );
}
