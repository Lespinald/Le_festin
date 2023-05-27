import React from 'react'
import "../Style/GUI_PublicarReceta.css"
const PublicaReceta = () => {
  return (
    <div className='label'>
      <div className='contGeneral'>
        <div className='titulo'>
          <h1>Publicar Receta</h1>
        </div>
        <div className='zonaInferior'>
          <div className='infIzq'>
            <div>
              <h2>Titulo:</h2>
              <form>
                <input type='text' placeholder='Nombre de la receta' className='inputbox'></input>
              </form>
            </div>
            <div className='addReceta'>
              <h2>Imagen:</h2>
              <div>
                <img src='https://raw.githubusercontent.com/Lespinald/lespinald.github.io/main/client/public/añadirReceta.png?token=GHSAT0AAAAAACCMB6S4YBY4PLUZJ2NYZEYQZDREJPA' alt='imagen-añadir'></img>
              </div>
            </div>
            <div className='displayColumn'>
              <div className='escogerIngredientes'>
                <h2>Ingredientes:</h2>
                <button>Escoger</button>
              </div>
              <div>
                <input type='textarea' placeholder='Selecciona los ingredientes' className='inputbox' disabled></input>
              </div>
            </div>
          </div>
          <div className='infDer'>
            <div>
              <h2>Descripción:</h2>
                <form>
                  <input type='textarea' className='inputbox' placeholder='Escribe una descripción breve para tu receta' ></input>
                </form>
            </div>
            <div>
              <h2>Paso a paso:</h2>
                <form>
                  <input type='textarea' className='inputbox' placeholder='Describe los pasos que son necesarios para esta receta'></input>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PublicaReceta
