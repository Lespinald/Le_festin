import React, { useState } from 'react'
import Banner from '../Components/banner/Banner'
import Ingredientes from '../Components/Ingredientes'
import Receta from '../Components/Receta'


const VentanaPrincipal = () => {
  const [ingredientesSeleccionados, setIngredientesSeleccionados] = useState([]);
  return (
    <div className='VentanaPrincipal'>
      <Ingredientes ingredientesSeleccionados={ingredientesSeleccionados} setIngredientesSeleccionados={setIngredientesSeleccionados}/>
      <Receta ingredientesSeleccionados={ingredientesSeleccionados}/>
    </div>
  )
}

export default VentanaPrincipal
