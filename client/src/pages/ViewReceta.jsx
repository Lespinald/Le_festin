import React, { useState } from 'react'
import RecetaAmpliada from '../Components/viewReceta/RecetaAmpliada'

const ViewReceta = () => {
  const [datos, setDatos] = useState({
    receta: 0,
    ingredientes: [0,1,2],
    usuario: null
  })

  return (
    <div className='label'>
      <RecetaAmpliada receta={datos.receta} ingredientes={datos.ingredientes} usuario={datos.usuario}/>
    </div>
  )
}

export default ViewReceta
