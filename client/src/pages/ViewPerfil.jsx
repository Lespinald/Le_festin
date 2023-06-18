import React, { useEffect, useState } from "react";
import "../Style/ViewPerfil.css";
import data from '../Json/recetas.json'
import { useSelector } from "react-redux";


const ViewPerfil= () => {

  const uid = useSelector((state) => state.info.uid);
  const fecha = useSelector((state) => state.info.fecha);
  const email = useSelector((state) => state.info.email);
  const displayName = useSelector((state) => state.info.displayName);
  const photoURL = useSelector((state) => state.info.photoURL);
  // console.log("🚀 ~ file: ViewPerfil.jsx:10 ~ ViewPerfil ~ info:", info)

  var tieneRecetas= true;
  if(data.recetas[0]===undefined){
    tieneRecetas = false;
  }

	const [recetas_elegidos, set_receta] = useState([]);
	const [seleccionReceta, setSeleccionReceta]=useState(true);
  const [recetas, setRecetas] = useState(0);
  const [favoritos, setFavoritos] = useState(0);

	function seleccionarReceta(value){
    const tumadre = []
    set_receta(tumadre)
    set_receta(value)
    setSeleccionReceta(false)
	}

  function deselectReceta(){
    setSeleccionReceta(true)
    const tumadre = []
    set_receta(tumadre)
  }

  useEffect(() => {
    fetch(`https://lefestin.onrender.com/api/usuarios/cantidadFavoritos/${uid}`)
    .then(respuesta => {
      return respuesta.json()
    })
    .then(datos => {
      setFavoritos(datos[0].cantidad_recetas)
    }); 
    fetch(`https://lefestin.onrender.com/api/usuarios/cantidadRecetas/${uid}`)
    .then(respuesta => respuesta.json())
    .then(datos => {
      setRecetas(datos[0].cantidad_recetas)
    }); 
  },[])

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
              <p style={{marginTop:"10px", marginLeft:"10px"}}>Añade una receta</p>
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
                  <div>
                  <img src={photoURL} style={{width:'20vw', height: '30vh'}}/>
                      {/* <img src="icon_guest.png" className="ImageUser"/> */}

                  </div>
                  <div>
                    <ol style={{fontSize:'5vh'}}>{displayName}</ol>
                    <ol>Correo: {email}</ol>
                    <ol>Creado: {fecha}</ol>
                    <ol>Recetas: {recetas} recetas</ol>
                    <ol>Favoritos: {favoritos} recetas</ol>
                  </div>
                </div>
              )}
						  {!seleccionReceta &&(
                <div className="InfDerSup">
                  <div style={{display:"flex"}}>
                    <h1 style={{fontSize:"60px", paddingLeft:"19px"}}>{recetas_elegidos.titulo}</h1>
                    <div style={{position:'absolute', right:'10%', top:'10%'}} onClick={() => deselectReceta()}>
                      <svg className="BackButton" width="5vw" height="5vw" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 27L26 9M9 9L26 27M18 2C26.8366 2 34 9.16344 34 18C34 26.8366 26.8366 34 18 34C9.16344 34 2 26.8366 2 18C2 9.16344 9.16344 2 18 2Z" stroke="black" strokeWidth="2.5"/>
                      </svg>
                    </div>
                  </div>
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


export default ViewPerfil