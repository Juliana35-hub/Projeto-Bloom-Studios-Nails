import React, { useEffect } from 'react';
import htm from 'htm';
import { motion, AnimatePresence } from 'framer-motion';

const html = htm.bind(React.createElement);

const Intro = ({ onComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 5000); // 5 segundos de experiência total
        return () => clearTimeout(timer);
    }, [onComplete]);

    return html`
        <${motion.div} 
            initial=${{ opacity: 1 }}
            exit=${{ opacity: 0 }}
            transition=${{ duration: 1.5 }}
            class="intro-container fixed inset-0 z-[100] flex items-center justify-center bg-bloom-offWhite overflow-hidden"
        >
            <!-- Glow Lilás Animado -->
            <${motion.div} 
                initial=${{ scale: 0.8, opacity: 0 }}
                animate=${{ 
                    scale: [0.8, 1.2, 1],
                    opacity: [0, 0.3, 0.2]
                }}
                transition=${{ 
                    duration: 3,
                    ease: "easeOut"
                }}
                class="absolute w-[600px] h-[600px] bg-bloom-lilac blur-[120px] rounded-full"
            />

            <!-- Conteúdo Central -->
            <div class="relative z-10 text-center">
                <!-- Logo Animation -->
                <${motion.div}
                    initial=${{ y: 20, opacity: 0, scale: 0.9 }}
                    animate=${{ y: 0, opacity: 1, scale: 1 }}
                    transition=${{ 
                        duration: 1.5,
                        delay: 0.5,
                        ease: "easeOut"
                    }}
                >
                    <h1 class="text-6xl md:text-8xl font-serif text-bloom-graphite tracking-[0.2em] uppercase font-light">
                        Bloom
                    </h1>
                </${motion.div}>

                <!-- Texto Opcional / Slogan -->
                <${motion.div}
                    initial=${{ opacity: 0 }}
                    animate=${{ opacity: 1 }}
                    transition=${{ 
                        duration: 1,
                        delay: 2
                    }}
                    class="mt-6"
                >
                    <span class="text-[10px] uppercase tracking-[0.5em] text-bloom-purple font-bold">
                        Elegância em cada detalhe
                    </span>
                </${motion.div}>

                <!-- Linha de Brilho -->
                <${motion.div}
                    initial=${{ width: 0, opacity: 0 }}
                    animate=${{ width: "100%", opacity: 0.3 }}
                    transition=${{ duration: 1.5, delay: 2.5 }}
                    class="h-px bg-bloom-purple mt-8 mx-auto max-w-[100px]"
                />
            </div>

            <!-- Overlay de Vinheta Suave -->
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bloom-lilac/5 pointer-events-none"></div>
        </${motion.div}>
    `;
};

export default Intro;
