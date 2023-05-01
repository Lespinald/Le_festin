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
                    <img src="/Le_festin/client/public/Google Icon.png" alt="Hola"/>
                </div>
                <div className="MRTextos">
                    <h1 style={{fontSize:"20px"}}>Descripción Corta:</h1>
                    <p>
                        {props.descripcionreceta}
                    </p>
                </div>
            </div>
        </div>
      )
}

export default PreviewReceta