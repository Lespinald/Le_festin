import React, { useState } from 'react'
import Ingredientes from '../Components/Ingredientes'
import Receta from '../Components/Receta'

const VentanaFavoritos = () => {
  const [ingredientesSeleccionados, setIngredientesSeleccionados, Titulo] = useState([]);
  return (
    <div>
      <Ingredientes ingredientesSeleccionados={ingredientesSeleccionados} setIngredientesSeleccionados={setIngredientesSeleccionados}/>
      <Receta ingredientesSeleccionados={ingredientesSeleccionados} Titulo={"Favoritos"}/>
    </div>
  )
}

export default VentanaFavoritos
