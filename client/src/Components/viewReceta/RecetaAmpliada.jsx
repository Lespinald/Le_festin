import React, { useEffect, useState } from 'react'

import RecetaMax from './RecetaMax'
import Comentarios from '../Comentarios'


import '../../Style/RecetaAmpliada.css'
import '../../Style/GUI_Ingredientes.css'


//uso <RecetaAmpliada receta="{receta}" ingredientes="{ingredientes}" usuario="{usuario}"><RecetaAmpliada/>
const RecetaAmpliada = (props) => {

  const [ingredientes, setIngredientes] = useState([]);
  const ingredientesId = props.ingredientes;

  useEffect(() => {
    fetch(`https://lefestin.onrender.com/api/ingredientes/list/${ingredientesId.join(",")}`)
    .then(response => response.json())
    .then(datos => setIngredientes(datos));
  }, [ingredientesId])

  return (
    <>
      <div className='MainRecetaAmpliada'>
        <div className='IngredientContainer'>
          <div style={{margin: "0 1rem 0 0"}}>Ingredientes</div>
          <div className='IngredientScrollable'>
            {
              ingredientes.map(
                (e, i) => (<div key={i}>
                  <button className="grid-item_ingrediente">
                    {e.nombre}
                    <img src={e.imagen} className="imagen_Ingrediente"/>
                  </button>
                  <div style={{marginTop: "0.75rem"}}></div>
                </div>)
              )
            }
          </div>
        </div>
        <div className='RecipeAndComentariosContainer'>
          <RecetaMax receta={props.receta || null} usuario={props.usuario || null} id={props.id}/>
          <div className='ComentariosContainer'>
            <Comentarios id={props.id}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default RecetaAmpliada
