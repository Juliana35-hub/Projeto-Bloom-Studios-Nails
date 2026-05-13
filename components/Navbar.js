import React from 'react';
import htm from 'htm';

const html = htm.bind(React.createElement);

const Navbar = ({ currentPath }) => {
    return html`
        <nav class="fixed top-0 w-full z-50 glass px-6 py-4 flex justify-between items-center transition-all">
            <div class="flex items-center gap-2">
                <span class="text-2xl font-serif font-bold text-bloom-purple tracking-widest uppercase">Bloom</span>
            </div>
            
            <div class="hidden md:flex gap-8 font-sans text-xs uppercase tracking-[0.2em] font-semibold text-bloom-graphite">
                <a href="#" class="hover:text-bloom-lilac transition-colors ${currentPath === '' ? 'text-bloom-purple' : ''}">Início</a>
                <a href="#servicos" class="hover:text-bloom-lilac transition-colors ${currentPath === 'servicos' ? 'text-bloom-purple' : ''}">Serviços</a>
                <a href="#galeria" class="hover:text-bloom-lilac transition-colors ${currentPath === 'galeria' ? 'text-bloom-purple' : ''}">Galeria</a>
                <a href="#sobre" class="hover:text-bloom-lilac transition-colors ${currentPath === 'sobre' ? 'text-bloom-purple' : ''}">Sobre</a>
            </div>

            <div class="flex items-center gap-4">
                <a href="#agendar" class="bg-bloom-purple text-white px-8 py-3 rounded-full text-[10px] uppercase tracking-widest font-bold shadow-lg hover:scale-105 active:scale-95 transition-all duration-300">
                    Agendar Horário
                </a>
            </div>
        </nav>
    `;
};

export default Navbar;
