import CardHabilidade from '../CardHabilidade';
import './Habilidades.css'

const Habilidades = () => {
    return (
        <div id='habilidades'>
            <h2>HABILIDADES</h2>
            <p className='textos'>Nesta seção, apresento as principais tecnologias e ferramentas com as quais trabalho. Cada habilidade é exibida com meu nível de experiência, refletindo meu conhecimento e prática em cada uma delas. Desde linguagens de programação até frameworks modernos, estou sempre aprendendo e me atualizando para entregar as melhores soluções.</p>
            <CardHabilidade
            iconeHabilidade={'/imagens/python.png'}
            nomeHabilidade='Python'
            barraHabilidade='/imagens/muito-bom.png'
            nivelHabilidade='muito bom'
            />
            <CardHabilidade
            iconeHabilidade={'/imagens/javascript.png'}
            nomeHabilidade='JavaScript'
            barraHabilidade='/imagens/muito-bom.png'
            nivelHabilidade='muito bom'
            />
            <CardHabilidade
            iconeHabilidade={'/imagens/react.png'}
            nomeHabilidade='React'
            barraHabilidade='/imagens/intermediario.png'
            nivelHabilidade='intermediário'
            />
            <CardHabilidade
            iconeHabilidade={'/imagens/html.png'}
            nomeHabilidade='HTML'
            barraHabilidade='/imagens/avancado.png'
            nivelHabilidade='avançado'
            />
            <CardHabilidade
            iconeHabilidade={'/imagens/css.png'}
            nomeHabilidade='CSS'
            barraHabilidade='/imagens/muito-bom.png'
            nivelHabilidade='muito bom'
            />
        </div>
    )
}

export default Habilidades;