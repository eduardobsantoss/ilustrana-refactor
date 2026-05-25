import artistImg from "@/assets/artist.jpg";
import { Heart, Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-5 py-12 md:py-20">
      <div className="sticker relative grid items-center gap-10 rounded-[2rem] bg-secondary/60 p-6 md:grid-cols-[280px_1fr] md:p-12">
        <Sparkles className="animate-wobble absolute -top-4 -left-3 h-8 w-8 text-ink" strokeWidth={2.5} />
        <Heart className="animate-floaty absolute -top-5 right-6 h-7 w-7 fill-rose text-ink" strokeWidth={2.5} />

        <div className="relative mx-auto h-56 w-56 md:h-64 md:w-64">
          <div className="sticker tilt-l h-full w-full overflow-hidden rounded-[2rem] bg-card">
            <img
              src={artistImg}
              alt="Retrato da artista da Ilustrana Studio"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <span className="sticker tilt-r absolute -bottom-3 -right-3 rounded-full bg-lemon px-3 py-1 font-hand text-lg text-ink">
            oi, sou eu! ✿
          </span>
        </div>

        <div>
          <span className="sticker inline-flex items-center gap-1 rounded-full bg-mint px-3 py-1 font-sans text-xs font-bold uppercase tracking-wide text-ink">
            sobre
          </span>
          <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">
            desenho desde sempre, <span className="text-primary">ilustro com carinho</span>.
          </h2>
          <p className="mt-5 max-w-xl font-sans text-[15px] leading-relaxed text-ink/75">
            Sou ilustradora apaixonada por personagens fofos, livros infantis e
            histórias visuais. Trabalho misturando ilustração digital e técnicas
            tradicionais como giz pastel oleoso — porque acho que cada projeto
            pede um traço diferente. 🎨
          </p>
          <p className="mt-3 max-w-xl font-sans text-[15px] leading-relaxed text-ink/75">
            Aqui no portfólio você encontra do rabisco ao final de cada peça.
            Mostrar o processo é o que conecta a arte com quem olha pra ela. ✿
          </p>
        </div>
      </div>
    </section>
  );
}
