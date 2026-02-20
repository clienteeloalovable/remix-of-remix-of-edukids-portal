const testimonials = [
  {
    name: "Camila Rodrigues",
    text: "As atividades de pareamento de sombras e formas geométricas ajudaram meu filho com Autismo a melhorar muito sua percepção visual e coordenação motora. Material incrível!",
    avatar: "👩‍👦",
    tag: "Mãe — Autismo",
  },
  {
    name: "Roberto Lima",
    text: "Os exercícios de tracejado e sequência de ações fizeram meu filho com TDAH se sentir mais focado e organizado. Ele adora as atividades de identificação de formas e cores!",
    avatar: "👨‍👦",
    tag: "Pai — TDAH",
  },
  {
    name: "Fernanda Costa",
    text: "As atividades de reconhecimento de letras, formação de palavras e caligrafia fizeram uma enorme diferença na leitura e escrita do meu filho com Dislexia. Recomendo demais!",
    avatar: "👩‍🏫",
    tag: "Educadora — Dislexia",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-16 md:py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-center text-foreground mb-4">
          O que pais e educadores <span className="text-gradient-primary">estão dizendo</span>
        </h2>
        <p className="text-center text-muted-foreground font-body text-lg mb-12 max-w-xl mx-auto">
          Veja os depoimentos de quem já utiliza nossos cadernos de atividades adaptadas.
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
