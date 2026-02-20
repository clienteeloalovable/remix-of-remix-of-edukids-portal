const CHECKOUT_URL = "https://pay.cakto.com.br/in9npth_775414";

const benefits = [
  {
    icon: "🧠",
    title: "Autismo",
    description: "Pareamento de sombras, formas geométricas, sequências lógicas e coordenação motora fina para desenvolver percepção visual e cognitividade.",
  },
  {
    icon: "🎯",
    title: "TDAH",
    description: "Identificação de objetos, formas e cores, tracejados e sequências de ações que estimulam concentração, foco e organização.",
  },
  {
    icon: "📖",
    title: "Dislexia",
    description: "Reconhecimento de letras e sons, formação de palavras, caça-palavras e caligrafia para desenvolver consciência fonológica e leitura.",
  },
  {
    icon: "💡",
    title: "Aprendizado Lúdico",
    description: "Conteúdos com imagens coloridas e exercícios interativos que tornam o aprendizado acessível, divertido e envolvente.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-center text-foreground mb-4">
          Benefícios das <span className="text-gradient-primary">Atividades Adaptadas</span>
        </h2>
        <p className="text-center text-muted-foreground font-body text-lg mb-12 max-w-xl mx-auto">
          Materiais desenvolvidos para atender às necessidades específicas de cada criança.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((b) => (
            <div key={b.title} className="bg-card rounded-2xl p-6 md:p-8 shadow-card text-center">
              <div className="text-4xl md:text-5xl mb-4">{b.icon}</div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{b.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{b.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-hero-gradient text-primary-foreground font-display font-bold text-base md:text-lg px-8 py-3 md:py-4 rounded-full shadow-warm hover:opacity-90 transition-all hover:scale-105"
          >
            Adquira o Pacote Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
