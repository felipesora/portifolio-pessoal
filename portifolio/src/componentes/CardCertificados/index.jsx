import './CardCertificados.css'

const CardCertificados = (props) => {
    return(
        <div className='card_certificado'>
            <h2>{props.nome}</h2>
            <p>Emitido por {props.emitido}</p>
            <a href={props.link} target='_blank'>Ver Certificado</a>
        </div>
    )
}

export default CardCertificados