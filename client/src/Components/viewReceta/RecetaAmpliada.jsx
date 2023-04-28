import React, { useState } from 'react'
import '../../Style/RecetaAmpliada.css'

//uso <RecetaAmpliada receta="{receta}" ingredientes="{ingredientes}" usuario="{usuario}"><RecetaAmpliada/>
const RecetaAmpliada = () => {
  const [receta, setReceta] = useState({
    ID_receta: 0,
    nombre: "Changua",
    imagen: "https://uploads.vibra.co/1/2020/12/changua-receta.jpg",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing. Enim neque volutpat ac tincidunt vitae. Vulputate ut pharetra sit amet aliquam id. Nibh sed pulvinar proin gravida hendrerit lectus a. Leo vel orci porta non. Amet est placerat in egestas erat.",
    procedimiento: [
      "Primer paso",
      "Segundo paso",
      "Tercer paso",
      "Cuarto paso",
      "Quinto paso",
      "Sexto paso ",
      "Septimo paso",
      "Octavo paso",
      "Noveno paso",
      "Decimo paso",
      "Undecimo paso",
      "Doceavo paso"
    ],
    ingredientes: [0,1,2]
  })

  const [ingredientes, setIngredientes] = useState([
    {
      ID_ingrediente: 0,
      nombre: "tomate",
      imagen: "data:image/png;base64,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"
    }
  ])

  return (
    <>
      <div className='MainContainer'>
        <div className='IngredientContainer'>
          <div style={{marginRight: "0.5rem"}}>Ingredientes</div>
          <div className='IngredientScrollable'>
            <div className='IngredientImage'>
              <img className='IngredientImageCrop' src={ingredientes[0].imagen} alt="tomate" />
            </div>
            <div className='IngredientImage'>
              <img className='IngredientImageCrop' src={ingredientes[0].imagen} alt="tomate" />
            </div>
            <div className='IngredientImage'>
              <img className='IngredientImageCrop' src={ingredientes[0].imagen} alt="tomate" />
            </div>
            <div className='IngredientImage'>
              <img className='IngredientImageCrop' src={ingredientes[0].imagen} alt="tomate" />
            </div>
            <div className='IngredientImage'>
              <img className='IngredientImageCrop' src={ingredientes[0].imagen} alt="tomate" />
            </div>
            <div className='IngredientImage'>
              <img className='IngredientImageCrop' src={ingredientes[0].imagen} alt="tomate" />
            </div>
            <div className='IngredientImage'>
              <img className='IngredientImageCrop' src={ingredientes[0].imagen} alt="tomate" />
            </div>
            <div className='IngredientImage'>
              <img className='IngredientImageCrop' src={ingredientes[0].imagen} alt="tomate" />
            </div>
            <div className='IngredientImage'>
              <img className='IngredientImageCrop' src={ingredientes[0].imagen} alt="tomate" />
            </div>
            <div className='IngredientImage'>
              <img className='IngredientImageCrop' src={ingredientes[0].imagen} alt="tomate" />
            </div>
            <div className='IngredientImage'>
              <img className='IngredientImageCrop' src={ingredientes[0].imagen} alt="tomate" />
            </div>
            <div className='IngredientImage'>
              <img className='IngredientImageCrop' src={ingredientes[0].imagen} alt="tomate" />
            </div>
            <div className='IngredientImage'>
              <img className='IngredientImageCrop' src={ingredientes[0].imagen} alt="tomate" />
            </div>
          </div>
        </div>
        <div className='RecipeContainer'>
          <div>receta</div>
        </div>
      </div>
    </>
  )
}

export default RecetaAmpliada
