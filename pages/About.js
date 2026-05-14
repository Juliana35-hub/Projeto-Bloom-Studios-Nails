import React from 'react';
import htm from 'htm';

const html = htm.bind(React.createElement);

const About = () => {
    return html`
        <div id="sobre" class="py-32 px-6 fade-in bg-white reveal">
            <div class="max-w-6xl mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div class="relative">
                        <div class="rounded-bloom overflow-hidden shadow-bloom aspect-[3/4] relative z-10">
                            <img src="assets/hero-bg.png" alt="Nail Designer" class="w-full h-full object-cover" />
                        </div>
                        <div class="absolute -top-10 -left-10 w-full h-full bg-bloom-lilac/10 rounded-bloom -z-0"></div>
                        <div class="absolute bottom-10 -right-10 p-10 bg-white rounded-bloom shadow-bloom z-20 hidden md:block">
                            <span class="text-4xl font-serif text-bloom-purple block mb-2">5+</span>
                            <span class="text-[10px] uppercase tracking-widest font-bold text-bloom-graphite/40">Anos de Experiência</span>
                        </div>
                    </div>

                    <div>
                        <span class="font-sans text-xs uppercase tracking-[0.4em] text-bloom-purple font-bold mb-6 block">Sobre o Estúdio</span>
                        <h2 class="text-5xl md:text-6xl font-serif text-bloom-graphite mb-8 leading-tight">
                            Elevando a <span class="italic text-bloom-lilac">beleza</span> através do cuidado.
                        </h2>
                        <div class="space-y-6 text-bloom-graphite/70 leading-relaxed text-lg">
                            <p>
                                O Bloom Studio Nails nasceu da paixão por transformar o cuidado com as unhas em um momento de arte e relaxamento. Mais do que um estúdio de beleza, somos um refúgio dedicado à sua autoestima.
                            </p>
                            <p>
                                Especializados em técnicas avançadas de alongamento e esmaltação em gel, nosso compromisso é com a saúde da sua unha natural e a perfeição do acabamento.
                            </p>
                        </div>

                        <div class="mt-12 grid grid-cols-2 gap-8">
                            <div>
                                <h4 class="font-serif text-2xl text-bloom-purple mb-2">Missão</h4>
                                <p class="text-sm text-bloom-graphite/60">Proporcionar uma experiência de luxo acessível e resultados impecáveis.</p>
                            </div>
                            <div>
                                <h4 class="font-serif text-2xl text-bloom-purple mb-2">Visão</h4>
                                <p class="text-sm text-bloom-graphite/60">Ser referência em inovação e sofisticação no mercado de nail design.</p>
                            </div>
                        </div>

                        <div class="mt-16 flex items-center gap-6">
                            <img src="assets/hero-bg.png" alt="Signature" class="w-32 h-16 object-contain opacity-40 grayscale" />
                            <div>
                                <p class="font-serif text-xl text-bloom-graphite">Juliana Bloom</p>
                                <p class="text-[10px] uppercase tracking-widest text-bloom-purple font-bold">Fundadora & Nail Artist</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
};

export default About;
