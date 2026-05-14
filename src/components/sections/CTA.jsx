import React from 'react';
import Container from '../layout/Container';
import Button from '../ui/Button';

const CTA = () => {
  return (
    <section id="booking" className="py-32 px-6 md:px-20 bg-bloom-dark relative overflow-hidden">
      {/* Detalhe decorativo de fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      
      <Container className="max-w-4xl relative z-10">
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden p-8 md:p-16">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading text-bloom-text">Seu Momento Bloom</h2>
            <p className="text-bloom-text/60 text-sm tracking-wide">Escolha o melhor horário para cuidar de você.</p>
            <div className="w-16 h-[2px] bg-bloom-lilac mx-auto mt-4"></div>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-3 text-left">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-bloom-lilac ml-2">Serviço Desejado</label>
              <select className="w-full p-4 bg-bloom-fundo border border-bloom-gray rounded-2xl outline-none focus:border-bloom-lilac transition-all text-sm text-bloom-text/80 appearance-none cursor-pointer">
                <option>Alongamento em Gel</option>
                <option>Banho em Gel</option>
                <option>Nail Art Exclusiva</option>
                <option>Manutenção</option>
              </select>
            </div>
            <div className="space-y-3 text-left">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-bloom-lilac ml-2">Melhor Horário</label>
              <input type="datetime-local" className="w-full p-4 bg-bloom-fundo border border-bloom-gray rounded-2xl outline-none focus:border-bloom-lilac transition-all text-sm text-bloom-text/80 cursor-pointer" />
            </div>
          </form>

          <div className="text-center">
            <Button variant="outline" className="w-full md:w-auto px-16 py-5 border-bloom-gray hover:bg-bloom-lilac hover:text-white hover:border-bloom-lilac shadow-lg">
              Solicitar Reserva no WhatsApp
            </Button>
            <p className="text-[9px] text-bloom-text/40 uppercase tracking-widest mt-6">Resposta instantânea via consultoria premium</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
