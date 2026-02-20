const GuaranteeSection = () => {
  return (
    <section className="py-16 md:py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-5xl md:text-6xl mb-6">🛡️</div>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Garantia de <span className="text-gradient-primary">Satisfação</span>
          </h2>
          <p className="font-body text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            Se você não estiver completamente satisfeito com os resultados, oferecemos uma garantia de devolução do seu dinheiro em até <strong className="text-foreground">30 dias</strong>. Sem perguntas, sem burocracia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
