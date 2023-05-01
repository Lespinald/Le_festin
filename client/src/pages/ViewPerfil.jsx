import React, { useState } from "react";
import { useSelector } from 'react-redux'
import "../Style/ViewPerfil.css";
import PreviewReceta from "../Components/PreviewReceta";


const ViewPerfil= () => {
    return(
        <div>
            <div className="ZonaInferior">
                <div className="InfIzq">
                    <div className="Busqueda">
                        <p>Mis Recetas</p>
                    </div>
                    <PreviewReceta tituloreceta="Changua" descripcionreceta="Hola changua"/>
                </div>
            </div>
        </div>
            
    )
}


export default ViewPerfil