import React from 'react';
import htm from 'htm';

const html = htm.bind(React.createElement);

const Home = () => html`
    <div class="fade-in">
        <section class="relative min-h-screen flex items-center pt-20 overflow-hidden bg-bloom-offWhite">
            <div class="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="z-10 fade-in order-2 lg:order-1">
                    <span class="font-sans text-xs uppercase tracking-[0.4em] text-bloom-purple font-bold mb-6 block">
                        Luxo Suave & Moderno
                    </span>
                    <h1 class="text-6xl md:text-8xl font-serif text-bloom-graphite leading-[1.1] mb-8">
                        Unhas que refletem <br/>sua <span class="italic text-bloom-lilac">essência</span>.
                    </h1>
                    <p class="text-bloom-graphite/70 text-lg md:text-xl font-sans mb-10 max-w-lg leading-relaxed">
                        Sofisticação, delicadeza e autenticidade em cada detalhe do seu nail design.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-5">
                        <a href="#agendar" class="btn-primary text-center">Agendar horário</a>
                        <a href="#servicos" class="btn-secondary text-center">Conhecer serviços</a>
                    </div>
                </div>
                <div class="relative order-1 lg:order-2 fade-in">
                    <div class="relative z-10 rounded-bloom overflow-hidden shadow-bloom aspect-[4/5] max-w-md mx-auto lg:ml-auto">
                        <img src="assets/hero-bg.png" alt="Bloom Studio Premium" class="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
                    </div>
                    <div class="absolute -bottom-10 -left-10 w-64 h-64 bg-bloom-lilac/10 rounded-full blur-3xl -z-0"></div>
                </div>
            </div>
        </section>

        <section class="py-24 bg-white">
            <div class="container mx-auto px-6">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div class="text-center p-8 bloom-card">
                        <div class="w-16 h-16 bg-bloom-lilac/10 text-bloom-purple rounded-full flex items-center justify-center mx-auto mb-6">
                            <i data-lucide="sparkles" class="w-8 h-8"></i>
                        </div>
                        <h3 class="text-2xl font-serif mb-4">Excelência</h3>
                        <p class="text-gray-500 text-sm leading-relaxed">Produtos premium e técnicas internacionais.</p>
                    </div>
                    <div class="text-center p-8 bloom-card">
                        <div class="w-16 h-16 bg-bloom-lilac/10 text-bloom-purple rounded-full flex items-center justify-center mx-auto mb-6">
                            <i data-lucide="shield-check" class="w-8 h-8"></i>
                        </div>
                        <h3 class="text-2xl font-serif mb-4">Biossegurança</h3>
                        <p class="text-gray-500 text-sm leading-relaxed">Protocolos rigorosos de esterilização.</p>
                    </div>
                    <div class="text-center p-8 bloom-card">
                        <div class="w-16 h-16 bg-bloom-lilac/10 text-bloom-purple rounded-full flex items-center justify-center mx-auto mb-6">
                            <i data-lucide="heart" class="w-8 h-8"></i>
                        </div>
                        <h3 class="text-2xl font-serif mb-4">Acolhimento</h3>
                        <p class="text-gray-500 text-sm leading-relaxed">Ambiente exclusivo projetado para você.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
`;

export default Home;
