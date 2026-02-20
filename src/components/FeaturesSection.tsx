const features = [
  {
    icon: "📦",
    text: "Cadernos completos com atividades específicas para Autismo, TDAH e Dislexia — prontos para imprimir e usar.",
  },
  {
    icon: "🎨",
    text: "Material interativo com imagens coloridas, exercícios de trace e pinte, recorte e colagem de fácil aplicação.",
  },
  {
    icon: "👁️",
    text: "Desenvolvimento da percepção visual com pareamento de sombras, identificação de padrões e reconhecimento de formas geométricas.",
  },
  {
    icon: "✋",
    text: "Coordenação motora fina com atividades de tracejado, desenho de linhas e formas que melhoram a destreza manual.",
  },
  {
    icon: "🔤",
    text: "Habilidades linguísticas com reconhecimento de letras, formação de palavras, caça-palavras e exercícios de caligrafia.",
  },
  {
    icon: "🧩",
    text: "Sequências lógicas e ordenação de ações que desenvolvem o raciocínio lógico, a atenção e a organização sequencial.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-center text-foreground mb-4">
          O que você vai <span className="text-gradient-primary">encontrar</span>
        </h2>
        <p className="text-center text-muted-foreground font-body text-lg mb-12 max-w-xl mx-auto">
          Atividades pensadas para estimular o desenvolvimento de cada criança de forma lúdica e acessível.
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
