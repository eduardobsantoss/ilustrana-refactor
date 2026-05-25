import artistImg from "@/assets/artist.jpg";

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-5 py-12 md:py-20">
      <div className="grid items-center gap-10 rounded-3xl bg-secondary/50 p-6 md:grid-cols-[280px_1fr] md:p-12">
        <div className="mx-auto h-56 w-56 overflow-hidden rounded-full ring-4 ring-background md:h-64 md:w-64">
          <img
            src={artistImg}
            alt="Retrato da artista da Ilustrana Studio"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="font-display text-2xl text-primary">sobre</p>
          <h2 className="mt-1 font-display text-4xl text-ink md:text-5xl">
            Desenho desde sempre, ilustro com carinho.
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink/75">
            Sou ilustradora apaixonada por personagens fofos, livros infantis e
            histórias visuais. Trabalho misturando ilustração digital e técnicas
            tradicionais como giz pastel oleoso — porque acho que cada projeto
            pede um traço diferente.
          </p>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink/75">
            Aqui no portfólio você encontra do rascunho ao final de cada peça.
            Acredito que mostrar o processo é o que conecta a arte com quem
            olha pra ela.
          </p>
        </div>
      </div>
    </section>
  );
}
