const CHECKOUT_URL = "https://pay.cakto.com.br/9huzggx_775426";

const benefits = [
  {
    icon: "📚",
    title: "Leitura e Interpretação",
    description: "Desenvolvimento de habilidades de leitura e interpretação de textos com histórias envolventes e questões práticas.",
  },
  {
    icon: "🧠",
    title: "Pensamento Crítico",
    description: "Atividades que estimulam o pensamento crítico e a análise gramatical, ajudando a criança a refletir sobre o que lê.",
  },
  {
    icon: "📖",
    title: "Histórias por Nível",
    description: "Histórias envolventes e educativas para cada nível de aprendizagem: básico, intermediário e avançado.",
  },
  {
    icon: "💡",
    title: "Apoio Completo",
    description: "Apoio completo para crianças de diferentes idades e capacidades de leitura, com materiais prontos para uso.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-center text-foreground mb-4">
          Benefícios do nosso <span className="text-gradient-primary">material educativo</span>
        </h2>
        <p className="text-center text-muted-foreground font-body text-lg mb-12 max-w-xl mx-auto">
          Materiais desenvolvidos para fortalecer a leitura e compreensão textual das crianças.
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
            Adquira o Pacote de Interpretação!
          </a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
