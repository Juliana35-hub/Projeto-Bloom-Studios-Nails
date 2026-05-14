import React from 'react';
import Container from '../layout/Container';
import Button from '../ui/Button';

const Manifesto = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-20 bg-white overflow-hidden relative">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-24">
          <div className="flex-1 relative group">
            <div className="absolute -top-10 -left-10 w-80 h-80 bg-bloom-lilac/5 rounded-full blur-3xl group-hover:bg-bloom-lilac/10 transition-all duration-700"></div>
            <div className="relative z-10 rounded-[60px] overflow-hidden shadow-2xl border-[15px] border-bloom-fundo transform -rotate-2 group-hover:rotate-0 transition-all duration-1000">
              <img src="/assets/login_photo.png" alt="A Artista Bloom" className="w-full h-[650px] object-cover scale-110 group-hover:scale-100 transition-all duration-1000" />
            </div>
            <div className="absolute bottom-10 -right-5 bg-white p-6 rounded-3xl shadow-xl z-20 border border-bloom-gray">
              <p className="text-[9px] font-bold uppercase tracking-widest text-bloom-lilac mb-1">Visão Artística</p>
              <p className="font-heading text-xl text-bloom-text italic">"Transformo detalhes em identidade."</p>
            </div>
          </div>

          <div className="flex-1 space-y-10 text-center md:text-left">
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-bloom-lilac">O Manifesto</span>
              <h2 className="text-5xl md:text-7xl font-heading leading-tight text-bloom-text">Beleza que <br /> nasce da Alma.</h2>
            </div>
            <p className="text-lg md:text-xl text-bloom-text/60 leading-relaxed font-light">
              A Bloom não nasceu para ser apenas um estúdio, mas um universo de expressão. Cada traço, cada cor e cada acabamento é uma extensão da essência de quem confia em minhas mãos.
            </p>
            <div className="space-y-6 text-bloom-text/80 italic font-light text-lg border-l-2 border-bloom-lilac/30 pl-8">
              "Acredito que a verdadeira sofisticação reside na delicadeza. Meu propósito é revelar a força feminina através da arte minimalista e do cuidado artesanal."
            </div>
            <div className="pt-6">
              <Button variant="outline" className="px-12 py-5 border-2">Conheça minha Jornada</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Manifesto;
