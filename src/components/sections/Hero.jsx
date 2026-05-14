import React from 'react';
import Container from '../layout/Container';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-32 pb-20 relative overflow-hidden bg-[#FAF8F5]">
      {/* Luxury Atmospheric Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[900px] h-[900px] bg-bloom-lilac/5 blur-[200px] rounded-full opacity-60"></div>
      <div className="absolute bottom-[-5%] left-[-10%] w-[600px] h-[600px] bg-bloom-nude/10 blur-[150px] rounded-full opacity-50"></div>
      
      {/* Texture Layer */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]"></div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 items-center gap-24 lg:gap-40">
          
          {/* CONTENT SIDE (Silent Luxury Spacing) */}
          <div className="space-y-16 text-center lg:text-left order-2 lg:order-1 animate-fade">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-4 group mx-auto lg:mx-0">
                <span className="w-8 h-[1px] bg-bloom-lilac/30 transition-all group-hover:w-12"></span>
                <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-bloom-lilac/80">Nail Artist & Beauty Academy</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl lg:text-[6.5rem] font-heading leading-[1] text-bloom-text font-light tracking-tight">
                  Arte, elegância <br /> e <span className="italic font-normal text-bloom-lilac">identidade</span> em cada detalhe.
                </h1>
              </div>

              <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light italic">
                Especializada em unhas premium, nail art e formação profissional para mulheres que valorizam elegância, autenticidade e experiênca.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start pt-4">
              <a 
                href="https://online.maapp.com.br/Lizianesilva" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-14 py-6 bg-bloom-dark text-white rounded-full font-bold text-[11px] uppercase tracking-[0.4em] hover:scale-105 transition-all shadow-2xl shadow-bloom-dark/20 flex items-center justify-center gap-3"
              >
                <span>✨</span> Agendar horário
              </a>
              <a 
                href="https://wa.me/5592992021064?text=Olá!%20Tenho%20interesse%20nos%20cursos%20da%20Bloom%20Academy%20🎓" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-14 py-6 bg-white/40 backdrop-blur-xl border border-bloom-lilac/20 text-bloom-dark rounded-full font-bold text-[11px] uppercase tracking-[0.4em] hover:bg-bloom-lilac hover:text-white transition-all flex items-center justify-center gap-3 group"
              >
                <span>🎓</span> Bloom Academy
              </a>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative z-20 p-6 border border-bloom-lilac/5 rounded-[60px] backdrop-blur-sm">
              <div className="relative rounded-[45px] overflow-hidden shadow-[0_50px_100px_rgba(126,104,159,0.08)] transform group">
                <img src="/assets/hero_photo.png" alt="Bloom Art Direction" className="w-full h-[600px] lg:h-[850px] object-cover hover:scale-105 transition-all duration-[3000ms]" />
                <div className="absolute inset-0 bg-gradient-to-tr from-bloom-dark/5 via-transparent to-white/10"></div>
              </div>
            </div>
            <div className="absolute -top-16 -right-16 w-56 h-56 border border-bloom-lilac/5 rounded-full -z-10 animate-spin-slow"></div>
            <div className="absolute bottom-10 -left-10 bg-white/80 backdrop-blur-2xl p-8 rounded-3xl shadow-2xl border border-white/20 z-30 hidden xl:block text-left">
              <p className="font-heading text-3xl text-bloom-text">Bloom</p>
              <p className="text-[8px] font-bold uppercase tracking-[0.5em] text-bloom-lilac mt-1">Estúdio Boutique</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
