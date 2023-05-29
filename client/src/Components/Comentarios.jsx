import React, { useEffect, useState } from "react";
import '../Style/Comentarios.css'



const Comentarios = (props) => {
    const [Comentarios,set_Comentarios] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/api/comentarios/recetaid/${props.id}`)
            .then(response => response.json())
            .then(datos => set_Comentarios(datos))
    }
    ) 
    console.log(Comentarios)
    return(
        <>
            <div style={{margin: "0 1rem 0 0"}}><h2>Comentarios</h2></div>
            <div className='ComentariosScrollable'>
                {
                Comentarios.map(
                    (e, i) => (<div key={i}>
                    <div className="grid-item_comentario">
                        <div className="TituloComentario"><p>{e.username}</p></div>
                        <div className="ParrafoComentario"><p>{e.comentario}</p></div>
                    </div>
                    <div style={{marginTop: "0.75rem"}}></div>
                    </div>)
                )
                }
            </div>
            <div className="IngresarComentario">
                <textarea type="text" id="form" placeholder="Ingrese su comentario aquí"/>
                <button id="addButton">
                    Comentar
                </button>
            </div>
        </>
    )
}

export default Comentarios