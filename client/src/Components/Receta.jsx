import React from 'react'
import '../Style/styleReceta.css'
import RecetaVentanPrincipal from './RecetaVentanPrincipal'
import { useState } from 'react'

const Receta = () => {
  const [arreglo, setArreglo] = useState([1,2,3,4,5,6])
  
  return (
    <div className='label'>
      {arreglo.map((receta,index) => (
        <RecetaVentanPrincipal key={index}/>
      ))}
    </div>
  )
}

export default Receta
