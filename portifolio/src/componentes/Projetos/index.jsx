import CardProjeto from '../CardProjeto'
import './Projetos.css'

const Projetos = () => {
    return (
        <div id='projetos'>
            <h1>PROJETOS</h1>
            <p className='texto_projetos'>Aqui estão alguns dos projetos que desenvolvi. Eles incluem links para os repositórios ou sites, onde você pode conferir mais detalhes sobre as soluções que construí.</p>
            <div className='div_projetos'>
                <CardProjeto 
                imagem={'/imagens/projeto-alura-plus.png'} 
                nome={'AluraPlus'} 
                texto={'O Alura Plus é uma página promocional fictícia, desenvolvida durante um curso da Alura, que apresenta um serviço de assinatura de cursos de tecnologia e idiomas com layout responsivo e design moderno.'} 
                linkGithub={'https://github.com/felipesora/aluraplus.git'} 
                linkProjeto={'https://aluraplus-alpha-rust.vercel.app/'}/>
                <CardProjeto 
                imagem={'/imagens/projeto-smart-energy.png'} 
                nome={'SmartEnergy'} 
                texto={'O SmartEnergy é uma aplicação web desenvolvida com React e Node.js, que consome uma API para monitorar e gerenciar dados de energia de forma inteligente e eficiente.'} 
                linkGithub={'https://github.com/felipesora/SmartEnergy.git'} 
                linkProjeto={'https://smart-energy-three.vercel.app/'}/>
            </div>
            <div className='div_projetos'>
                <CardProjeto 
                imagem={'/imagens/projeto-organo.png'} 
                nome={'Organo'} 
                texto={'O Organo é um projeto que permite criar cards personalizados com nome, cargo, imagem e time de uma pessoa, organizando-os dinamicamente em categorias como programação e front-end.'} 
                linkGithub={'https://github.com/felipesora/Organo'} 
                linkProjeto={'https://organo-lovat-kappa.vercel.app/'}/>
            </div>
        </div>
    )
}

export default Projetos