import React from "react";
import "../../Style/RecetaMax.css"
import { useSelector } from "react-redux";

const RecetaMax = (props) => {
  const authentication = useSelector((state) => state.auth.status);
  console.log(authentication);
  return (
    <div className="MainRecetaMax">
      <div className="PanelIzquierdo">
        <div className="TituloReceta">
          {props.receta && props.receta.nombre || "Titulo"}
        </div>
        {
          (props.receta)?
          <div className="ImagenReceta"
          style={{
            background: `url(${props.receta.imagen}) 50% 50% no-repeat`,
            backgroundSize: "cover"
          }}>
          </div>:
          "imagen"
        }
      </div>
      <div className="PanelDerecho">
        <div className="TopOptions">
          <a href="/receta">
            <svg className="BackButton" width="100" height="100" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 27L26 9M9 9L26 27M18 2C26.8366 2 34 9.16344 34 18C34 26.8366 26.8366 34 18 34C9.16344 34 2 26.8366 2 18C2 9.16344 9.16344 2 18 2Z" stroke="black" strokeWidth="2.5"/>
            </svg>
          </a>
        </div>
        <div className="TextoReceta">
          <p>
            {props.receta && props.receta.descripcion || "descripción"}
          </p>
          <div className="PasosLabel">
            Paso a paso de la receta:
          </div>
          <ol>
            {(props.receta && props.receta.procedimiento)? props.receta.procedimiento.map((e, i) => <li key={i}>{e}</li>): ""}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default RecetaMax;
