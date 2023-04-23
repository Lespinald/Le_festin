import React from 'react'
import Banner from '../Components/banner/Banner'
import Ingredientes from '../Components/Ingredientes'
import Receta from '../Components/Receta'


const VentanaPrincipal = ({setError}) => {
  return (
    <div className='VentanaPrincipal'>
      <Banner setError={setError}/>  
      <Ingredientes/>
      <Receta/>
    </div>
  )
}

export default VentanaPrincipal
