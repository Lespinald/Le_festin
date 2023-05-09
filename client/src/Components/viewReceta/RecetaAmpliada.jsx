import React, { useEffect, useState } from 'react'

import RecetaMax from './RecetaMax'

import '../../Style/RecetaAmpliada.css'
import '../../Style/GUI_Ingredientes.css'

//uso <RecetaAmpliada receta="{receta}" ingredientes="{ingredientes}" usuario="{usuario}"><RecetaAmpliada/>
const RecetaAmpliada = (props) => {

  return (
    <>
      <div className='MainRecetaAmpliada'>
        <div className='IngredientContainer'>
          <div style={{margin: "0 1rem 0 0"}}>Ingredientes</div>
          <div className='IngredientScrollable'>
            {
              props.ingredientes?
              props.ingredientes.map(
                (e, i) => (<div key={i}>
                  <button className="grid-item_ingrediente">
                    {e.nombre}
                    <img src={e.imagen} className="imagen_Ingrediente"/>
                  </button>
                  <div style={{marginTop: "0.75rem"}}></div>
                </div>)
              ):
              ""
            }
          </div>
        </div>
        <div className='RecipeContainer'>
          <RecetaMax receta={props.receta || null} usuario={props.usuario || null}/>
        </div>
      </div>
    </>
  )
}

export default RecetaAmpliada
