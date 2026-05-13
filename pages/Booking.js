import React, { useState } from 'react';
import htm from 'htm';

const html = htm.bind(React.createElement);

const Booking = () => {
    const [step, setStep] = useState(1);
    const [bookingData, setBookingData] = useState({
        service: '',
        date: '',
        time: '',
        name: '',
        phone: ''
    });

    const services = [
        "Alongamento em Gel", "Banho em Gel", "Manutenção", "Blindagem", "Nail Art", "Esmaltação em Gel"
    ];

    const times = ["09:00", "10:30", "13:00", "14:30", "16:00", "17:30"];

    const nextStep = () => setStep(s => s + 1);
    const prevStep = () => setStep(s => s - 1);

    const handleSelectService = (s) => {
        setBookingData({...bookingData, service: s});
        nextStep();
    };

    const handleSelectTime = (t) => {
        setBookingData({...bookingData, time: t});
        nextStep();
    };

    return html`
        <div class="pt-32 pb-24 px-6 fade-in bg-bloom-offWhite min-h-screen flex items-center">
            <div class="max-w-4xl mx-auto w-full">
                <div class="text-center mb-16">
                    <span class="font-sans text-xs uppercase tracking-[0.4em] text-bloom-purple font-bold">Agendamento Online</span>
                    <h2 class="text-6xl font-serif mt-4 text-bloom-graphite">Seu Momento Bloom</h2>
                    
                    <div class="flex justify-center items-center gap-4 mt-12">
                        ${[1, 2, 3].map(i => html`
                            <${React.Fragment} key=${i}>
                                <div class="h-2 w-16 rounded-full transition-all duration-700 ${step >= i ? 'bg-bloom-purple' : 'bg-bloom-gray/50'}"></div>
                                ${i < 3 ? html`<div class="w-2 h-2 rounded-full bg-bloom-gray/50"></div>` : ''}
                            </${React.Fragment}>
                        `)}
                    </div>
                </div>

                <div class="bg-white p-10 md:p-16 rounded-[40px] shadow-bloom border border-bloom-gray/10 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-bloom-lilac/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

                    ${step === 1 ? html`
                        <div class="fade-in">
                            <h3 class="text-3xl font-serif mb-10 text-center text-bloom-graphite">Escolha o serviço desejado</h3>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                                ${services.map(s => html`
                                    <button 
                                        key=${s} 
                                        onClick=${() => handleSelectService(s)}
                                        class="p-8 rounded-bloom border-2 border-bloom-offWhite hover:border-bloom-lilac hover:bg-bloom-offWhite/50 transition-all text-left group flex justify-between items-center"
                                    >
                                        <span class="font-sans font-semibold text-bloom-graphite group-hover:text-bloom-purple transition-colors">${s}</span>
                                        <div class="w-8 h-8 rounded-full border border-bloom-gray/30 flex items-center justify-center group-hover:bg-bloom-purple group-hover:border-bloom-purple group-hover:text-white transition-all">
                                            <i data-lucide="chevron-right" class="w-4 h-4"></i>
                                        </div>
                                    </button>
                                `)}
                            </div>
                        </div>
                    ` : ''}

                    ${step === 2 ? html`
                        <div class="fade-in">
                            <button onClick=${prevStep} class="group text-bloom-purple text-xs uppercase tracking-widest font-bold mb-10 flex items-center gap-2 hover:translate-x-[-4px] transition-transform">
                                <i data-lucide="arrow-left" class="w-4 h-4"></i> Voltar
                            </button>
                            <h3 class="text-3xl font-serif mb-10 text-center text-bloom-graphite">Data & Horário</h3>
                            <div class="grid grid-cols-3 md:grid-cols-6 gap-4">
                                ${times.map(t => html`
                                    <button 
                                        key=${t} 
                                        onClick=${() => handleSelectTime(t)}
                                        class="py-5 rounded-bloom border-2 border-bloom-offWhite hover:border-bloom-purple hover:text-bloom-purple hover:bg-bloom-offWhite transition-all font-sans text-sm font-bold text-bloom-graphite/40 shadow-sm"
                                    >
                                        ${t}
                                    </button>
                                `)}
                            </div>
                            <div class="mt-12 p-6 bg-bloom-offWhite rounded-bloom text-center">
                                <p class="text-bloom-purple/60 text-[10px] uppercase tracking-[0.3em] font-bold">Agenda atualizada em tempo real</p>
                            </div>
                        </div>
                    ` : ''}

                    ${step === 3 ? html`
                        <div class="fade-in max-w-md mx-auto text-center">
                            <div class="w-16 h-16 bg-bloom-lilac/20 text-bloom-purple rounded-full flex items-center justify-center mx-auto mb-8">
                                <i data-lucide="user" class="w-8 h-8"></i>
                            </div>
                            <h3 class="text-3xl font-serif mb-4 text-bloom-graphite">Seus Dados</h3>
                            <p class="text-bloom-graphite/40 text-sm mb-12">Para confirmarmos sua reserva na Bloom Studio.</p>
                            
                            <div class="space-y-6">
                                <div class="text-left">
                                    <label class="text-[10px] uppercase tracking-widest font-bold text-bloom-purple ml-2 mb-2 block">Nome Completo</label>
                                    <input type="text" placeholder="Ex: Maria Silva" class="w-full p-5 rounded-bloom bg-bloom-offWhite border-2 border-transparent focus:border-bloom-lilac focus:bg-white outline-none transition-all font-sans text-bloom-graphite" />
                                </div>
                                <div class="text-left">
                                    <label class="text-[10px] uppercase tracking-widest font-bold text-bloom-purple ml-2 mb-2 block">WhatsApp</label>
                                    <input type="tel" placeholder="(00) 00000-0000" class="w-full p-5 rounded-bloom bg-bloom-offWhite border-2 border-transparent focus:border-bloom-lilac focus:bg-white outline-none transition-all font-sans text-bloom-graphite" />
                                </div>
                                
                                <button 
                                    onClick=${nextStep}
                                    class="btn-primary w-full py-5 text-lg mt-8 shadow-bloom"
                                >
                                    Confirmar Agendamento
                                </button>
                            </div>
                        </div>
                    ` : ''}

                    ${step === 4 ? html`
                        <div class="fade-in text-center py-10">
                            <div class="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-10 shadow-lg animate-pulse">
                                <i data-lucide="check-circle" class="w-12 h-12"></i>
                            </div>
                            <h3 class="text-5xl font-serif mb-6 text-bloom-graphite italic">Tudo pronto!</h3>
                            <p class="text-bloom-graphite/50 text-lg mb-12 max-w-sm mx-auto leading-relaxed">
                                Sua reserva para <span class="text-bloom-purple font-bold">${bookingData.service}</span> foi pré-confirmada.
                            </p>
                            <div class="bg-bloom-offWhite p-6 rounded-bloom inline-block mb-12">
                                <p class="text-xs text-bloom-purple font-bold uppercase tracking-widest">Aguarde o contato de confirmação via WhatsApp</p>
                            </div>
                            <br/>
                            <a href="#" class="btn-secondary px-10">Voltar ao Início</a>
                        </div>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
};

export default Booking;
