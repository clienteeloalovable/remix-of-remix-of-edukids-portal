import { useState } from "react";
import { Menu, X } from "lucide-react";

const CHECKOUT_URL = "https://pay.cakto.com.br/9huzggx_775426";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl">📖</span>
          <span className="font-display text-lg font-bold text-foreground">
            Aprender <span className="text-gradient-primary">Interpretar</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="font-body font-semibold text-foreground/80 hover:text-primary transition-colors">Home</a>
          <a href="#sobre" className="font-body font-semibold text-foreground/80 hover:text-primary transition-colors">Sobre</a>
          <a href="#cursos" className="font-body font-semibold text-foreground/80 hover:text-primary transition-colors">Produtos</a>
          <a href="#depoimentos" className="font-body font-semibold text-foreground/80 hover:text-primary transition-colors">Testemunhos</a>
          <a href="#contato" className="font-body font-semibold text-foreground/80 hover:text-primary transition-colors">Contato</a>
        </nav>

        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex bg-cta-gradient text-secondary-foreground font-display font-bold px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity shadow-warm"
        >
          Adquirir Agora
        </a>

        <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-4 space-y-3">
          <a href="#home" onClick={() => setMenuOpen(false)} className="block font-body font-semibold text-foreground/80">Home</a>
          <a href="#sobre" onClick={() => setMenuOpen(false)} className="block font-body font-semibold text-foreground/80">Sobre</a>
          <a href="#cursos" onClick={() => setMenuOpen(false)} className="block font-body font-semibold text-foreground/80">Produtos</a>
          <a href="#depoimentos" onClick={() => setMenuOpen(false)} className="block font-body font-semibold text-foreground/80">Testemunhos</a>
          <a href="#contato" onClick={() => setMenuOpen(false)} className="block font-body font-semibold text-foreground/80">Contato</a>
          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="block bg-cta-gradient text-secondary-foreground font-display font-bold px-6 py-2.5 rounded-full text-center">
            Adquirir Agora
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
