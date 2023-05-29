import React, { useEffect, useState } from "react";
import '../Style/Comentarios.css'



const Comentarios = (props) => {
    const [Comentarios,set_Comentarios] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/api/comentarios')
            .then(response => response.json())
            .then(datos => set_Comentarios(datos))
        console.log(Comentarios);
    }

    ) 
    return(
        <>
            {/*<div style={{margin: "0 1rem 0 0"}}>Ingredientes</div>
            <div className='IngredientScrollable'>
                {
                Comentarios.map(
                    (e, i) => (<div key={i}>
                    <button className="grid-item_ingrediente">
                        {e.nombre}
                        <img src={e.imagen} className="imagen_Ingrediente"/>
                    </button>
                    <div style={{marginTop: "0.75rem"}}></div>
                    </div>)
                )
                }
            </div>*/}
        </>
    )
}

export default Comentarios