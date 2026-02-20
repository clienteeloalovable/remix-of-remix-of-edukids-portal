const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🧩</span>
              <span className="font-display text-xl font-bold text-background">
                Aprender Incluir
              </span>
            </div>
            <p className="font-body text-background/60 text-sm">
              Atividades educativas adaptadas para crianças com Autismo, TDAH e Dislexia.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-background mb-4">Links Rápidos</h4>
            <div className="space-y-2">
              <a href="#home" className="block font-body text-background/60 hover:text-background transition-colors text-sm">Home</a>
              <a href="#sobre" className="block font-body text-background/60 hover:text-background transition-colors text-sm">Sobre</a>
              <a href="#cursos" className="block font-body text-background/60 hover:text-background transition-colors text-sm">Produtos</a>
              <a href="#depoimentos" className="block font-body text-background/60 hover:text-background transition-colors text-sm">Testemunhos</a>
              <a href="#contato" className="block font-body text-background/60 hover:text-background transition-colors text-sm">Contato</a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-background mb-4">Suporte</h4>
            <a
              href="https://wa.me/558896452961"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-background/60 hover:text-background transition-colors text-sm"
            >
              📱 WhatsApp: +55 88 9645-2961
            </a>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6 text-center">
          <p className="font-body text-background/50 text-sm">
            © 2026 Aprender Incluir. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
