import React from 'react';
import Boton from './components/Boton';
import Contador from './components/Contador';
import logoSitio from './images/logo.png';
import './App.css';
import './styles/Boton.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      valor: 0
    };
    this.hacerClic = this.hacerClic.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }

  hacerClic() {
    this.setState(
      ({ valor }) => ({ valor: valor + 1 })
    );
  }

  reiniciarContador() {
    this.setState({ valor: 0 });
  }

  render() {
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
            numClics={this.state.valor}
          />
          <Boton 
            texto='Clic'
            esBotonClic={true}
            manejarClic={this.hacerClic}
          />
          <Boton 
            texto='Reiniciar'
            esBotonClic={false}
            manejarClic={this.reiniciarContador}
          />
        </div>
      </div>
    );
  }
}

export default App;
