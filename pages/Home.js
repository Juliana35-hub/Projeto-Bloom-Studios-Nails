import React, { useState, useEffect } from 'react';
import htm from 'htm';

// Premium Sections
import Services from './Services.js';
import Gallery from './Gallery.js';
import About from './About.js';
import Booking from './Booking.js';

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
            <${Services} />

            <!-- GALLERY SECTION -->
            <${Gallery} />

            <!-- ABOUT SECTION -->
            <${About} />

            <!-- BOOKING SECTION -->
            <${Booking} />

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
