import './Cabecalho.css'

const Cabecalho = () => {
    return (
        <header className='cabecalho'>
            <div>
                <h3>OLÁ, SEJA BEM VINDO!</h3>
                <h1>Eu sou Felipe Sora</h1>
                <h2>Engenheiro de Software | Desenvolvedor Web | Estudante de ADS</h2>
                <button>SOBRE MIM <img src="/imagens/seta-baixo-32px.png" alt="Seta para baixo" /></button>
            </div>
        </header>
    )
}

export default Cabecalho