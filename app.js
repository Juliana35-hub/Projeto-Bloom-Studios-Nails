import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import htm from 'htm';

// Pages
import Home from './pages/Home.js';
import Services from './pages/Services.js';
import Gallery from './pages/Gallery.js';
import About from './pages/About.js';
import Booking from './pages/Booking.js';
import Intro from './pages/Intro.js';
import Access from './pages/Access.js';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';

// Components
import Navbar from './components/Navbar.js';
import WhatsAppButton from './components/WhatsAppButton.js';

const html = htm.bind(React.createElement);

const Footer = () => html`
    <footer class="bg-bloom-graphite text-white py-20 px-6">
        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
            <div class="md:col-span-2">
                <h3 class="font-serif text-3xl mb-6 tracking-widest uppercase">Bloom Studio</h3>
                <p class="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
                    Elevando o conceito de nail design a uma forma de arte. Excelência, sofisticação e cuidado em cada detalhe para realçar sua essência única.
                </p>
            </div>
            <div>
                <h4 class="font-sans font-bold text-[10px] uppercase tracking-[0.3em] text-bloom-lilac mb-6">Explorar</h4>
                <ul class="text-gray-400 text-sm space-y-4 font-medium">
                    <li><a href="#" class="hover:text-white transition-colors">Início</a></li>
                    <li><a href="#servicos" class="hover:text-white transition-colors">Serviços</a></li>
                    <li><a href="#galeria" class="hover:text-white transition-colors">Galeria</a></li>
                </ul>
            </div>
            <div>
                <h4 class="font-sans font-bold text-[10px] uppercase tracking-[0.3em] text-bloom-lilac mb-6">Social</h4>
                <div class="flex gap-4 justify-center md:justify-start">
                    <a href="#" class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-bloom-graphite transition-all">
                        <i data-lucide="instagram" class="w-5 h-5"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
`;

const App = () => {
    const [flow, setFlow] = useState('intro'); // intro, access, login, signup, main
    const [path, setPath] = useState(window.location.hash.replace('#', ''));
    const [userType, setUserType] = useState(null);

    useEffect(() => {
        const handleHashChange = () => {
            setPath(window.location.hash.replace('#', ''));
            window.scrollTo(0, 0);
            setTimeout(() => {
                if (window.lucide) window.lucide.createIcons();
            }, 100);
        };
        window.addEventListener('hashchange', handleHashChange);
        if (window.lucide) window.lucide.createIcons();
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const renderContent = () => {
        if (flow === 'intro') {
            return html`<${Intro} onComplete=${() => setFlow('access')} />`;
        }
        
        if (flow === 'access') {
            return html`<${Access} onSelect=${(type) => {
                setUserType(type);
                setFlow('login');
            }} />`;
        }

        if (flow === 'login') {
            return html`<${Login} 
                userType=${userType} 
                onToggleAuth=${() => setFlow('signup')} 
                onLogin=${() => setFlow('main')}
            />`;
        }

        if (flow === 'signup') {
            return html`<${Signup} 
                onToggleAuth=${() => setFlow('login')} 
            />`;
        }

        // Main App Content
        switch (path) {
            case 'servicos': return html`<${Services} />`;
            case 'galeria': return html`<${Gallery} />`;
            case 'sobre': return html`<${About} />`;
            case 'agendar': return html`<${Booking} />`;
            default: return html`<${Home} />`;
        }
    };

    if (flow !== 'main') {
        return renderContent();
    }

    return html`
        <div class="min-h-screen flex flex-col">
            <${Navbar} currentPath=${path} />
            <main class="flex-grow">
                ${renderContent()}
            </main>
            <${Footer} />
            <${WhatsAppButton} />
        </div>
    `;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(html`<${App} />`);
