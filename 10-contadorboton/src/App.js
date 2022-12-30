import { useState } from 'react';
import Boton from './components/Boton';
import Contador from './components/Contador';
import logoSitio from './images/logo.png';
import './App.css';
import './styles/Boton.css'

function App() {

  const [valor, setValor] = useState(0);

  const hacerClic = () => {
    setValor(valor + 1);
  }

  const reiniciarContador = () => {
    setValor(0)
  }

  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img 
          className='logo'
          src={logoSitio}
          alt='Logo Sitio'
        />        
      </div>
      <div className='principal-contenedor'>
        <Contador 
          numClics={valor}
          />
        <Boton 
          texto='Clic'
          esBotonClic={true}
          manejarClic={hacerClic}
        />
        <Boton 
          texto='Reiniciar'
          esBotonClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
