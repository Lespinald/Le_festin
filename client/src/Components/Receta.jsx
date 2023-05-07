import React, { useEffect, useState } from "react";
import '../Style/styleReceta.css'
import RecetaVentanPrincipal from './RecetaVentanPrincipal'
import data from './Json/receta.json'
import VistaMinimaReceta from "./vistaMinimaReceta";


const Receta = ({}) => {
  const [recetas, set_Recetas ] = useState([]);

  useEffect(() => {
    set_Recetas(data.recetas);
  }, [])
  
  
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
