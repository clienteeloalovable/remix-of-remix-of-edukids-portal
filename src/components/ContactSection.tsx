const ContactSection = () => {
  return (
    <section id="contato" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-center text-foreground mb-4">
          Entre em <span className="text-gradient-primary">contato</span>
        </h2>
        <p className="text-center text-muted-foreground font-body text-lg mb-12 max-w-xl mx-auto">
          Tem dúvidas? Fale conosco pelo WhatsApp!
        </p>

        <div className="max-w-md mx-auto bg-card rounded-2xl p-10 shadow-card text-center">
          <div className="text-6xl mb-6">💬</div>
          <h3 className="font-display text-2xl font-bold text-foreground mb-3">Suporte via WhatsApp</h3>
          <p className="font-body text-muted-foreground mb-8">
            Estamos prontos para ajudar! Clique no botão abaixo para iniciar uma conversa.
          </p>
          <a
            href="https://wa.me/558896452961"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cta-gradient text-secondary-foreground font-display font-bold text-lg px-8 py-4 rounded-full shadow-warm hover:opacity-90 transition-all hover:scale-105"
          >
            📱 +55 88 9645-2961
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
