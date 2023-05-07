import React from 'react'
import "../Style/ViewPerfil.css";

function PreviewReceta(props){
    return (
        <div className="MisRecetas">
            <div className="MRTitulo">
                <h1>{props.tituloreceta}</h1>
            </div>
            <div className="MRResto">
                <div className="FotoReceta">
                    <img className="MRImagenes" src="https://vecinavegetariana.com/wp-content/uploads/2022/09/Changua-Colombiana-Colombian-Milk-and-Eggs-Breakfast-Soup-2-1.jpg" alt="Hola"/>
                </div>
                <div className="MRTextos">
                    <h1 style={{fontSize:"15px"}}>Descripción Corta:</h1>
                    <p style={{fontSize:"10px"}}>
                        {props.descripcionreceta}
                    </p>
                </div>
            </div>
        </div>
      )
}

export default PreviewReceta