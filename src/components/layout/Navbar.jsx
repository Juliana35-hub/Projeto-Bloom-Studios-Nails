import React, { useState, useEffect } from 'react';
import Container from './Container';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-lg py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <Container>
        <div className="flex justify-between items-center">
          <div className="font-heading text-3xl tracking-[0.2em] text-bloom-text">BLOOM</div>
          
          <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.3em] font-bold text-bloom-text/60">
            <a href="#home" className="hover:text-bloom-lilac transition-all">Início</a>
            <a href="#about" className="hover:text-bloom-lilac transition-all">Sobre</a>
            <a href="#services" className="hover:text-bloom-lilac transition-all">Serviços</a>
            <a href="#gallery" className="hover:text-bloom-lilac transition-all">Galeria</a>
            <a href="#academy" className="hover:text-bloom-lilac transition-all">Academy</a>
          </div>

          <a 
            href="https://online.maapp.com.br/Lizianesilva" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-bloom-lilac text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-bloom-lilac/20"
          >
            Agendar
          </a>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
