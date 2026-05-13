import React from 'react';

const About = () => {
    return (
        <div className="pt-32 pb-24 px-6 fade-in bg-bloom-offWhite min-h-screen">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="relative">
                        <div className="rounded-bloom overflow-hidden shadow-bloom aspect-[3/4] relative z-10">
                            <img src="assets/hero-bg.png" alt="Nail Designer" className="w-full h-full object-cover" />
                        </div>
                        {/* Decorative background shape */}
                        <div className="absolute -top-10 -left-10 w-full h-full bg-bloom-lilac/10 rounded-bloom -z-0"></div>
                        <div className="absolute bottom-10 -right-10 p-10 bg-white rounded-bloom shadow-bloom z-20 hidden md:block">
                            <span className="text-4xl font-serif text-bloom-purple block mb-2">5+</span>
                            <span className="text-[10px] uppercase tracking-widest font-bold text-bloom-graphite/40">Anos de Experiência</span>
                        </div>
                    </div>

                    <div>
                        <span className="font-sans text-xs uppercase tracking-[0.4em] text-bloom-purple font-bold mb-6 block">Sobre o Estúdio</span>
                        <h2 className="text-5xl md:text-6xl font-serif text-bloom-graphite mb-8 leading-tight">
                            Elevando a <span className="italic text-bloom-lilac">beleza</span> através do cuidado.
                        </h2>
                        <div className="space-y-6 text-bloom-graphite/70 leading-relaxed text-lg">
                            <p>
                                O Bloom Studio Nails nasceu da paixão por transformar o cuidado com as unhas em um momento de arte e relaxamento. Mais do que um estúdio de beleza, somos um refúgio dedicado à sua autoestima.
                            </p>
                            <p>
                                Especializados em técnicas avançadas de alongamento e esmaltação em gel, nosso compromisso é com a saúde da sua unha natural e a perfeição do acabamento.
                            </p>
                        </div>

                        <div className="mt-12 grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-serif text-2xl text-bloom-purple mb-2">Missão</h4>
                                <p className="text-sm text-bloom-graphite/60">Proporcionar uma experiência de luxo acessível e resultados impecáveis.</p>
                            </div>
                            <div>
                                <h4 className="font-serif text-2xl text-bloom-purple mb-2">Visão</h4>
                                <p className="text-sm text-bloom-graphite/60">Ser referência em inovação e sofisticação no mercado de nail design.</p>
                            </div>
                        </div>

                        <div className="mt-16 flex items-center gap-6">
                            <img src="assets/hero-bg.png" alt="Signature" className="w-32 h-16 object-contain opacity-40 grayscale" />
                            <div>
                                <p className="font-serif text-xl text-bloom-graphite">Juliana Bloom</p>
                                <p className="text-[10px] uppercase tracking-widest text-bloom-purple font-bold">Fundadora & Nail Artist</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
