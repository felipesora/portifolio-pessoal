import './CardProjeto.css'

const CardProjeto = (props) => {
    return(
        <div className='card_projeto'>
            <img src={props.imagem} alt={props.nome} />
            <h2>{props.nome}</h2>
            <p>{props.texto}</p>
            <ul>
                <a href={props.linkGithub} target='_blank'>Repositório Github</a>
                <a href={props.linkProjeto} target='_blank'>Link do projeto</a>
            </ul>
        </div>
    )
}

export default CardProjeto