import CardCertificados from '../CardCertificados'
import './Certificados.css'

const Certificados = () => {
    return(
        <div id='certificados'>
            <div className='container_certificados'>
                <h1>CERTIFICADOS</h1>
                <p className='texto_certificados'>Aqui estão alguns dos certificados que conquistei ao longo da minha jornada de aprendizado.</p>
            </div>
            <div className='container_div_certificados'>
                <div className='div_certificados'>
                    <CardCertificados
                    nome="1º Semestre - ADS"
                    emitido="FIAP"
                    link="https://drive.google.com/file/d/1S0g3B-6sDz3qvZ0oY8GXWHrM-6k4rMlV/view?usp=drive_link"/>
                    <CardCertificados
                    nome="2º Semestre - ADS"
                    emitido="FIAP"
                    link="https://drive.google.com/file/d/1cKg-DlGyqIoCdPVjJh_XwNo5FJjUGp6u/view?usp=drive_link"/>
                    <CardCertificados
                    nome="Curso de React.js"
                    emitido="Alura"
                    link="https://drive.google.com/file/d/12UN1f4FEZ7KfeX7Bk_lizvn3IhURnMyA/view?usp=drive_link"/>
                </div>
                <div className='div_certificados div_certificados_2'>
                    <CardCertificados
                    nome="Curso de Python"
                    emitido="Alura"
                    link="https://drive.google.com/file/d/1VMbs_uCbJZWuzHfujvUKeoq2PFmkBNGc/view?usp=drive_link"/>
                    <CardCertificados
                    nome="Curso de JavaScript"
                    emitido="Alura"
                    link="https://drive.google.com/file/d/1lGy1zl0mBNm_KLjEeBpP38GdV5510Agz/view?usp=drive_link"/>
                    <CardCertificados
                    nome="Curso de HTML/CSS"
                    emitido="Alura"
                    link="https://drive.google.com/file/d/1uCBENmmdHyfYpZZk-NBRPZxrEL_JXf4-/view?usp=drive_link"/>
                </div>
            </div>
        </div>
    )
}

export default Certificados