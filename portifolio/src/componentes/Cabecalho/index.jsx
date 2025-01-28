import './Cabecalho.css'

const Cabecalho = (props) => {

    return (
        <header id='cabecalho'>
            <div className='cabecalho_botoes'>
                <button onClick={props.scrollSobreMim}>Sobre mim</button>
                <button onClick={props.scrollHabilidades}>Habilidades</button>
                <button onClick={props.scrollProjetos}>Projetos</button>
                <button onClick={props.scrollCertificados}>Certificados</button>
                <button>Fale comigo</button>
            </div>
            <div className='boas_vindas'>
                <h3>OLÁ, SEJA BEM VINDO!</h3>
                <h1>Eu sou Felipe Sora</h1>
                <h2>Engenheiro de Software | Desenvolvedor Web | Estudante de ADS</h2>
                <button className='botao_sobre_mim' onClick={props.scrollSobreMim}>SOBRE MIM <img src="/imagens/seta-baixo-branca-32px.png" alt="Seta para baixo" /></button>
            </div>
        </header>
    )
}

export default Cabecalho