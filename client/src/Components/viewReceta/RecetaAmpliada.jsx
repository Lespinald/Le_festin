import React, { useState } from 'react'

import Ingredientes from '../Ingredientes'
import RecetaMax from './RecetaMax'
import '../../Style/RecetaAmpliada.css'

//uso <RecetaAmpliada receta="{receta}" ingredientes="{ingredientes}" usuario="{usuario}"><RecetaAmpliada/>
const RecetaAmpliada = (props) => {

  return (
    <>
      <div className='MainRecetaAmpliada'>
        <div className='IngredientContainer'>
          <div style={{margin: "0 1rem 0 0"}}>Ingredientes</div>
          <div className='IngredientScrollable'>
            {
              props.Ingredientes?
              ingredientes.map(
                (e, i) => <Ingredientes/>
              ):
              ""
            }
          </div>
        </div>
        <div className='RecipeContainer'>
          <RecetaMax receta={props.receta} usuario={props.usuario}/>
        </div>
      </div>
    </>
  )
}

export default RecetaAmpliada
