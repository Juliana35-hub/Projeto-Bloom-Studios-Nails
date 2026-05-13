import React, { useState } from 'react';
import htm from 'htm';
import { supabase } from '../lib/supabase.js';

const html = htm.bind(React.createElement);

const Login = ({ onToggleAuth, userType, onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error;
            
            console.log("Login realizado com sucesso:", data);
            onLogin(); // Redireciona para o site completo (flow: 'main')
        } catch (err) {
            console.error("Erro no login:", err.message);
            setError("E-mail ou senha incorretos.");
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
                    <h1 class="text-6xl font-serif mb-6 leading-tight">Sua essência, <br/>nossa arte.</h1>
                    <p class="text-sm uppercase tracking-[0.3em] font-light opacity-80">Excelência em cada detalhe</p>
                </div>
            </div>

            <!-- Right Side: Form -->
            <div class="flex-1 flex items-center justify-center p-8 md:p-20 bg-bloom-offWhite">
                <div class="max-w-md w-full">
                    <div class="mb-12">
                        <span class="text-xs uppercase tracking-[0.4em] text-bloom-purple font-bold">Acesso ${userType === 'admin' ? 'Administrativo' : 'Cliente'}</span>
                        <h2 class="text-5xl font-serif text-bloom-graphite mt-4">Bem-vinda de volta</h2>
                        <p class="text-bloom-graphite/50 mt-4 text-sm">Insira suas credenciais para acessar sua conta.</p>
                    </div>

                    <form class="space-y-6" onSubmit=${handleLogin}>
                        ${error && html`<div class="bg-red-50 text-red-500 text-xs p-4 rounded-xl font-bold uppercase tracking-widest">${error}</div>`}
                        
                        <div class="space-y-2">
                            <label class="text-[10px] uppercase tracking-widest font-bold text-bloom-purple ml-2">E-mail</label>
                            <input 
                                type="email" 
                                required
                                value=${email}
                                onChange=${e => setEmail(e.target.value)}
                                placeholder="exemplo@email.com" 
                                class="w-full p-5 rounded-bloom bg-white border border-transparent focus:border-bloom-lilac outline-none transition-all shadow-sm font-sans"
                            />
                        </div>

                        <div class="space-y-2">
                            <div class="flex justify-between items-center px-2">
                                <label class="text-[10px] uppercase tracking-widest font-bold text-bloom-purple">Senha</label>
                                <a href="#" class="text-[10px] uppercase tracking-widest font-bold text-bloom-graphite/40 hover:text-bloom-purple transition-colors">Esqueci a senha</a>
                            </div>
                            <input 
                                type="password" 
                                required
                                value=${password}
                                onChange=${e => setPassword(e.target.value)}
                                placeholder="••••••••" 
                                class="w-full p-5 rounded-bloom bg-white border border-transparent focus:border-bloom-lilac outline-none transition-all shadow-sm font-sans"
                            />
                        </div>

                        <button 
                            type="submit"
                            disabled=${loading}
                            class="w-full py-5 bg-bloom-purple text-white rounded-bloom font-bold uppercase tracking-widest text-xs shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 mt-4 disabled:opacity-50"
                        >
                            ${loading ? 'Entrando...' : 'Entrar na plataforma'}
                        </button>

                        <div class="pt-8 text-center">
                            <p class="text-sm text-bloom-graphite/40">
                                Não tem uma conta? 
                                <button type="button" onClick=${onToggleAuth} class="ml-2 text-bloom-purple font-bold hover:underline">Criar agora</button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;
};

export default Login;
