import obra1Final from "@/assets/obra1-final.jpg";
import obra1Sketch from "@/assets/obra1-sketch.jpg";
import obra2Final from "@/assets/obra2-final.jpg";
import obra2Sketch from "@/assets/obra2-sketch.jpg";
import obra3Final from "@/assets/obra3-final.jpg";
import obra3Sketch from "@/assets/obra3-sketch.jpg";
import obra4Final from "@/assets/obra4-final.jpg";
import obra4Sketch from "@/assets/obra4-sketch.jpg";
import obra5Final from "@/assets/obra5-final.jpg";
import obra5Sketch from "@/assets/obra5-sketch.jpg";
import obra6Final from "@/assets/obra6-final.jpg";
import obra6Sketch from "@/assets/obra6-sketch.jpg";

export type Artwork = {
    id: string;
    titulo: string;
    ano: number;
    tecnica: string;
    tags: string[];
    destaque?: boolean;
    /** Para o efeito hover na home */
    sketch: string;
    final: string;
    /** Galeria do processo no modal (ordem: rascunho → etapas → final) */
    processo: { src: string; legenda: string }[];
    historia: string;
};

export const artworks: Artwork[] = [
    {
        id: "heroi-do-navio",
        titulo: "O Herói do Navio Voador",
        ano: 2024,
        tecnica: "Ilustração digital",
        tags: ["personagem", "fantasia", "infantil"],
        destaque: true,
        sketch: obra1Sketch,
        final: obra1Final,
        processo: [
            { src: obra1Sketch, legenda: "Rascunho inicial a lápis" },
            { src: obra1Final, legenda: "Arte final colorida" },
        ],
        historia:
            "Esse personagem nasceu de uma vontade de desenhar coragem em formato pequenininho. O rascunho começou só com a pose — um menino firme, espada erguida, olhar tranquilo — e foi ganhando o navio voador depois, quando percebi que ele precisava de um mundo para proteger. A paleta noturna roxa veio para deixar a cena íntima, como se fosse um sonho dele.",
    },
    {
        id: "gatinho-feliz",
        titulo: "Gatinho Feliz",
        ano: 2024,
        tecnica: "Ilustração digital com textura",
        tags: ["personagem", "fofo", "mascote"],
        sketch: obra2Sketch,
        final: obra2Final,
        processo: [
            { src: obra2Sketch, legenda: "Estudo das proporções" },
            { src: obra2Final, legenda: "Versão final com textura" },
        ],
        historia:
            "Comecei testando proporções de cabeça num esboço solto, procurando a expressão mais doce possível. A versão final ganhou textura granulada para lembrar giz de cera — gosto quando o digital tem cara de feito à mão.",
    },
    {
        id: "retrato-cachos",
        titulo: "Retrato — Cachos",
        ano: 2023,
        tecnica: "Ilustração digital",
        tags: ["retrato", "personagem"],
        destaque: true,
        sketch: obra3Sketch,
        final: obra3Final,
        processo: [
            { src: obra3Sketch, legenda: "Estudo de traços e cabelo" },
            { src: obra3Final, legenda: "Pintura final" },
        ],
        historia:
            "Esse retrato foi um exercício de captar personalidade no olhar. Passei mais tempo nos cachos do que no resto — cada mecha tem uma direção pensada para parecer leve. O fundo rosa entrou no final para enquadrar o rosto sem competir com ele.",
    },
    {
        id: "arvore-outono",
        titulo: "Árvore de Outono",
        ano: 2024,
        tecnica: "Giz pastel oleoso sobre papel",
        tags: ["tradicional", "paisagem"],
        sketch: obra4Sketch,
        final: obra4Final,
        processo: [
            { src: obra4Sketch, legenda: "Estrutura da árvore a lápis" },
            { src: obra4Final, legenda: "Camadas de pastel oleoso" },
        ],
        historia:
            "Quis fugir do digital por um tempo e voltei pro giz pastel. O rascunho foi só a anatomia dos galhos — depois fui empilhando camadas de cor sem medo de borrar. A folhagem laranja contra o azul intenso é o que me prende em pinturas de outono.",
    },
    {
        id: "raposinha-floresta",
        titulo: "Raposinha na Floresta",
        ano: 2024,
        tecnica: "Ilustração digital",
        tags: ["personagem", "natureza", "infantil"],
        sketch: obra5Sketch,
        final: obra5Final,
        processo: [
            { src: obra5Sketch, legenda: "Esboço a lápis em caderno" },
            { src: obra5Final, legenda: "Cena finalizada" },
        ],
        historia:
            "Esse foi um daqueles dias em que o rascunho saiu redondinho de primeira. Fotografei no caderno antes de levar pro digital porque eu queria lembrar como o desenho estava puro nessa fase. A cena ganhou cogumelos e samambaias depois, pra dar contexto pra raposinha.",
    },
    {
        id: "viagem-papel",
        titulo: "Viagem de Papel",
        ano: 2025,
        tecnica: "Ilustração digital",
        tags: ["personagem", "fantasia"],
        destaque: true,
        sketch: obra6Sketch,
        final: obra6Final,
        processo: [
            { src: obra6Sketch, legenda: "Rascunho da composição" },
            { src: obra6Final, legenda: "Cena final colorida" },
        ],
        historia:
            "A ideia veio de uma frase boba: ‘e se papel pudesse voar?’. O rascunho era quase só a silhueta da menina e do avião, sem cenário. Na arte final acrescentei estrelas e nuvens algodão pra deixar o céu acolhedor, quase de quarto de criança.",
    },
];
