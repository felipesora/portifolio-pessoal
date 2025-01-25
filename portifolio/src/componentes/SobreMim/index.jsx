import './SobreMim.css'

const SobreMim = () => {
    return (
        <div id='sobre_mim'>
            <h2>SOBRE MIM</h2>
            <img src="/imagens/foto-perfil-cortada.png" alt="foto Felipe Sora" />
            <p>Olá! Sou Felipe Sora, estudante de Análise e Desenvolvimento de Sistemas (ADS), apaixonado por desenvolvimento de software. Atualmente, estou me especializando em Front-End, JavaScript e Python, explorando diferentes linguagens de programação para construir soluções criativas e eficientes. Meu objetivo é me tornar um profissional capacitado e inovador na área, sempre em busca de aprimorar minhas habilidades e contribuir com projetos desafiadores. Estou constantemente aprendendo e evoluindo para entregar o melhor em cada trabalho que realizo.</p>
            <div>
                <button className='btn_fale_comigo'>FALE COMIGO</button>
                <button className='btn_baixar_cv'>BAIXAR MEU CV</button>
            </div>
        </div>
    )
}

export default SobreMim