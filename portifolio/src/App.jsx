import './App.css'
import Cabecalho from './componentes/Cabecalho'
import Certificados from './componentes/Certificados';
import Contato from './componentes/Contato';
import Habilidades from './componentes/Habilidades';
import Projetos from './componentes/Projetos';
import Rodape from './componentes/Rodape';
import SobreMim from './componentes/SobreMim'

function App() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  };

  return (
    <>
      <Cabecalho 
      scrollSobreMim={() => scrollToSection('sobre_mim')} 
      scrollHabilidades={() => scrollToSection('habilidades')}
      scrollProjetos={() => scrollToSection('projetos')}
      scrollCertificados={() => scrollToSection('certificados')}
      scrollContato={() => scrollToSection('contato')}
      />
      <main>
        <SobreMim scrollContato={() => scrollToSection('contato')}/>
        <Habilidades />
        <Projetos />
        <Certificados />
        <Contato />
        <Rodape />
      </main>

    </>
  )

}

export default App
