import React from 'react';
import './App.css';
import Proyecto from './components/Proyecto';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Proyectos de Dribble Studios</h1>
        <Proyecto 
          nombre='Sketch Land'
          plataforma='Game Boy Color'
          descripcion='Ayuda a los heroes a recolectar las Sketch Gems para encontrar el tesoro perdido en el Paper Sanctuary.
                      Adéntrate a lo largo de 5 niveles, pasando por praderas, bosques y desiertos al más puro estilo retro.'
          imagen='1'
          nombreImagen='Previsualización Sketch Land'
        />
        <Proyecto 
          nombre='Bounce'
          plataforma='Game Boy Color'
          descripcion='Supera cada nivel llegando a la bandera de meta esquivando y saltando diversas plataformas.'
          imagen='2'
          nombreImagen='Previsualización Bounce'
        />
        <Proyecto 
          nombre='Paw Attack!!!'
          plataforma='Game Boy Color'
          descripcion='Ayuda a Mewwy a rescatar a su amigo de las garras de Mr. Dreammy en este entretenido juego de plataformas.
          Adéntrate a lo largo de 12 niveles como mundos de desierto o de nubes, derrotando a varios enemigos y abriéndote paso a la fortaleza final de Mr. Dreammy en la Cueva Oscura.'
          imagen='3'
          nombreImagen='Previsualización Paw Attack!!!'
        />
        <Proyecto 
          nombre='A Slime Travel'
          plataforma='Game Boy Color'
          descripcion='Ayuda a Slimy a superar los obstáculos en este entretenido juego de plataformas.'
          imagen='4'
          nombreImagen='Previsualización A Slime Travel'
        />
      </div>
    </div>
  );
}

export default App;
