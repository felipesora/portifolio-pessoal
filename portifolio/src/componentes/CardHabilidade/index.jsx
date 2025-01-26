import './CardHabilidade.css'

const CardHabilidade = (props) => {
    return (
        <div className='card_habilidade'>
            <img src={props.iconeHabilidade} alt={props.nomeHabilidade} />
            <h3>{props.nomeHabilidade}</h3>
            <img src={props.barraHabilidade} alt={props.nivelHabilidade} className='img_nivel_habilidade'/>
            <p>{props.nivelHabilidade}</p>
        </div>
    )
}

export default CardHabilidade