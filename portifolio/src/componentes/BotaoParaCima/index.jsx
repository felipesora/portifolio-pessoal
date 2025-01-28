import React, { useState, useEffect } from 'react';
import './BotaoParaCima.css';

const BotaoParaCima = () => {
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTop(true);
            } else {
                setIsTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`btn_scroll-to-top ${!isTop ? 'show' : ''}`}
        >
            <img src="/imagens/seta-para-cima.png" alt="seta para cima" />
        </button>
    );
};

export default BotaoParaCima;
