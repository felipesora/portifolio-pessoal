import './Cabecalho.css'

const Cabecalho = () => {

    return (
        <header className='cabecalho'>
            <div className='cabecalho_botoes'>
                <button>Sobre mim</button>
                <button>Habilidades</button>
                <button>Projetos</button>
                <button>Certificados</button>
                <button>Fale comigo</button>
            </div>
            <div className='boas_vindas'>
                <h3>OLÁ, SEJA BEM VINDO!</h3>
                <h1>Eu sou Felipe Sora</h1>
                <h2>Engenheiro de Software | Desenvolvedor Web | Estudante de ADS</h2>
                <button className='botao_sobre_mim'>SOBRE MIM <img src="/imagens/seta-baixo-branca-32px.png" alt="Seta para baixo" /></button>
            </div>
        </header>
    )
}

export default Cabecalho