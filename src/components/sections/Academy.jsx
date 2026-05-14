import React from 'react';
import Container from '../layout/Container';
import Button from '../ui/Button';

const Academy = () => {
  return (
    <section id="academy" className="py-32 px-6 md:px-20 bg-[#FAF8F5] relative overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="inline-block px-4 py-1 bg-bloom-dark text-white text-[9px] font-bold uppercase tracking-[0.3em] rounded-full">Exclusive Academy</div>
              <h2 className="text-4xl md:text-6xl font-heading text-bloom-text">Domine a Arte <br /> do Luxo.</h2>
              <p className="text-bloom-text/50 text-lg font-light">Compartilho minhas técnicas exclusivas para quem deseja elevar seu posicionamento no mercado de unhas premium.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-8 bg-white rounded-3xl border border-bloom-gray/50 hover:shadow-xl transition-all group text-left">
                <h4 className="font-heading text-2xl text-bloom-dark mb-2">Mentorias VIP</h4>
                <p className="text-xs text-bloom-text/50 font-light leading-relaxed">Acompanhamento individual para transformar sua carreira artística.</p>
              </div>
              <div className="p-8 bg-white rounded-3xl border border-bloom-gray/50 hover:shadow-xl transition-all group text-left">
                <h4 className="font-heading text-2xl text-bloom-dark mb-2">Workshops</h4>
                <p className="text-xs text-bloom-text/50 font-light leading-relaxed">Imersões presenciais em técnicas de acabamento e design.</p>
              </div>
            </div>

            <div className="pt-6">
              <Button variant="secondary" className="px-10 py-5">Quero ser aluna</Button>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="rounded-[40px] overflow-hidden shadow-2xl relative z-10">
              <img src="/assets/port_1.png" alt="Academy Bloom" className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-bloom-lilac/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Academy;
