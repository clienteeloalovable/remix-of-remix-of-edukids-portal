import heroImg from "@/assets/hero-interpretacao.jpg";

const CHECKOUT_URL = "https://pay.cakto.com.br/9huzggx_775426";

const HeroSection = () => {
  return (
    <section id="home" className="relative flex items-center justify-center overflow-hidden pt-20 md:pt-16 bg-background">
      <div className="container mx-auto px-4 py-8 md:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-10">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-4 md:mb-6 animate-fade-in-up">
              Ajude seu filho a dominar a{" "}
              <span className="text-gradient-primary">interpretação de textos!</span>
            </h1>
            <p className="font-body text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-6 md:mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Aprendizado com histórias interessantes e questões envolventes. Pacotes educativos para crianças de todos os níveis: Nível 1, 2 e 3.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <a
                href="#cursos"
                className="bg-cta-gradient text-secondary-foreground font-display font-bold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full shadow-warm hover:opacity-90 transition-all hover:scale-105 text-center"
              >
                Saiba Mais
              </a>
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-hero-gradient text-primary-foreground font-display font-bold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full shadow-warm hover:opacity-90 transition-all hover:scale-105 text-center"
              >
                Comece Agora!
              </a>
            </div>
          </div>
          <div className="flex-1 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <img
              src={heroImg}
              alt="Crianças lendo e fazendo atividades de interpretação de textos"
              className="w-full max-w-lg mx-auto rounded-2xl shadow-warm animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
