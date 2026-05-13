import React, { useState, useEffect } from 'react';
import htm from 'htm';

const html = htm.bind(React.createElement);

// --- Sub-components ---
const Badge = ({ children }) => html`
    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bloom-lilac/10 border border-bloom-lilac/10 backdrop-blur-sm mb-6">
        <span class="text-[10px] uppercase tracking-[0.3em] font-bold text-bloom-purple">${children}</span>
    </div>
`;

const SectionTitle = ({ badge, title, subtitle, centered = true }) => html`
    <div class="mb-16 ${centered ? 'text-center' : 'text-left'} reveal">
        ${badge && html`<${Badge}>${badge}</${Badge}>`}
        <h2 class="text-4xl md:text-6xl font-serif text-bloom-graphite leading-tight mt-4 font-light">
            ${title}
        </h2>
        ${subtitle && html`<p class="text-bloom-graphite/60 text-lg mt-6 max-w-2xl ${centered ? 'mx-auto' : ''} leading-relaxed">
            ${subtitle}
        </p>`}
        ${centered && html`<div class="w-20 h-1 bg-bloom-lilac mx-auto mt-8 rounded-full"></div>`}
    </div>
`;

const Home = () => {
    useEffect(() => {
        // Intersection Observer para efeito de revelação ao rolar
        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return html`
        <div class="one-page-layout">
            <!-- HERO SECTION -->
            <section id="inicio" class="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-bloom-offWhite">
                <div class="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-bloom-lilac/15 blur-[120px] rounded-full"></div>
                <div class="container mx-auto px-6 relative z-10">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div class="reveal">
                            <${Badge}>Luxo & Sofisticação ✨</${Badge}>
                            <h1 class="text-5xl md:text-8xl font-serif text-bloom-graphite leading-tight mb-8 font-light">
                                Unhas que refletem <br/>sua <span class="italic text-bloom-lilac">essência</span>.
                            </h1>
                            <p class="text-bloom-graphite/60 text-lg md:text-xl mb-12 max-w-xl leading-relaxed">
                                Um espaço exclusivo projetado para realçar a sua beleza natural com o que há de mais moderno em nail design.
                            </p>
                            <div class="flex flex-wrap gap-6">
                                <a href="#agendar" class="btn-primary px-10 py-5">Agendar horário</a>
                                <a href="#servicos" class="btn-secondary px-10 py-5">Nossos Serviços</a>
                            </div>
                        </div>
                        <div class="reveal relative">
                            <div class="rounded-[40px] overflow-hidden shadow-bloom aspect-[4/5] transform rotate-2 hover:rotate-0 transition-all duration-1000">
                                <img src="assets/hero-bg.png" class="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- SERVICES SECTION -->
            <section id="servicos" class="py-32 bg-white">
                <div class="container mx-auto px-6">
                    <${SectionTitle} 
                        badge="O que fazemos"
                        title="Menu de Experiências"
                        subtitle="Técnicas premium e produtos de alta performance para resultados duradouros e impecáveis."
                    />
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                        ${[
                            { title: "Alongamento em Gel", icon: "sparkles", desc: "Técnica avançada para unhas longas com aspecto natural e duradouro." },
                            { title: "Banho em Gel", icon: "shield-check", desc: "Camada protetora que garante força e brilho vitrificado às suas unhas." },
                            { title: "Esmaltação em Gel", icon: "heart", desc: "Cor intensa e secagem imediata com durabilidade de até 21 dias." }
                        ].map(s => html`
                            <div class="reveal bloom-card p-12 text-center group border border-bloom-gray/20 hover:border-bloom-lilac">
                                <div class="w-16 h-16 bg-bloom-offWhite text-bloom-purple rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-bloom-purple group-hover:text-white transition-all duration-500">
                                    <i data-lucide=${s.icon} class="w-8 h-8"></i>
                                </div>
                                <h3 class="text-2xl font-serif mb-4">${s.title}</h3>
                                <p class="text-bloom-graphite/50 text-sm leading-relaxed">${s.desc}</p>
                            </div>
                        `)}
                    </div>
                </div>
            </section>

            <!-- GALLERY SECTION -->
            <section id="galeria" class="py-32 bg-bloom-offWhite">
                <div class="container mx-auto px-6">
                    <${SectionTitle} 
                        badge="Inspiração"
                        title="Trabalhos & Arte"
                        subtitle="Explore a delicadeza e precisão de nossos últimos nail designs."
                    />
                    <div class="columns-1 md:columns-3 gap-8 space-y-8">
                        ${['nails-1.png', 'hero-bg.png', 'nails-1.png', 'hero-bg.png', 'nails-1.png'].map((img, i) => html`
                            <div key=${i} class="reveal rounded-[32px] overflow-hidden shadow-bloom group cursor-pointer">
                                <img src="assets/${img}" class="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110" />
                            </div>
                        `)}
                    </div>
                </div>
            </section>

            <!-- ABOUT SECTION -->
            <section id="sobre" class="py-32 bg-white">
                <div class="container mx-auto px-6">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div class="reveal relative">
                            <div class="rounded-[40px] overflow-hidden shadow-bloom aspect-[3/4]">
                                <img src="assets/hero-bg.png" class="w-full h-full object-cover" />
                            </div>
                            <div class="absolute -bottom-10 -right-10 bg-bloom-lilac p-12 rounded-[40px] shadow-2xl hidden md:block">
                                <span class="text-4xl font-serif text-white block mb-2">5+</span>
                                <span class="text-[10px] uppercase tracking-widest font-bold text-white/70">Anos de Excelência</span>
                            </div>
                        </div>
                        <div class="reveal">
                            <${Badge}>Sobre o Estúdio</${Badge}>
                            <h2 class="text-5xl md:text-6xl font-serif text-bloom-graphite mb-8 leading-tight">
                                Onde o cuidado se torna <span class="italic text-bloom-lilac">arte</span>.
                            </h2>
                            <p class="text-bloom-graphite/60 text-lg leading-relaxed mb-10">
                                No Bloom Studio Nails, acreditamos que suas unhas são uma extensão da sua personalidade. Nosso compromisso é oferecer um ambiente acolhedor e resultados que superem suas expectativas.
                            </p>
                            <div class="space-y-6">
                                <div class="flex items-center gap-4">
                                    <div class="w-10 h-10 rounded-full bg-bloom-lilac/10 flex items-center justify-center text-bloom-purple"><i data-lucide="check" class="w-5 h-5"></i></div>
                                    <span class="font-sans font-medium text-bloom-graphite">Produtos Premium Importados</span>
                                </div>
                                <div class="flex items-center gap-4">
                                    <div class="w-10 h-10 rounded-full bg-bloom-lilac/10 flex items-center justify-center text-bloom-purple"><i data-lucide="check" class="w-5 h-5"></i></div>
                                    <span class="font-sans font-medium text-bloom-graphite">Biossegurança Rigorosa</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- BOOKING SECTION -->
            <section id="agendar" class="py-32 bg-bloom-offWhite">
                <div class="container mx-auto px-6">
                    <div class="max-w-4xl mx-auto bg-white p-12 md:p-24 rounded-[50px] shadow-bloom relative overflow-hidden">
                        <div class="absolute top-0 right-0 w-64 h-64 bg-bloom-lilac/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        
                        <${SectionTitle} 
                            title="Seu Momento Bloom"
                            subtitle="Escolha o melhor horário para cuidar de você."
                        />
                        
                        <form class="space-y-8 reveal">
                            <div class="grid md:grid-cols-2 gap-8">
                                <div class="space-y-2">
                                    <label class="text-[10px] uppercase tracking-widest font-bold text-bloom-purple ml-2">Serviço Desejado</label>
                                    <select class="w-full p-5 rounded-bloom bg-bloom-offWhite border-none outline-none focus:ring-2 ring-bloom-lilac/20 appearance-none font-sans text-bloom-graphite/60">
                                        <option>Alongamento em Gel</option>
                                        <option>Banho em Gel</option>
                                        <option>Esmaltação em Gel</option>
                                    </select>
                                </div>
                                <div class="space-y-2">
                                    <label class="text-[10px] uppercase tracking-widest font-bold text-bloom-purple ml-2">Melhor Horário</label>
                                    <input type="datetime-local" class="w-full p-5 rounded-bloom bg-bloom-offWhite border-none outline-none focus:ring-2 ring-bloom-lilac/20 font-sans text-bloom-graphite/60" />
                                </div>
                            </div>
                            <button type="button" class="w-full btn-primary py-6 text-sm shadow-xl">Solicitar Reserva no WhatsApp</button>
                        </form>
                    </div>
                </div>
            </section>

            <style>
                .reveal {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 1s ease-out;
                }
                .reveal.active {
                    opacity: 1;
                    transform: translateY(0);
                }
                section {
                    scroll-margin-top: 80px;
                }
            </style>
        </div>
    `;
};

export default Home;
