import React, { useState } from 'react'
import Banner from '../Components/banner/Banner'
import Ingredientes from '../Components/Ingredientes'
import Receta from '../Components/Receta'
import RecetaFavoritos from '../Components/RecetaFavoritos'


const VentanaFavoritos = () => {
  const [ingredientesSeleccionados, setIngredientesSeleccionados] = useState([]);
  return (
    <div className='VentanaPrincipal'>
      <Ingredientes ingredientesSeleccionados={ingredientesSeleccionados} setIngredientesSeleccionados={setIngredientesSeleccionados}/>
      <RecetaFavoritos ingredientesSeleccionados={ingredientesSeleccionados}/>
    </div>
  )
}

export default VentanaFavoritos
