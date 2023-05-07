import React from 'react'
import '../Style/styleReceta.css'
import { useNavigate } from 'react-router-dom';


const VistaMinimaReceta = (Props) => {
    const navigate = useNavigate();

    const receta= {
        ID_receta:Props.ingrediente.id_receta,
        nombre: Props.ingrediente.nombre,
        imagen:Props.ingrediente.imagen,
        descripcion:Props.ingrediente.descripcion,
        procedimiento:Props.ingrediente.procedimiento
    }

    const handlerClick = () => {
        navigate(`/receta/${receta.ID_receta}`)
    }

  return (
    <button className="grid-item_Recetas" onClick={handlerClick}>
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
