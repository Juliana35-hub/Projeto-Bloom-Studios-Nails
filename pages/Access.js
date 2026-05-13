import React from 'react';
import htm from 'htm';

const html = htm.bind(React.createElement);

const AccessCard = ({ title, description, icon, onClick, variant = "primary" }) => {
    return html`
        <div 
            onClick=${onClick}
            class="group relative overflow-hidden bg-white/40 backdrop-blur-xl border border-white/20 p-10 rounded-[40px] shadow-bloom cursor-pointer transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:bg-white/60"
        >
            <div class="absolute top-0 right-0 w-32 h-32 bg-bloom-lilac/10 rounded-full -translate-y-1/2 translate-x-1/2 transition-transform duration-700 group-hover:scale-150"></div>
            
            <div class="relative z-10">
                <div class="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-bloom-purple mb-8 group-hover:bg-bloom-purple group-hover:text-white transition-all duration-500">
                    <i data-lucide="${icon}" class="w-8 h-8"></i>
                </div>
                
                <h3 class="text-3xl font-serif text-bloom-graphite mb-4">${title}</h3>
                <p class="text-bloom-graphite/50 text-sm leading-relaxed">${description}</p>
                
                <div class="mt-8 flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-bloom-purple opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                    Acessar agora <i data-lucide="arrow-right" class="w-3 h-3"></i>
                </div>
            </div>
        </div>
    `;
};

const Access = ({ onSelect }) => {
    return html`
        <div class="min-h-screen bg-bloom-offWhite flex items-center justify-center px-6 py-20 relative overflow-hidden">
            <!-- Decorative Blobs -->
            <div class="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-bloom-lilac/20 blur-[100px] rounded-full animate-pulse"></div>
            <div class="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-bloom-purple/10 blur-[80px] rounded-full"></div>

            <div class="max-w-5xl w-full relative z-10">
                <div class="text-center mb-16 md:mb-24">
                    <span class="text-[10px] uppercase tracking-[0.4em] text-bloom-purple font-bold">Bem-vinda ao Bloom Studio</span>
                    <h2 class="text-5xl md:text-6xl font-serif text-bloom-graphite mt-6">Como deseja entrar?</h2>
                    <div class="w-20 h-1 bg-bloom-lilac/30 mx-auto mt-8 rounded-full"></div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <${AccessCard} 
                        title="Sou Cliente" 
                        description="Agende seus horários, veja a galeria e receba mimos exclusivos."
                        icon="user"
                        onClick=${() => onSelect('client')}
                    />
                    <${AccessCard} 
                        title="Administradora" 
                        description="Gerencie a agenda, serviços e acompanhe o crescimento do estúdio."
                        icon="shield"
                        onClick=${() => onSelect('admin')}
                    />
                </div>
                
                <div class="mt-20 text-center">
                    <p class="text-[9px] uppercase tracking-[0.3em] text-bloom-graphite/40 font-bold">Bloom Studio Nails © 2026</p>
                </div>
            </div>
        </div>
    `;
};

export default Access;
