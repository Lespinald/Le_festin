import React, { useState } from "react";
import "../Style/ViewPerfil.css";
import data from '../Components/Json/recetas.json'


const ViewPerfil= () => {

  var tieneRecetas= true;
  if(data.recetas[0]===undefined){
    tieneRecetas = false;
  }

	const [recetas_elegidos, set_receta] = useState([]);
	const [seleccionReceta, setSeleccionReceta]=useState(true);

	function seleccionarReceta(value){
    const tumadre = []
    set_receta(tumadre)
    set_receta(value)
    setSeleccionReceta(false)
	}
  function deselectReceta(){
    setSeleccionReceta(false)
    const tumadre = []
    set_receta(tumadre)
  }
  console.log(recetas_elegidos)

  return(
    <div>
      {!tieneRecetas&&(
        <div className="ZonaInferior">
          <div className="InfIzq">
            <h1 style={{marginTop:"10px", marginLeft:"10px"}}>Mis recetas</h1>
            <h1 style={{marginTop:"10px", marginLeft:"10px"}}>Aún no tienes recetas. Añade una!</h1>
          </div>
          <div className="InfDer">
            <div className="InfDerSup">
              <p style={{marginTop:"10px", marginLeft:"10px"}}>Añada una receta pai</p>
            </div>
          </div>
        </div>
      )}
      {tieneRecetas&&(
        <div className="ZonaInferior">
          <section className="InfIzq">
            <h1 style={{marginTop:"12px", marginLeft:"12px"}}>Mis recetas</h1>
            {data.recetas.map((receta) => (
              <button key={receta.titulo} className="MisRecetas" onClick={()=>seleccionarReceta(receta)}>
								<div className="MRTitulo">
                	<h1>{receta.titulo}</h1>
            		</div>
            		<div className="MRResto">
                	<div className="FotoReceta">
                    <img className="MRImagenes" src={receta.imagen} alt="Hola"/>
                	</div>
                	<div className="MRTextos">
                    <h1 style={{fontSize:"15px"}}>Descripción Corta:</h1>
                    <p style={{fontSize:"10px"}}>
                      {receta.descripcion}
                    </p>
                	</div>
            		</div>
              </button>
            ))}
          </section>
          <section className="InfDer">
            <div className="InfDerSup">
              {seleccionReceta && (
                <div className="selectReceFalse">
                  <p style={{fontSize:"70px"}}>No has seleccionado ninguna receta, escoge una para visualisarla!</p>
                </div>
              )}
						  {!seleccionReceta &&(
                <div className="InfDerSup">
                  <h1 style={{fontSize:"60px", paddingLeft:"19px"}}>{recetas_elegidos.titulo}</h1>
                  <div className="MRResto">
                    <img className= "MRResto2" src={recetas_elegidos.imagen}/>
                    <p style={{width:"60%"}}className="MRResto2">{recetas_elegidos.descripcion}</p>
                  </div>
                </div>
              )}
            </div>
            <div>
						  {!seleccionReceta &&(
                <div className="wea">
                  <button className="botonEditar">
                    <p style={{margin:"0", textAlign:"center"}}>Editar</p>
                  </button>
                  <button className="botonBorrar">
                    <p style={{margin:"0", textAlign:"center"}}>Eliminar</p>
                  </button>
                </div>
              )}
            </div>
          </section>
        </div>
      )}
    </div>
  )
  
}
console.log("---------------------------------------------------------------------------------------------------")


export default ViewPerfil