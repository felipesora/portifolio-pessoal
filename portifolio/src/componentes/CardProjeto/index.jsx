import './CardProjeto.css'

const CardProjeto = () => {
    return(
        <div className='card_projeto'>
            <img src="../../../public/imagens/projeto-smart-energy.png" alt="" />
            <h2>SmartEnergy</h2>
            <p>Este projeto é uma aplicação web desenvolvida com React e Node.js.</p>
            <h3>Links:</h3>
            <a href="#">Repositório Github</a>
            <a href="#">Link do projeto</a>
        </div>
    )
}

export default CardProjeto