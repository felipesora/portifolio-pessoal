import CardCertificados from '../CardCertificados'
import './Certificados.css'

const Certificados = () => {
    return(
        <div id='certificados'>
            <h1>CERTIFICADOS</h1>
            <p className='texto_certificados'>Aqui estão alguns dos certificados que conquistei ao longo da minha jornada de aprendizado.</p>
            <div className='div_certificados'>
                <CardCertificados />
                <CardCertificados />
                <CardCertificados />
            </div>
        </div>
    )
}

export default Certificados