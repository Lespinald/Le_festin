import React from 'react'
import '../Style/styleReceta.css'


const VistaMinimaReceta = (Props) => {

    const receta= {
        ID_receta:Props.ingrediente.id_receta,
        nombre: Props.ingrediente.nombre,
        imagen:Props.ingrediente.imagen,
        descripcion:Props.ingrediente.descripcion,
        procedimiento:Props.ingrediente.procedimiento
    }

  return (
    <button className="grid-item_Recetas" onClick={() => console.log("te extraño :(")}>
        <div className="titleReceta">{receta.nombre}</div>
        <div className="grid-container-content-info">
            <img src={receta.imagen} className="imagen_Recetas"/>
            <div className='descriptionVistaPrincipal'>
                <p> Descripcion:</p>
                <p> {receta.descripcion}</p>
            </div>
        </div>              
    </button>
  )
}

export default VistaMinimaReceta
