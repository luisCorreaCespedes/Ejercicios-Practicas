import React from "react";
import '../styles/Logo.css';
import Imagen from '../images/logo.png';

const Logo = () => {
  return (
    <div className='logo-contenedor'>
      <img 
        src={Imagen}
        className='logo'
        alt='Logo Calculadora'
      />
    </div>
  )
}

export default Logo;