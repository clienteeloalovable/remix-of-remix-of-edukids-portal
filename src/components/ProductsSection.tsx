import nivel1Img from "@/assets/product-nivel1.jpg";
import nivel2Img from "@/assets/product-nivel2.jpg";
import nivel3Img from "@/assets/product-nivel3.jpg";

const CHECKOUT_URL = "https://pay.cakto.com.br/9huzggx_775426";

const products = [
  {
    title: "Interpretação - Nível 1",
    description: "Textos curtos e simples com histórias como 'Lupita, a cadelinha' e 'A formiguinha Dulce'. Questões de identificação, atividades de desenho e construção de base sólida para leitura.",
    image: nivel1Img,
  },
  {
    title: "Interpretação - Nível 2",
    description: "Histórias com personagens bem definidos e questões de compreensão oral e escrita. Desenvolve vocabulário, leitura silenciosa e análise de diálogos em nível intermediário.",
    image: nivel2Img,
  },
  {
    title: "Interpretação e Gramática - Nível 3",
    description: "Textos longos e diversos com análise gramatical avançada: sinônimos, adjetivos, frases interrogativas e exclamativas. Promove pensamento crítico e análise textual.",
    image: nivel3Img,
  },
];

const ProductsSection = () => {
  return (
    <section id="cursos" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-center text-foreground mb-4">
          Nossas <span className="text-gradient-primary">Apostilas</span>
        </h2>
        <p className="text-center text-muted-foreground font-body text-lg mb-12 max-w-xl mx-auto">
          Pacotes educativos completos para cada nível de interpretação de textos.
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
