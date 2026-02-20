import autismoImg from "@/assets/activity-autism.jpg";
import tdahImg from "@/assets/activity-tdah.jpg";
import dislexiaImg from "@/assets/activity-dislexia.jpg";

const CHECKOUT_URL = "https://pay.cakto.com.br/in9npth_775414";

const products = [
  {
    title: "Caderno Autismo",
    description: "Pareamento de sombras, formas geométricas, coordenação motora fina e sequências lógicas. Estimula percepção visual, reconhecimento de formas e raciocínio lógico de forma lúdica e interativa.",
    image: autismoImg,
  },
  {
    title: "Caderno TDAH",
    description: "Identificação e classificação de objetos, formas e cores, tracejados e sequência de ações. Desenvolve atenção, concentração, memória visual e organização sequencial.",
    image: tdahImg,
  },
  {
    title: "Caderno Dislexia",
    description: "Reconhecimento de letras e sons, formação de palavras, caça-palavras e caligrafia. Trabalha consciência fonológica, fluência na leitura e formação correta das letras.",
    image: dislexiaImg,
  },
];

const ProductsSection = () => {
  return (
    <section id="cursos" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-center text-foreground mb-4">
          Nossos <span className="text-gradient-primary">Cadernos de Atividades</span>
        </h2>
        <p className="text-center text-muted-foreground font-body text-lg mb-12 max-w-xl mx-auto">
          Materiais completos e adaptados, prontos para imprimir e usar em sala de aula ou em casa.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <div
              key={product.title}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-warm transition-shadow duration-300 group"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{product.title}</h3>
                <p className="font-body text-muted-foreground mb-4 text-sm">{product.description}</p>
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-hero-gradient text-primary-foreground font-display font-bold px-5 py-2.5 rounded-full text-sm hover:opacity-90 transition-opacity"
                >
                  Adquirir agora
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
