import React, { useEffect, useState } from "react";
import '../Style/Comentarios.css'
import { useDispatch, useSelector } from "react-redux";



const Comentarios = (props) => {
    const info = useSelector((state) => state.auth)
    const id_usuario = info?.uid
    const [Comentario,set_Comentario] = useState('');
    const [Comentarios,set_Comentarios] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/api/comentarios/recetaid/${props.id}`)
            .then(response => response.json())
            .then(datos => set_Comentarios(datos))
    }
    )
    const CrearComentario = async () => {
        if(Comentario != ''){
            fetch(`http://localhost:5000/api/comentarios/crearComentario`,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
            body: JSON.stringify({ id_usuario: id_usuario, id_receta: props.id , comentario: Comentario})
            })
            .then(respuesta => {
                if(respuesta.ok){
                    alert("Comentario publicado")
                    form.value = "";
                    form.placeholder = "Ingrese su comentario aquí (Máximo 200 Caractéres)";
                    set_Comentario('')
        
                }else if(id_usuario==null){
                    alert("Debes iniciar sesión para comentar")
                }else{
                    alert("No se pudo publicar el comentario")
                }
            }).catch(error =>
                alert(error.message))
        }else{
            alert("El comentario no puede estar vacío")
        }
    }
    return(
        <>
            <div style={{margin: "0 1rem 0 0"}}><h2>Comentarios</h2></div>
            <div className='ComentariosScrollable'>
                {
                Comentarios.map(
                    (e, i) => (<div key={i}>
                    <div className="grid-item_comentario">
                        <div className="TituloComentario"><h2>{e.username}</h2></div>
                        <div className="ParrafoComentario"><p>{e.comentario}</p></div>
                    </div>
                    <div style={{marginTop: "0.75rem"}}></div>
                    </div>)
                )
                }
            </div>
            <div className="IngresarComentario">
                <textarea type="text" id="form" placeholder="Ingrese su comentario aquí (Máximo 200 Caractéres)" onChange={(e) => {set_Comentario(e.target.value)}}/>
                <button id="addButton" onClick={CrearComentario}>
                    Comentar
                </button>
            </div>
        </>
    )
}

export default Comentarios