import './CardProjeto.css'

const CardProjeto = () => {
    return(
        <div className='card_projeto'>
            <img src="../../../public/imagens/projeto-alura-plus.png" alt="" />
            <h2>SmartEnergy</h2>
            <p>Este projeto é uma aplicação web desenvolvida com React e Node.js.</p>
            <ul>
                <a href="#">Repositório Github</a>
                <a href="#">Link do projeto</a>
            </ul>
        </div>
    )
}

export default CardProjeto