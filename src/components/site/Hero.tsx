import { Heart, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-5 pt-14 pb-10 md:pt-20 md:pb-16">
        {/* Doodles fofos */}
        <Star className="animate-wobble pointer-events-none absolute left-4 top-10 h-7 w-7 fill-lemon text-ink md:left-10" strokeWidth={2.5} />
        <Heart className="animate-floaty pointer-events-none absolute right-8 top-6 h-8 w-8 fill-rose text-ink" strokeWidth={2.5} />
        <Sparkles className="animate-wobble pointer-events-none absolute right-24 bottom-10 h-6 w-6 text-ink" strokeWidth={2.5} />
        <span className="animate-floaty pointer-events-none absolute left-1/2 top-2 hidden h-3 w-3 rounded-full bg-mint ring-2 ring-ink md:block" />

        <span className="sticker tilt-l inline-flex items-center gap-2 rounded-full bg-lemon px-4 py-1.5 font-sans text-sm font-semibold text-ink">
          <Sparkles className="h-4 w-4" /> oi, oi! seja bem-vindo
        </span>

        <h1 className="mt-5 font-display text-5xl leading-[1.02] text-ink md:text-7xl">
          ilustrações que{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-primary">contam histórias</span>
            <span className="absolute -bottom-1 left-0 right-0 -z-0 h-3 rounded-full bg-lemon" />
          </span>{" "}
          <span className="font-display text-primary">— do rabisco ao traço final ✷</span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/75 md:text-lg">
          Portfólio fofinho de personagens, bichinhos e cenas para livros infantis,
          marcas e projetos autorais. <strong>Passa o mouse</strong> nas obras pra
          ver elas saindo do rabisco e virando arte! 🌷
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/portfolio"
            className="sticker inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-sans text-sm font-bold text-primary-foreground"
          >
            <Star className="h-4 w-4 fill-lemon text-ink" strokeWidth={2.5} /> ver portfólio
          </Link>
          <Link
            to="/contato"
            className="sticker tilt-r inline-flex items-center gap-2 rounded-full bg-mint px-6 py-3 font-sans text-sm font-bold text-ink"
          >
            <Heart className="h-4 w-4 fill-rose text-ink" strokeWidth={2.5} /> bora trabalhar junto
          </Link>
        </div>
      </div>

      {/* blobs decorativos */}
      <div aria-hidden className="pointer-events-none absolute -top-32 -right-40 h-[480px] w-[480px] rounded-full bg-secondary blur-3xl opacity-60" />
      <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-24 h-[320px] w-[320px] rounded-full bg-lilac blur-3xl opacity-50" />
    </section>
  );
}
