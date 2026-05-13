import React, { useState } from 'react';
import htm from 'htm';
import { supabase } from '../lib/supabase.js';

const html = htm.bind(React.createElement);

const Signup = ({ onToggleAuth, onSignupSuccess }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSignup = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
            });

            if (error) throw error;

            if (data.user) {
                // Salva o perfil na tabela 'profiles'
                const { error: profileError } = await supabase
                    .from('profiles')
                    .insert([
                        { 
                            id: data.user.id, 
                            full_name: name, 
                            whatsapp: phone,
                            email: email
                        }
                    ]);
                
                if (profileError) console.error("Erro ao salvar perfil:", profileError.message);
            }
            
            alert("Cadastro realizado com sucesso! Agora você pode fazer o login.");
            onToggleAuth(); // Volta para a tela de Login
        } catch (err) {
            console.error("Erro no cadastro:", err.message);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

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

                    <form class="space-y-4" onSubmit=${handleSignup}>
                        ${error && html`<div class="bg-red-50 text-red-500 text-xs p-4 rounded-xl font-bold uppercase tracking-widest">${error}</div>`}
                        
                        <div class="space-y-1">
                            <label class="text-[10px] uppercase tracking-widest font-bold text-bloom-purple ml-2">Nome Completo</label>
                            <input 
                                type="text" 
                                required
                                value=${name}
                                onChange=${e => setName(e.target.value)}
                                placeholder="Maria Silva" 
                                class="w-full p-4 rounded-bloom bg-white border border-transparent focus:border-bloom-lilac outline-none transition-all shadow-sm font-sans"
                            />
                        </div>

                        <div class="space-y-1">
                            <label class="text-[10px] uppercase tracking-widest font-bold text-bloom-purple ml-2">WhatsApp</label>
                            <input 
                                type="tel" 
                                required
                                value=${phone}
                                onChange=${e => setPhone(e.target.value)}
                                placeholder="(00) 00000-0000" 
                                class="w-full p-4 rounded-bloom bg-white border border-transparent focus:border-bloom-lilac outline-none transition-all shadow-sm font-sans"
                            />
                        </div>

                        <div class="space-y-1">
                            <label class="text-[10px] uppercase tracking-widest font-bold text-bloom-purple ml-2">E-mail</label>
                            <input 
                                type="email" 
                                required
                                value=${email}
                                onChange=${e => setEmail(e.target.value)}
                                placeholder="exemplo@email.com" 
                                class="w-full p-4 rounded-bloom bg-white border border-transparent focus:border-bloom-lilac outline-none transition-all shadow-sm font-sans"
                            />
                        </div>

                        <div class="space-y-1">
                            <label class="text-[10px] uppercase tracking-widest font-bold text-bloom-purple ml-2">Senha</label>
                            <input 
                                type="password" 
                                required
                                value=${password}
                                onChange=${e => setPassword(e.target.value)}
                                placeholder="••••••••" 
                                class="w-full p-4 rounded-bloom bg-white border border-transparent focus:border-bloom-lilac outline-none transition-all shadow-sm font-sans"
                            />
                        </div>

                        <button 
                            type="submit"
                            disabled=${loading}
                            class="w-full py-5 bg-bloom-purple text-white rounded-bloom font-bold uppercase tracking-widest text-xs shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 mt-4 disabled:opacity-50"
                        >
                            ${loading ? 'Criando conta...' : 'Criar minha conta'}
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
