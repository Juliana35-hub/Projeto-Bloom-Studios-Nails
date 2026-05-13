import React, { useEffect, useState } from 'react';
import htm from 'htm';

const html = htm.bind(React.createElement);

const Intro = ({ onComplete }) => {
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsExiting(true);
        }, 3200); // Start dissolve at 3.2s

        const endTimer = setTimeout(() => {
            if (onComplete) onComplete();
        }, 4000); // Complete by 4s

        return () => {
            clearTimeout(timer);
            clearTimeout(endTimer);
        };
    }, [onComplete]);

    return html`
        <div class="intro-container ${isExiting ? 'intro-exit' : ''}">
            <div class="intro-glow"></div>
            <div class="intro-logo">Bloom</div>
            <div class="intro-tagline">Elegância em cada detalhe</div>
        </div>
    `;
};

export default Intro;
