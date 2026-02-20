const CHECKOUT_URL = "https://pay.cakto.com.br/9huzggx_775426";

const SpecialOfferSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center bg-card rounded-2xl p-10 md:p-14 shadow-warm border-2 border-primary/20">
          <div className="text-5xl md:text-6xl mb-6">🎁</div>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Oferta <span className="text-gradient-primary">Exclusiva!</span>
          </h2>
          <p className="font-body text-muted-foreground text-base md:text-lg mb-4 max-w-xl mx-auto">
            Adquira agora o nosso pacote de interpretação de textos com <strong className="text-foreground">20% de desconto!</strong>
          </p>
          <p className="font-body text-muted-foreground text-base mb-8 max-w-xl mx-auto">
            Ganhe também materiais bônus para enriquecer a experiência de aprendizagem.
          </p>
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-cta-gradient text-secondary-foreground font-display font-bold text-lg md:text-xl px-10 py-4 md:py-5 rounded-full shadow-warm hover:opacity-90 transition-all hover:scale-105"
          >
            Adquira com Desconto
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpecialOfferSection;
