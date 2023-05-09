import React, { useEffect, useState } from "react";
import '../Style/styleReceta.css'
import RecetaVentanPrincipal from './RecetaVentanPrincipal'
import data from './Json/receta.json'
import VistaMinimaReceta from "./VistaMinimaReceta";


const Receta = (props) => {
  const [recetas, set_Recetas ] = useState([]);
  const ingredientesSeleccionados = props.ingredientesSeleccionados;
  const objetoJson = JSON.stringify(ingredientesSeleccionados);


  useEffect(() => {
    if(ingredientesSeleccionados.length === 0){
      console.log("Arreglo vacio")
      fetch('http://localhost:5000/api/recetas')//ruta de la api
      .then(response => response.json())
      .then(datos => set_Recetas(datos)); // guardar todas las recetas
    }else{
      console.log("Arreglo con ingredientes")
      fetch(`http://localhost:5000/api/recetas/ingredientes/${objetoJson}`)//ruta de la api
      .then(response => response.json())
      .then(datos => set_Recetas(datos));
    }
  }, [ingredientesSeleccionados])

  
  // props: ["ingrediente"]

  return (
    <div className="RECETAS">

      <section className="componente_Recetas">
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
