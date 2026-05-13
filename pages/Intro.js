import React, { useEffect, useState } from 'react';
import htm from 'htm';

const html = htm.bind(React.createElement);

const Intro = ({ onComplete }) => {
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsExiting(true);
        }, 3500); // Inicia a saída aos 3.5s

        const endTimer = setTimeout(() => {
            onComplete();
        }, 4500); // Finaliza aos 4.5s

        return () => {
            clearTimeout(timer);
            clearTimeout(endTimer);
        };
    }, [onComplete]);

    return html`
        <div class="fixed inset-0 z-[100] flex items-center justify-center bg-bloom-offWhite transition-opacity duration-1000 ${isExiting ? 'opacity-0' : 'opacity-100'}">
            <!-- Glow Lilás (CSS Puro) -->
            <div class="absolute w-[600px] h-[600px] bg-bloom-lilac opacity-20 blur-[120px] rounded-full animate-pulse"></div>

            <!-- Conteúdo Central -->
            <div class="relative z-10 text-center fade-in">
                <h1 class="text-6xl md:text-8xl font-serif text-bloom-graphite tracking-[0.2em] uppercase font-light">
                    Bloom
                </h1>
                <div class="mt-6 opacity-80">
                    <span class="text-[10px] uppercase tracking-[0.5em] text-bloom-purple font-bold">
                        Elegância em cada detalhe
                    </span>
                </div>
                <div class="h-px bg-bloom-purple mt-8 mx-auto w-20 opacity-30"></div>
            </div>
        </div>
    `;
};

export default Intro;
