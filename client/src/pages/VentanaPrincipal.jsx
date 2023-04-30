import React from 'react'
import Banner from '../Components/banner/Banner'
import Ingredientes from '../Components/Ingredientes'
import Receta from '../Components/Receta'


const VentanaPrincipal = () => {
  return (
    <div className='VentanaPrincipal'>
      <Ingredientes/>
      <Receta/>
    </div>
  )
}

export default VentanaPrincipal
