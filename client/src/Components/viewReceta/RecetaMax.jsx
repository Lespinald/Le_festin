import React from "react";

import "../../Style/RecetaMax.css"

const RecetaMax = (props) => {

  return (
    <div className="MainRecetaMax">
      <div className="PanelIzquierdo">
        <div className="TituloReceta">
          {props.receta && props.receta.nombre}
        </div>
        {
          (props.receta)?
          <div className="ImagenReceta"
          style={{
            background: `url(${props.receta.imagen}) 50% 50% no-repeat`,
            backgroundSize: "cover"
          }}>
          </div>:
          imagen
        }
      </div>
      <div className="PanelDerecho">
        <div className="TopOptions">
          <svg style={{width: "2rem", height: "2rem"}} width="100" height="100" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 27L26 9M9 9L26 27M18 2C26.8366 2 34 9.16344 34 18C34 26.8366 26.8366 34 18 34C9.16344 34 2 26.8366 2 18C2 9.16344 9.16344 2 18 2Z" stroke="black" stroke-width="2.5"/>
          </svg>
        </div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing. Enim neque volutpat ac tincidunt vitae. Vulputate ut pharetra sit amet aliquam id. Nibh sed pulvinar proin gravida hendrerit lectus a. Leo vel orci porta non. Amet est placerat in egestas erat. que mas bro
        </p>
      </div>
    </div>
  )
}

export default RecetaMax;
