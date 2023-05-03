import React, { useState } from 'react'
import RecetaAmpliada from '../Components/viewReceta/RecetaAmpliada'

import data from '../Components/Json/ingredientes.json'

const ViewReceta = () => {
  const [datos, setDatos] = useState({
    receta: {
      ID_receta: 0,
      nombre: "Changua",
      imagen: "https://www.unacolombianaencalifornia.com/wp-content/uploads/2020/09/Changua.jpg",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "+
                  "tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec "+
                  "adipiscing. Enim neque volutpat ac tincidunt vitae. Vulputate ut pharetra sit "+
                  "amet aliquam id. Nibh sed pulvinar proin gravida hendrerit lectus a. Leo vel"+
                  " orci porta non. Amet est placerat in egestas erat. que mas bro",
      procedimiento: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "+
        "tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec "+
        "adipiscing. Enim neque volutpat ac tincidunt vitae. Vulputate ut pharetra sit "+
        "amet aliquam id. Nibh sed pulvinar proin gravida hendrerit lectus a. Leo vel"+
        " orci porta non. Amet est placerat in egestas erat. que mas bro",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "+
        "tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec "+
        "adipiscing. Enim neque volutpat ac tincidunt vitae. Vulputate ut pharetra sit "+
        "amet aliquam id. Nibh sed pulvinar proin gravida hendrerit lectus a. Leo vel"+
        " orci porta non. Amet est placerat in egestas erat. que mas bro",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "+
        "tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec "+
        "adipiscing. Enim neque volutpat ac tincidunt vitae. Vulputate ut pharetra sit "+
        "amet aliquam id. Nibh sed pulvinar proin gravida hendrerit lectus a. Leo vel"+
        " orci porta non. Amet est placerat in egestas erat. que mas bro",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "+
        "tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec "+
        "adipiscing. Enim neque volutpat ac tincidunt vitae. Vulputate ut pharetra sit "+
        "amet aliquam id. Nibh sed pulvinar proin gravida hendrerit lectus a. Leo vel"+
        " orci porta non. Amet est placerat in egestas erat. que mas bro",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "+
        "tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec "+
        "adipiscing. Enim neque volutpat ac tincidunt vitae. Vulputate ut pharetra sit "+
        "amet aliquam id. Nibh sed pulvinar proin gravida hendrerit lectus a. Leo vel"+
        " orci porta non. Amet est placerat in egestas erat. que mas bro",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "+
        "tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec "+
        "adipiscing. Enim neque volutpat ac tincidunt vitae. Vulputate ut pharetra sit "+
        "amet aliquam id. Nibh sed pulvinar proin gravida hendrerit lectus a. Leo vel"+
        " orci porta non. Amet est placerat in egestas erat. que mas bro",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "+
        "tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec "+
        "adipiscing. Enim neque volutpat ac tincidunt vitae. Vulputate ut pharetra sit "+
        "amet aliquam id. Nibh sed pulvinar proin gravida hendrerit lectus a. Leo vel"+
        " orci porta non. Amet est placerat in egestas erat. que mas bro",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "+
        "tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec "+
        "adipiscing. Enim neque volutpat ac tincidunt vitae. Vulputate ut pharetra sit "+
        "amet aliquam id. Nibh sed pulvinar proin gravida hendrerit lectus a. Leo vel"+
        " orci porta non. Amet est placerat in egestas erat. que mas bro",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "+
        "tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec "+
        "adipiscing. Enim neque volutpat ac tincidunt vitae. Vulputate ut pharetra sit "+
        "amet aliquam id. Nibh sed pulvinar proin gravida hendrerit lectus a. Leo vel"+
        " orci porta non. Amet est placerat in egestas erat. que mas bro",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "+
        "tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec "+
        "adipiscing. Enim neque volutpat ac tincidunt vitae. Vulputate ut pharetra sit "+
        "amet aliquam id. Nibh sed pulvinar proin gravida hendrerit lectus a. Leo vel"+
        " orci porta non. Amet est placerat in egestas erat. que mas bro",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "+
        "tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec "+
        "adipiscing. Enim neque volutpat ac tincidunt vitae. Vulputate ut pharetra sit "+
        "amet aliquam id. Nibh sed pulvinar proin gravida hendrerit lectus a. Leo vel"+
        " orci porta non. Amet est placerat in egestas erat. que mas bro"
      ],
      ingredientes: [0,1,2,3]
    },
    usuario: null
  })

  return (
    <div className='label'>
      <RecetaAmpliada receta={datos.receta} ingredientes={data.ingredientes} usuario={datos.usuario}/>
    </div>
  )
}

export default ViewReceta
