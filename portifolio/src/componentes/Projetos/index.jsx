import CardProjeto from '../CardProjeto'
import './Projetos.css'

const Projetos = () => {
    return (
        <div id='projetos'>
            <h1>PROJETOS</h1>
            <p className='texto_projetos'>Aqui estão alguns dos projetos que desenvolvi. Eles incluem links para os repositórios ou sites, onde você pode conferir mais detalhes sobre as soluções que construí.</p>
            <div>
                <CardProjeto />
            </div>
        </div>
    )
}

export default Projetos