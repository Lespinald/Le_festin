import React, { useEffect, useState } from "react";
import '../Style/styleReceta.css'
import RecetaVentanPrincipal from './RecetaVentanPrincipal'
import VistaMinimaReceta from "./VistaMinimaReceta";


const Receta = (props) => {
  const [recetas, set_Recetas ] = useState([]);
  const ingredientesSeleccionados = props.ingredientesSeleccionados;
  const objetoJson = JSON.stringify(ingredientesSeleccionados);
  const [titulo, setTitulo] = useState("Recomendaciones");


  useEffect(() => {
    if(ingredientesSeleccionados.length === 0){
      console.log("Arreglo vacio")
      fetch('https://lefestin.onrender.com/api/recetas/recomendadas')//ruta de la api
      .then(response => response.json())
      .then(datos => set_Recetas(datos)); // guardar todas las recetas
      setTitulo("Recomendaciones");
    }else{
      console.log("Arreglo con ingredientes")
      fetch(`https://lefestin.onrender.com/api/recetas/ingredientes/${objetoJson}`)//ruta de la api
      .then(response => response.json())
      .then(datos => set_Recetas(datos));
      setTitulo("Recetas");
    }
  }, [ingredientesSeleccionados])

  
  // props: ["ingrediente"]

  return (
    <div className="RECETAS">

      <section className="componente_Recetas">
        <h1 className="titulo">
          {titulo}
        </h1>
        <div className="grid-container_Recetas">
          {recetas.map((element,index) => (
            <VistaMinimaReceta ingrediente={element} key={index}/>
          )
          )}
        </div>
      </section>

    </div>
  )
}

export default Receta
