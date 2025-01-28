import { useEffect, useState } from 'react'
import './BotaoParaCima.css'

const BotaoParaCima = () => {

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    };

    return(
        <button 
        onClick={scrollToTop}
        className="btn_scroll-to-top">
            <img src="/imagens/seta-para-cima.png" alt="seta para cima" />
        </button>
    )
}

export default BotaoParaCima