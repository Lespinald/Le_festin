import React, { useEffect, useState } from "react";
import "../Style/GUI_PublicarReceta.css";
import IngredientesPublicarReceta from "../Components/IngredientesPublicarReceta";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


const PublicaReceta = () => {
  const info = useSelector((state) => state.auth);
  const id_usuario = info?.uid;

  const [mostrarVentana, setMostrarVentana] = useState(false);
  const [ingredientesSeleccionados, setIngredientesSeleccionados] = useState([]);

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [procedimiento, setProcedimiento] = useState("");
  const [imagen, setImagen] = useState("");
 
  const abrirVentana = () => {
    setMostrarVentana(true);
  }

  const cerrarVentana = () =>{
    setMostrarVentana(false);
  }

  function deseleccionarIngrediente(value) {//funcion para deseleccionar, osea elimnar el ingrediente del arrey ingredientesSeleccionados
    console.log(value)
    const indice = ingredientesSeleccionados.indexOf(value);
    console.log(indice)
    const nuevaLista = [...ingredientesSeleccionados];
    nuevaLista.splice(indice, 1);
    setIngredientesSeleccionados(nuevaLista);
  }

  const publishRecipe = () =>{
    setProcedimiento("{"+procedimiento+"}")
    alert(procedimiento)
    fetch(`https://lefestin.onrender.com/api/recetas/createRecetas`,{
      method: 'POST',
      headers:{
          'Content-Type': 'application/json'
      }, body: JSON.stringify({ id_usuario: id_usuario, nombre: nombre, descripcion: descripcion, procedimiento: procedimiento, imagen: imagen, ingredientes: ingredientesSeleccionados, vistas: 0, puntaje: 0})
    })
    .then(respuesta => {
      if(respuesta.ok){
        alert("Receta publicada");
      }else{
        alert("No se puedo publicar la receta");
      }
    })
  }

  return (
    <div className='label'>
      <div className='contGeneral'>
        <Link to={"/receta"} className="imagenContainer">
          <img src="xButton.png" className="imagen" />
        </Link>
        <div className='titulo'>
          <h1>Publicar Receta</h1>
        </div>
        <div className='zonaInferior'>
          <div className='infIzq'>
            <div>
              <h2>Titulo:</h2>
              <form>
                <input type='text' placeholder='Nombre de la receta' className='inputbox-titulo' onChange={(e) => {setNombre(e.target.value)}}></input>
              </form>
            </div>
            <div className='addReceta'>
              <h2>Imagen:</h2>
              <div>
                <form>
                  <input type='text' placeholder='Link imagen' className='inputbox-titulo' onChange={(e) => {setImagen(e.target.value)}}></input>
                </form>
              </div>
            </div>
            <div className='displayColumn'>
              <div className='escogerIngredientes'>
                <h2>Ingredientes:</h2>
                <button className='botonEscoger' onClick={abrirVentana}>Escoger</button>
              </div>
              <div className="seleccionIngredientes">
                <div className="componente_elegidos_grid1">
                  {ingredientesSeleccionados.length === 0 && (
                    <p className="mensaje_Ingredientes">Escoge los ingredientes</p>
                  )}
                  {ingredientesSeleccionados.length > 0 && (
                    <div className="grid-container_elegidos">
                      {ingredientesSeleccionados.map((ingrediente, index) => (
                        <button key={index} className="grid-item_elegido" onClick={() => deseleccionarIngrediente(ingrediente)}>
                          {ingrediente}
                          <img src="x.png" alt="imagen" className="imagen-hover"></img>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className='infDer'>
            <div>
              <h2>Descripción:</h2>
                <form>
                  <textarea type='textarea' className='inputbox-Descripcion' placeholder='Escribe una descripción breve para tu receta' onChange={(e) => {setDescripcion(e.target.value)}}></textarea>
                </form>
            </div>
            <div>
              <h2>Paso a paso:</h2>
                <form>
                  <textarea className='inputbox-Pasos' placeholder='Describe los pasos que son necesarios para esta receta' onChange={(e) => {setProcedimiento(e.target.value)}}></textarea>
                </form>
            </div>
          </div>
        </div>
        <div className='titulo' onClick={publishRecipe}>
          <button className='botonPublicar'>Publicar</button>
        </div>
        {mostrarVentana && (
          <div className="ventana-emergente">
            <div className="contenido-ventana">
              <button className="boton-cerrar" onClick={cerrarVentana}>
                <svg width="50px" height="50px" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 27L26 9M9 9L26 27M18 2C26.8366 2 34 9.16344 34 18C34 26.8366 26.8366 34 18 34C9.16344 34 2 26.8366 2 18C2 9.16344 9.16344 2 18 2Z" stroke="black" strokeWidth="2.5"/>
                </svg>
              </button>
              <IngredientesPublicarReceta ingredientesSeleccionados={ingredientesSeleccionados} setIngredientesSeleccionados={setIngredientesSeleccionados}/>
              </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PublicaReceta
