import React, { useState } from "react";
import '../Style/styleReceta.css'
import RecetaVentanPrincipal from './RecetaVentanPrincipal'
import data from './Json/receta.json'


const Receta = ({}) => {
  const [recetas, set_Recetas ] = useState('');
  
  props: ["ingrediente"]

  return (
    <div className="RECETAS">

      <section className="componente_Recetas">
        <div className="grid-container_Recetas">
          
          {data.ingredientes.map((ingrediente) => (
            <button key={ingrediente.nombre} className="grid-item_Recetas" onClick={() => console.log("te extraño :(")}>
              
              <img src={ingrediente.imagen} className="imagen_Recetas"/>
              {ingrediente.nombre}
              {" Descripción: "+ingrediente.descripcion}
              {' Procedimiento: '+ingrediente.procedimiento}
              
              
            </button>
          ))}
        </div>
      </section>

    </div>
  )
}

export default Receta
