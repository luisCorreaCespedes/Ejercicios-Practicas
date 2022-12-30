import './App.css';
import Logo from './components/Logo';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import Borrar from './components/Borrar';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('0');

  const agregarInput = (val) => {
    if (input === '0') {
      setInput(val);
    } else {
      setInput(input + val);
    }
  };

  const borrarInput = () => {
    setInput('0');
  };

  const mostrarResultado = () => {
    input ? setInput(evaluate(input)) : setInput('');
  };

  return (
    <div className='App'>
      <Logo />
      <div className='calculadora-contenedor'>
        <Pantalla valor={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={mostrarResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <Borrar manejarClic={borrarInput}>Borrar</Borrar>
        </div>
      </div>
    </div>
  );
}

export default App;
