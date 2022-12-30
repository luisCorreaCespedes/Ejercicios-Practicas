import React from "react";
import '../styles/Borrar.css'

const Borrar = ( { children, manejarClic }) => {
  return (
    <div 
      className='boton-borrar'
      onClick={() => manejarClic()}
    >
      { children }
    </div>
  )
}

export default Borrar;