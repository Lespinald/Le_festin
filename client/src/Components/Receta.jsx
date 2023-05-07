import React, { useEffect, useState } from "react";
import '../Style/styleReceta.css'
import RecetaVentanPrincipal from './RecetaVentanPrincipal'
import data from './Json/receta.json'
import VistaMinimaReceta from "./vistaMinimaReceta";


const Receta = (props) => {
  const [recetas, set_Recetas ] = useState([]);
  // props.ingredientesSeleccionado

  useEffect(() => {
    fetch('http://localhost:5000/api/recetas')//ruta de la api
        .then(response => response.json())
        .then(datos => set_Recetas(datos)); // guardar todas las recetas
  }, [props.ingredientesSeleccionado])

  useEffect(() => {
    // set_Recetas(data.recetas)
  }, [recetas])
  
  
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
