import React, { useState } from 'react'
import Ingredientes from '../Components/Ingredientes'
import RecetaPrueba from '../Components/RecetaPrueba'

const VentanaFavoritos = () => {
  const [ingredientesSeleccionados, setIngredientesSeleccionados, Titulo] = useState([]);
  return (
    <div>
      <Ingredientes ingredientesSeleccionados={ingredientesSeleccionados} setIngredientesSeleccionados={setIngredientesSeleccionados}/>
      <RecetaPrueba ingredientesSeleccionados={ingredientesSeleccionados} Titulo={"Favoritos"}/>
    </div>
  )
}

export default VentanaFavoritos
