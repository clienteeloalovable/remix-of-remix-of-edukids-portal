const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-center text-foreground mb-4">
          Sobre <span className="text-gradient-primary">nós</span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <p className="font-body text-lg text-muted-foreground">
            Somos uma equipe apaixonada por educação. Criamos apostilas de interpretação de textos que ajudam pais e educadores a desenvolver a leitura, compreensão e pensamento crítico das crianças — com histórias envolventes e questões práticas para cada nível.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="bg-accent rounded-2xl p-6">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">Missão</h3>
              <p className="font-body text-sm text-muted-foreground">
                Democratizar o acesso a materiais educativos de qualidade, tornando o aprendizado de leitura acessível e divertido para todas as crianças.
              </p>
            </div>
            <div className="bg-accent rounded-2xl p-6">
              <div className="text-3xl mb-3">👁️</div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">Visão</h3>
              <p className="font-body text-sm text-muted-foreground">
                Ser referência em conteúdo educacional de interpretação de textos no Brasil, impactando positivamente a formação de milhares de crianças.
              </p>
            </div>
            <div className="bg-accent rounded-2xl p-6">
              <div className="text-3xl mb-3">💛</div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">Valores</h3>
              <p className="font-body text-sm text-muted-foreground">
                Qualidade, acessibilidade, inovação pedagógica e compromisso com o desenvolvimento integral da criança.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
