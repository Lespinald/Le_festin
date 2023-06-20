import React, { useEffect, useState } from "react";
import '../Style/styleReceta.css'
import RecetaVentanPrincipal from './RecetaVentanPrincipal'
import VistaMinimaReceta from "./VistaMinimaReceta";
import { firebaseAuth } from "../firebase/config";
import { getAuth } from "firebase/auth";


const RecetaFavoritos = (props) => {
  const [recetas, set_Recetas ] = useState([]);
  const ingredientesSeleccionados = props.ingredientesSeleccionados;
  const objetoJson = JSON.stringify(ingredientesSeleccionados);
  const auth = getAuth();
  const user = auth.currentUser;
  const uid = user.uid;
  console.log(uid);
  

  useEffect(() => {
    if(ingredientesSeleccionados.length === 0){
      console.log("Arreglo vacio");
      fetch(`http://localhost:5000/api/favoritos/obtener/${uid}`)//ruta de la api para obtener favoritos
      .then(response => response.json())
      .then(datos => set_Recetas(datos)); // guardar todos los ids favoritos

    }else{
      console.log("Arreglo con ingredientes")
      fetch(`https://lefestin.onrender.com/api/recetas/ingredientes/${objetoJson}`)//ruta de la api
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

export default RecetaFavoritos