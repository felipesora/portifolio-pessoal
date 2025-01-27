import './App.css'
import Cabecalho from './componentes/Cabecalho'
import Habilidades from './componentes/Habilidades';
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
      />
      <main>
        <SobreMim />
        <Habilidades />
      </main>

    </>
  )

}

export default App
