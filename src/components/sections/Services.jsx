import React from 'react';
import Container from '../layout/Container';

const services = [
  {
    id: 1,
    title: 'Alongamento de Fibra',
    description: 'Técnica avançada para unhas longas com aspecto natural e duradouro.',
    duration: '3h',
    price: 'R$ 200,00',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Blindagem Natural',
    description: 'Camada protetora que garante força e brilho vitrificado às suas unhas.',
    duration: '2h',
    price: 'R$ 150,00',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Esmaltação em Gel',
    description: 'Cor intensa e secagem imediata com durabilidade de até 21 dias.',
    duration: '1h',
    price: 'R$ 100,00',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Manutenção',
    description: 'Cuidado periódico para manter a saúde e beleza do seu alongamento.',
    duration: '2h',
    price: 'R$ 130,00',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  },
  {
    id: 5,
    title: 'SPA dos Pés',
    description: 'Relaxamento profundo e hidratação intensa para pés renovados.',
    duration: '1h',
    price: 'R$ 100,00',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0L4 10l5.656-5.656a4 4 0 115.656 5.656L10 14.414l4.828 4.828z" />
      </svg>
    )
  },
  {
    id: 6,
    title: 'Manicure Simples',
    description: 'Cuidado essencial para unhas limpas, modeladas e bem cuidadas.',
    duration: '1h',
    price: 'R$ 30,00',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
      </svg>
    )
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 px-6 md:px-20 bg-white">
      <Container>
        <div className="text-center mb-24 space-y-4">
          <div className="inline-block px-4 py-1.5 bg-bloom-lilac/10 text-bloom-lilac text-[10px] font-bold uppercase tracking-[0.4em] rounded-full mb-2">O que fazemos</div>
          <h2 className="text-4xl md:text-6xl font-heading text-bloom-text italic font-light">Menu de Experiências</h2>
          <p className="text-bloom-text/50 max-w-2xl mx-auto font-light leading-relaxed text-lg">
            Técnicas premium e produtos de alta performance para resultados duradouros e impecáveis.
          </p>
          <div className="w-20 h-[2px] bg-bloom-lilac/30 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group p-10 bg-white border border-bloom-gray/30 rounded-[30px] hover:shadow-2xl hover:shadow-bloom-lilac/10 transition-all duration-500 text-center space-y-6">
              <div className="w-16 h-16 bg-bloom-lilac/5 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform text-bloom-lilac">
                {service.icon}
              </div>
              <div className="space-y-3 text-left md:text-center">
                <h3 className="text-2xl font-heading text-bloom-text">{service.title}</h3>
                <p className="text-sm text-bloom-text/50 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
              <div className="pt-4 flex justify-center gap-4 text-[10px] font-bold uppercase tracking-widest text-bloom-lilac">
                <span>{service.duration}</span>
                <span className="w-[1px] h-3 bg-bloom-gray"></span>
                <span>{service.price}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
