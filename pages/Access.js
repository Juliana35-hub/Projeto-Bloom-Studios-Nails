import React from 'react';
import htm from 'htm';
import { motion } from 'framer-motion';

const html = htm.bind(React.createElement);

const Access = ({ onSelect }) => {
    const cards = [
        { 
            id: 'client', 
            title: 'Cliente', 
            icon: 'sparkles', 
            desc: 'Desejo agendar um horário e ver meus cuidados.' 
        },
        { 
            id: 'admin', 
            title: 'Administradora', 
            icon: 'crown', 
            desc: 'Acesso restrito para gestão e controle do estúdio.' 
        }
    ];

    return html`
        <div class="min-h-screen bg-bloom-offWhite flex items-center justify-center p-6 relative overflow-hidden">
            <!-- Fundo Decorativo -->
            <div class="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-bloom-lilac/10 blur-[100px] rounded-full"></div>
            <div class="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-bloom-purple/10 blur-[100px] rounded-full"></div>

            <div class="max-w-4xl w-full relative z-10">
                <${motion.div} 
                    initial=${{ opacity: 0, y: -20 }}
                    animate=${{ opacity: 1, y: 0 }}
                    class="text-center mb-16"
                >
                    <span class="text-[10px] uppercase tracking-[0.4em] text-bloom-purple font-bold">Bem-vinda à Bloom</span>
                    <h2 class="text-5xl font-serif text-bloom-graphite mt-4">Como deseja entrar?</h2>
                </${motion.div}>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    ${cards.map((card, index) => html`
                        <${motion.div}
                            key=${card.id}
                            initial=${{ opacity: 0, x: index === 0 ? -30 : 30 }}
                            animate=${{ opacity: 1, x: 0 }}
                            transition=${{ delay: 0.5 + (index * 0.2) }}
                            whileHover=${{ y: -10 }}
                            onClick=${() => onSelect(card.id)}
                            class="group cursor-pointer"
                        >
                            <div class="bg-white/40 backdrop-blur-xl border border-white/40 p-12 rounded-[40px] shadow-bloom transition-all duration-500 group-hover:bg-white group-hover:shadow-2xl text-center h-full flex flex-col items-center justify-center">
                                <div class="w-20 h-20 bg-bloom-lilac/20 text-bloom-purple rounded-full flex items-center justify-center mb-8 transition-colors group-hover:bg-bloom-purple group-hover:text-white">
                                    <i data-lucide=${card.icon} class="w-10 h-10"></i>
                                </div>
                                <h3 class="text-3xl font-serif mb-4 text-bloom-graphite">${card.title}</h3>
                                <p class="text-bloom-graphite/50 text-sm leading-relaxed max-w-[200px]">
                                    ${card.desc}
                                </p>
                                <div class="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <span class="text-[10px] uppercase tracking-widest font-bold text-bloom-purple">Entrar agora</span>
                                </div>
                            </div>
                        </${motion.div}>
                    `)}
                </div>

                <${motion.div} 
                    initial=${{ opacity: 0 }}
                    animate=${{ opacity: 1 }}
                    transition=${{ delay: 1.5 }}
                    class="mt-20 text-center"
                >
                    <p class="text-[9px] uppercase tracking-[0.3em] text-bloom-graphite/30 font-bold">
                        Experiência exclusiva Bloom Studio Nails
                    </p>
                </${motion.div}>
            </div>
        </div>
    `;
};

export default Access;
