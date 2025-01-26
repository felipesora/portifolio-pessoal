import { useState } from 'react';
import CardHabilidade from '../CardHabilidade';
import './Habilidades.css'

const Habilidades = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const habilidades = [
        {
            iconeHabilidade: '/imagens/python.png',
            nomeHabilidade: 'Python',
            barraHabilidade: '/imagens/muito-bom.png',
            nivelHabilidade: 'muito bom',
          },
          {
            iconeHabilidade: '/imagens/javascript.png',
            nomeHabilidade: 'JavaScript',
            barraHabilidade: '/imagens/muito-bom.png',
            nivelHabilidade: 'muito bom',
          },
          {
            iconeHabilidade: '/imagens/react.png',
            nomeHabilidade: 'React',
            barraHabilidade: '/imagens/intermediario.png',
            nivelHabilidade: 'intermediário',
          },
          {
            iconeHabilidade: '/imagens/html.png',
            nomeHabilidade: 'HTML',
            barraHabilidade: '/imagens/avancado.png',
            nivelHabilidade: 'avançado',
          },
          {
            iconeHabilidade: '/imagens/css.png',
            nomeHabilidade: 'CSS',
            barraHabilidade: '/imagens/muito-bom.png',
            nivelHabilidade: 'muito bom',
          },
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === habilidades.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? habilidades.length - 1 : prevIndex - 1
        );
    };

    return (
        <div id='habilidades'>
            <h2>HABILIDADES</h2>
            <p className='textos'>Nesta seção, apresento as principais tecnologias e ferramentas com as quais trabalho. Cada habilidade é exibida com meu nível de experiência, refletindo meu conhecimento e prática em cada uma delas. Desde linguagens de programação até frameworks modernos, estou sempre aprendendo e me atualizando para entregar as melhores soluções.</p>
            <div className='carousel'>
                <button className='btn-prev' onClick={prevSlide}>
                    {"<"}
                </button>

                <div className="carousel-content">
                    {habilidades.map((habilidade, index) => (
                       <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : 'hidden'}`}>
                        <CardHabilidade 
                        key={habilidade.nomeHabilidade}
                        iconeHabilidade={habilidade.iconeHabilidade}
                        nomeHabilidade={habilidade.nomeHabilidade}
                        barraHabilidade={habilidade.barraHabilidade}
                        nivelHabilidade={habilidade.nivelHabilidade}
                        />
                       </div> 
                    ))}
                </div>

                <button className='btn-next' onClick={nextSlide}>
                    {">"}
                </button>
            </div>

            <div className="carousel-indicators">
                {habilidades.map((_, index) => (
                    <div key={index} className={`indicator ${index === currentIndex ? 'active-indicator' : ''}`} onClick={() => setCurrentIndex(index)}></div>
                ))}
            </div>
        </div>
    )
}

export default Habilidades;