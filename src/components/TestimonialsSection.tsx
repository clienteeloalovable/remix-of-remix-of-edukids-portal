const testimonials = [
  {
    name: "Camila Rodrigues",
    text: "Meu filho adora as atividades de interpretação de textos! Ele aprendeu a se concentrar e a compreender o que lê de forma muito mais eficaz.",
    avatar: "👩‍👦",
    tag: "Mãe — Nível 1",
  },
  {
    name: "Roberto Lima",
    text: "As histórias são muito divertidas e educativas. As questões ajudam a refletir sobre o texto de uma maneira prática e simples.",
    avatar: "👨‍👦",
    tag: "Pai — Nível 2",
  },
  {
    name: "Fernanda Costa",
    text: "O material de gramática e interpretação avançada fez uma enorme diferença no desempenho escolar da minha filha. Recomendo demais!",
    avatar: "👩‍🏫",
    tag: "Educadora — Nível 3",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-16 md:py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-center text-foreground mb-4">
          O que dizem nossos <span className="text-gradient-primary">clientes</span>
        </h2>
        <p className="text-center text-muted-foreground font-body text-lg mb-12 max-w-xl mx-auto">
          Veja os depoimentos de quem já utiliza nossos materiais de interpretação de textos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card rounded-2xl p-8 shadow-card">
              <div className="text-4xl mb-4">{t.avatar}</div>
              <p className="font-body text-foreground/80 italic mb-6">"{t.text}"</p>
              <p className="font-display font-bold text-foreground">{t.name}</p>
              <p className="font-body text-sm text-muted-foreground">{t.tag}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
