const features = [
  {
    icon: "📦",
    text: "Atividades práticas de interpretação de textos com base nas apostilas — prontas para imprimir e usar.",
  },
  {
    icon: "🔤",
    text: "Exercícios interativos para ensinar vocabulário e gramática de forma lúdica e acessível.",
  },
  {
    icon: "📖",
    text: "Histórias curtas e envolventes, com personagens cativantes como Lupita, Dulce e muitos outros.",
  },
  {
    icon: "🎨",
    text: "Desafios de interpretação e atividades de desenho para melhorar a compreensão visual e textual.",
  },
  {
    icon: "✍️",
    text: "Questões de compreensão oral e escrita que trabalham identificação de personagens, cenários e enredo.",
  },
  {
    icon: "🧩",
    text: "Análise gramatical com identificação de substantivos, adjetivos, sinônimos e estrutura de frases.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-center text-foreground mb-4">
          O que você vai <span className="text-gradient-primary">receber</span>
        </h2>
        <p className="text-center text-muted-foreground font-body text-lg mb-12 max-w-xl mx-auto">
          Materiais completos para desenvolver a interpretação de textos em cada nível.
        </p>

        <div className="max-w-3xl mx-auto space-y-6">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-4 bg-card rounded-2xl p-6 shadow-card">
              <span className="text-3xl flex-shrink-0">{f.icon}</span>
              <p className="font-body text-foreground/90 text-base md:text-lg">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
