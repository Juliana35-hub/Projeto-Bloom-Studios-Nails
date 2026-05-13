import React from 'react';
import htm from 'htm';

const html = htm.bind(React.createElement);

const WhatsAppButton = () => {
    const phoneNumber = "5500000000000"; // Placeholder, user can change
    const message = encodeURIComponent("Oi! Vim pelo site e gostaria de agendar um horário na Bloom Studio Nails. ✨");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return html`
        <a 
            href=${whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
            title="Fale Conosco"
        >
            <i data-lucide="message-circle" class="w-6 h-6"></i>
            <span class="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-sans text-sm font-bold uppercase tracking-widest whitespace-nowrap">
                WhatsApp
            </span>
        </a>
    `;
};

export default WhatsAppButton;
