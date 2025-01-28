import './SobreMim.css'

const SobreMim = (props) => {
    return (
        <div id='sobre_mim'>
            <h2>SOBRE MIM</h2>
            <img src="/imagens/foto-perfil-cortada.png" alt="foto Felipe Sora" />
            <p>Olá! Sou Felipe Sora, estudante de Análise e Desenvolvimento de Sistemas (ADS), apaixonado por desenvolvimento de software. Atualmente, estou me especializando em Front-End, JavaScript e Python, explorando diferentes linguagens de programação para construir soluções criativas e eficientes. Meu objetivo é me tornar um profissional capacitado e inovador na área, sempre em busca de aprimorar minhas habilidades e contribuir com projetos desafiadores. Estou constantemente aprendendo e evoluindo para entregar o melhor em cada trabalho que realizo.</p>
            <div>
                <button className='btn_fale_comigo' onClick={props.scrollContato}>FALE COMIGO</button>
                <a href="https://drive.google.com/file/d/1Ui7h03tGsRqWT680fyeIUvKm8TlAwQ91/view?usp=drive_link" className='btn_baixar_cv' target='_blank'>BAIXAR MEU CV</a>
            </div>
        </div>
    )
}

export default SobreMim