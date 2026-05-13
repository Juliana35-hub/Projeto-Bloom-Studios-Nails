import React from 'react';

const ServiceCard = ({ title, price, duration, description }) => (
    <div className="bg-white p-10 rounded-bloom shadow-bloom border border-bloom-gray/30 hover:border-bloom-lilac transition-all hover:-translate-y-2 group">
        <div className="w-12 h-12 bg-bloom-offWhite text-bloom-purple rounded-full flex items-center justify-center mb-6 group-hover:bg-bloom-lilac group-hover:text-white transition-colors">
            <i data-lucide="sparkle" className="w-6 h-6"></i>
        </div>
        <h3 className="text-2xl font-serif mb-3 text-bloom-graphite">{title}</h3>
        <div className="flex justify-between text-[10px] uppercase tracking-[0.2em] text-bloom-purple font-bold mb-6">
            <span className="flex items-center gap-1"><i data-lucide="clock" className="w-3 h-3"></i> {duration}</span>
            <span className="bg-bloom-nude/20 px-2 py-0.5 rounded">{price}</span>
        </div>
        <p className="text-bloom-graphite/60 text-sm leading-relaxed mb-8">{description}</p>
        <a href="#agendar" className="inline-block w-full py-3 text-center border-2 border-bloom-purple text-bloom-purple rounded-bloom text-xs uppercase tracking-widest font-bold hover:bg-bloom-purple hover:text-white transition-all">
            Selecionar serviço
        </a>
    </div>
);

const Services = () => {
    const categories = [
        {
            title: "Técnicas Premium",
            items: [
                { title: "Alongamento em Gel", price: "R$ 180", duration: "120 min", description: "Técnica de alta performance para unhas longas com aspecto natural e duradouro." },
                { title: "Banho em Gel", price: "R$ 120", duration: "90 min", description: "Camada protetora para unhas naturais, garantindo força e brilho vitrificado." },
                { title: "Manutenção", price: "R$ 130", duration: "90 min", description: "Revisão periódica para manter a estrutura e o design impecáveis." }
            ]
        },
        {
            title: "Finalização & Arte",
            items: [
                { title: "Nail Art Artística", price: "A consultar", duration: "+30 min", description: "Desenhos manuais, pedrarias e efeitos exclusivos para expressar seu estilo." },
                { title: "Esmaltação em Gel", price: "R$ 70", duration: "45 min", description: "Cor intensa e secagem imediata com durabilidade de até 21 dias." },
                { title: "Blindagem", price: "R$ 90", duration: "60 min", description: "Tratamento para nivelar e proteger a lâmina ungueal com acabamento clean." }
            ]
        }
    ];

    return (
        <div className="pt-32 pb-24 px-6 fade-in bg-bloom-offWhite">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-24">
                    <span className="font-sans text-xs uppercase tracking-[0.4em] text-bloom-purple font-bold">Experiências Bloom</span>
                    <h2 className="text-6xl font-serif mt-4 text-bloom-graphite">Menu de Serviços</h2>
                    <div className="w-24 h-1 bg-bloom-lilac mx-auto mt-8 rounded-full"></div>
                </div>

                {categories.map((cat, idx) => (
                    <div key={idx} className="mb-24 last:mb-0">
                        <h3 className="text-xs uppercase tracking-[0.3em] text-bloom-purple/40 font-bold mb-12 flex items-center gap-4">
                            <span className="whitespace-nowrap">{cat.title}</span>
                            <div className="w-full h-px bg-bloom-gray/50"></div>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {cat.items.map((item, i) => <ServiceCard key={i} {...item} />)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
