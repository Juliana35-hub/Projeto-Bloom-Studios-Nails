import React, { useState } from 'react';
import htm from 'htm';

const html = htm.bind(React.createElement);

const Signup = ({ onToggleAuth }) => {
    return html`
        <div class="min-h-screen bg-white flex flex-col md:flex-row overflow-hidden">
            <!-- Left Side: Image -->
            <div class="hidden md:block md:w-1/2 relative">
                <img src="assets/hero-bg.png" alt="Bloom Studio" class="absolute inset-0 w-full h-full object-cover" />
                <div class="absolute inset-0 bg-bloom-purple/20 backdrop-blur-[2px]"></div>
                <div class="absolute inset-0 flex flex-col justify-end p-20 text-white">
                    <h1 class="text-6xl font-serif mb-6 leading-tight">Comece sua <br/>jornada Bloom.</h1>
                    <p class="text-sm uppercase tracking-[0.3em] font-light opacity-80">Beleza, Arte e Sofisticação</p>
                </div>
            </div>

            <!-- Right Side: Form -->
            <div class="flex-1 flex items-center justify-center p-8 md:p-20 bg-bloom-offWhite">
                <div class="max-w-md w-full">
                    <div class="mb-10">
                        <span class="text-xs uppercase tracking-[0.4em] text-bloom-purple font-bold">Criar Conta</span>
                        <h2 class="text-5xl font-serif text-bloom-graphite mt-4">Seja bem-vinda</h2>
                        <p class="text-bloom-graphite/50 mt-4 text-sm">Preencha seus dados para começar.</p>
                    </div>

                    <form class="space-y-4">
                        <div class="space-y-1">
                            <label class="text-[10px] uppercase tracking-widest font-bold text-bloom-purple ml-2">Nome Completo</label>
                            <input 
                                type="text" 
                                placeholder="Maria Silva" 
                                class="w-full p-4 rounded-bloom bg-white border border-transparent focus:border-bloom-lilac outline-none transition-all shadow-sm font-sans"
                            />
                        </div>

                        <div class="space-y-1">
                            <label class="text-[10px] uppercase tracking-widest font-bold text-bloom-purple ml-2">WhatsApp</label>
                            <input 
                                type="tel" 
                                placeholder="(00) 00000-0000" 
                                class="w-full p-4 rounded-bloom bg-white border border-transparent focus:border-bloom-lilac outline-none transition-all shadow-sm font-sans"
                            />
                        </div>

                        <div class="space-y-1">
                            <label class="text-[10px] uppercase tracking-widest font-bold text-bloom-purple ml-2">E-mail</label>
                            <input 
                                type="email" 
                                placeholder="exemplo@email.com" 
                                class="w-full p-4 rounded-bloom bg-white border border-transparent focus:border-bloom-lilac outline-none transition-all shadow-sm font-sans"
                            />
                        </div>

                        <div class="space-y-1">
                            <label class="text-[10px] uppercase tracking-widest font-bold text-bloom-purple ml-2">Senha</label>
                            <input 
                                type="password" 
                                placeholder="••••••••" 
                                class="w-full p-4 rounded-bloom bg-white border border-transparent focus:border-bloom-lilac outline-none transition-all shadow-sm font-sans"
                            />
                        </div>

                        <button 
                            type="button"
                            class="w-full py-5 bg-bloom-purple text-white rounded-bloom font-bold uppercase tracking-widest text-xs shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 mt-4"
                        >
                            Criar minha conta
                        </button>

                        <div class="pt-6 text-center">
                            <p class="text-sm text-bloom-graphite/40">
                                Já tem uma conta? 
                                <button type="button" onClick=${onToggleAuth} class="ml-2 text-bloom-purple font-bold hover:underline">Entrar</button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;
};

export default Signup;
