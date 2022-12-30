import React from "react";
import '../styles/Boton.css'

const Boton = ({ children, manejarClic }) => {

  const esOperador = (valor) => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=')
  };

  return (
    <div 
      className={ `boton-contenedor ${esOperador(children) ? 'operador' : ''}`.trimEnd() }
      onClick={() => manejarClic(children)}
    >
      {children}
    </div>
  )
}

export default Boton;