const CHECKOUT_URL = "https://pay.cakto.com.br/9huzggx_775426";

const FinalCTASection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-5xl md:text-6xl mb-6">🚀</div>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Não perca essa <span className="text-gradient-primary">oportunidade!</span>
          </h2>
          <p className="font-body text-muted-foreground text-base md:text-lg mb-8 max-w-xl mx-auto">
            Não perca essa chance de transformar a aprendizagem do seu filho! Adquira o pacote e comece a aprender de forma divertida e eficaz.
          </p>
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-hero-gradient text-primary-foreground font-display font-bold text-lg md:text-xl px-10 py-4 md:py-5 rounded-full shadow-warm hover:opacity-90 transition-all hover:scale-105"
          >
            Adquira Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
