import React, { useState } from "react";
import { useSelector } from 'react-redux'
import "../Style/ViewPerfil.css";
import PreviewReceta from "../Components/PreviewReceta";
import data from "../Components/Json/recetas.json";


const ViewPerfil= () => {

    
    return(
        <div>
            <div className="ZonaInferior">
                <div className="InfIzq">
                    <div className="Busqueda">
                        <p>Mis Recetas</p>
                    </div>
                </div>
            </div>
        </div>
            
    )
}


export default ViewPerfil