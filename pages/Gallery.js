import React from 'react';
import htm from 'htm';

const html = htm.bind(React.createElement);

const Gallery = () => {
    const images = [
        { src: 'assets/nails-1.png', category: 'Premium', title: 'Minimalismo' },
        { src: 'assets/nails-1.png', category: 'Arte', title: 'Francêsa Moderna' },
        { src: 'assets/nails-1.png', category: 'Gel', title: 'Brilho Vitrificado' },
        { src: 'assets/hero-bg.png', category: 'Studio', title: 'Nosso Refúgio' },
        { src: 'assets/nails-1.png', category: 'Design', title: 'Formato Amendoado' },
        { src: 'assets/nails-1.png', category: 'Nude', title: 'Elegância Suave' }
    ];

    return html`
        <div class="pt-32 pb-24 px-6 fade-in bg-bloom-offWhite min-h-screen">
            <div class="max-w-6xl mx-auto">
                <div class="text-center mb-24">
                    <span class="font-sans text-xs uppercase tracking-[0.4em] text-bloom-purple font-bold">Inspiration Grid</span>
                    <h2 class="text-6xl font-serif mt-4 text-bloom-graphite">Trabalhos & Estúdio</h2>
                </div>

                <div class="columns-1 md:columns-2 lg:columns-3 gap-10 space-y-10">
                    ${images.map((img, idx) => html`
                        <div key=${idx} class="break-inside-avoid group relative overflow-hidden rounded-bloom shadow-bloom cursor-pointer bg-white">
                            <img 
                                src=${img.src} 
                                alt=${img.title} 
                                class="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110" 
                            />
                            <div class="absolute inset-0 bg-bloom-purple/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center text-center p-8 backdrop-blur-sm">
                                <div>
                                    <span class="text-[10px] uppercase tracking-[0.3em] text-white/80 mb-3 block font-bold">${img.category}</span>
                                    <h4 class="text-white font-serif text-3xl mb-4">${img.title}</h4>
                                    <div class="w-10 h-1 bg-white mx-auto rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    `)}
                </div>

                <div class="mt-24 text-center p-16 bg-white rounded-bloom shadow-bloom border border-bloom-gray/20">
                    <p class="text-bloom-graphite/40 text-xs uppercase tracking-[0.4em] mb-8 font-bold">Acompanhe nossa arte diariamente</p>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" class="inline-flex items-center gap-4 bg-bloom-graphite text-white px-8 py-4 rounded-full font-bold hover:bg-bloom-purple transition-all shadow-xl group">
                        <i data-lucide="instagram" class="w-5 h-5 group-hover:rotate-12 transition-transform"></i>
                        <span>@bloomstudionails</span>
                    </a>
                </div>
            </div>
        </div>
    `;
};

export default Gallery;
