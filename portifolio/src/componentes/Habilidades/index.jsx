import { useState, useRef } from 'react';
import CardHabilidade from '../CardHabilidade';
import './Habilidades.css';

const Habilidades = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [dragStartX, setDragStartX] = useState(0);
    const [dragDistance, setDragDistance] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef();

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

    const handleDragStart = (e) => {
        e.preventDefault();  // Previne o comportamento padrão de seleção de texto/imagens.
        setIsDragging(true);
        setDragStartX(e.touches ? e.touches[0].clientX : e.clientX);
        containerRef.current.style.userSelect = "none";  // Desabilita seleção de texto durante o arraste.
    };

    const handleDragMove = (e) => {
        if (!isDragging) return;
        const currentX = e.touches ? e.touches[0].clientX : e.clientX;
        setDragDistance(currentX - dragStartX);
    };

    const handleDragEnd = () => {
        setIsDragging(false);
        if (dragDistance > 100) {
            prevSlide();
        } else if (dragDistance < -100) {
            nextSlide();
        }
        setDragDistance(0);
        containerRef.current.style.userSelect = "auto";  // Restaura a seleção de texto após o arraste.
    };

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

    const getTransformStyle = () => {
        if (!containerRef.current) return { transform: 'translate3d(0, 0, 0)' };

        const translateX = -currentIndex * 100 + (dragDistance / containerRef.current.offsetWidth) * 100;
        return { transform: `translate3d(${translateX}%, 0, 0)` };
    };

    return (
        <div id='habilidades'>
            <div className='container_habilidades'>
                <h2>HABILIDADES</h2>
                <p className='textos'>
                    Nesta seção, apresento as principais tecnologias e ferramentas com as quais trabalho. Cada habilidade é exibida com meu nível de experiência, refletindo meu conhecimento e prática em cada uma delas. Desde linguagens de programação até frameworks modernos, estou sempre aprendendo e me atualizando para entregar as melhores soluções.
                </p>
            </div>
            <div
                className='carousel'
                ref={containerRef}
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
            >
                <div className="carousel-content" style={getTransformStyle()}>
                    {habilidades.map((habilidade, index) => (
                        <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : 'hidden'}`}>
                            <CardHabilidade
                                iconeHabilidade={habilidade.iconeHabilidade}
                                nomeHabilidade={habilidade.nomeHabilidade}
                                barraHabilidade={habilidade.barraHabilidade}
                                nivelHabilidade={habilidade.nivelHabilidade}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="carousel-indicators">
                {habilidades.map((_, index) => (
                    <div
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active-indicator' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Habilidades;
