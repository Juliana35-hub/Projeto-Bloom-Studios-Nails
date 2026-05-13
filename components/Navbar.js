import React from 'react';

const Navbar = ({ currentPath }) => {
    return (
        <nav className="fixed top-0 w-full z-50 glass px-6 py-4 flex justify-between items-center transition-all">
            <div className="flex items-center gap-2">
                <span className="text-2xl font-serif font-bold text-bloom-purple tracking-widest uppercase">Bloom</span>
            </div>
            
            <div className="hidden md:flex gap-8 font-sans text-xs uppercase tracking-[0.2em] font-semibold text-bloom-graphite">
                <a href="#" className={`hover:text-bloom-lilac transition-colors ${currentPath === '' ? 'text-bloom-purple' : ''}`}>Início</a>
                <a href="#servicos" className={`hover:text-bloom-lilac transition-colors ${currentPath === 'servicos' ? 'text-bloom-purple' : ''}`}>Serviços</a>
                <a href="#galeria" className={`hover:text-bloom-lilac transition-colors ${currentPath === 'galeria' ? 'text-bloom-purple' : ''}`}>Galeria</a>
                <a href="#sobre" className={`hover:text-bloom-lilac transition-colors ${currentPath === 'sobre' ? 'text-bloom-purple' : ''}`}>Sobre</a>
                <a href="#contato" className={`hover:text-bloom-lilac transition-colors ${currentPath === 'contato' ? 'text-bloom-purple' : ''}`}>Contato</a>
            </div>

            <div className="flex items-center gap-4">
                <a href="#agendar" className="btn-primary text-xs uppercase tracking-widest shadow-bloom">
                    Agendar Horário
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
