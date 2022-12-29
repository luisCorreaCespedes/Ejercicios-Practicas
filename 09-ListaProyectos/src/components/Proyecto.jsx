import React from 'react';
import '../styles/Proyecto.css';

function Proyecto(props) {
  return (
    <div className='contenedor-proyecto'>
      <img 
        src={require(`../img/image-${props.imagen}.png`)}
        className='imagen-proyecto'
        alt={props.nombreImagen}
      />
      <div className="informacion-proyecto">
        <p className="nombre-proyecto">{props.nombre}</p>
        <p className="plataforma-proyecto">{props.plataforma}</p>
        <p className="descripcion-proyecto">{props.descripcion}</p>
      </div>
    </div>
  );
}

export default Proyecto;