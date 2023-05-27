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
                <input type='text' placeholder='Nombre de la receta' className='inputbox-titulo'></input>
              </form>
            </div>
            <div className='addReceta'>
              <h2>Imagen:</h2>
              <div>
                <button className='botonReceta'>
                  <img src='/client/public/xButton.png' alt='imagen-añadir'></img>
                </button>
              </div>
            </div>
            <div className='displayColumn'>
              <div className='escogerIngredientes'>
                <h2>Ingredientes:</h2>
                <button className='botonEscoger'>Escoger</button>
              </div>
              <div className='seleccionIngredientes'>
                <p>Selecciona los</p>
                <p>ingredientes</p>
              </div>
            </div>
          </div>
          <div className='infDer'>
            <div>
              <h2>Descripción:</h2>
                <form>
                  <input type='textarea' className='inputbox-Descripcion' placeholder='Escribe una descripción breve para tu receta' ></input>
                </form>
            </div>
            <div>
              <h2>Paso a paso:</h2>
                <form>
                  <textarea className='inputbox-Pasos' placeholder='Describe los pasos que son necesarios para esta receta'></textarea>
                </form>
            </div>
          </div>
        </div>
        <div className='titulo'>
          <button className='botonPublicar'>Publicar</button>
        </div>
      </div>
    </div>
  )
}

export default PublicaReceta
