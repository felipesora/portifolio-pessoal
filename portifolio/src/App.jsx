import './App.css'
import Cabecalho from './componentes/Cabecalho'
import SobreMim from './componentes/SobreMim'

function App() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth'})
    }
  };

  return (
    <main>
        <Cabecalho scrollSobreMim={() => scrollToSection('sobre_mim')}/>
        <SobreMim />
    </main>
  )

}

export default App
