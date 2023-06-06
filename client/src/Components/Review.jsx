import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { memo, SVGProps } from 'react';
import "../Style/Review.css";
//import { use } from "../../../server/routes/routes";



const Review = (props) => {
    const info = useSelector((state) => state.auth)
    const id_usuario = info?.uid
    const id_receta = props.id
    const linkUrl = encodeURI(window.location.href);/*Link de la pagina al subir a un host se copia el link actual*/
    const msg = 'Deberías ver esta receta :D'; /*Plantilla de texto al compartir*/ 


    const MAX_RATING = 5;
    const [rating, setRating] = useState(0);
    const roundedRating = rating.toFixed(1); // Redondear 1 decimal
    const [mostrarVentana, setMostrarVentana] = useState(false);
    const [selectedStars, setSelectedStars] = useState(1);
    const [mostrarVentanaCompartir, setMostrarVentanaCompartir] = useState(false);
    const [verificacion, setVerificacion] = useState();

    const copyCompartir = ()=>{ /*Copiar al portapapeles el link*/
        navigator.clipboard.writeText(linkUrl)
    }
    const compartirFB = ()=>{ /*compartir en facebook*/

        window.open(`https://www.facebook.com/share.php?u=${linkUrl}`)
    }
    const compartirTwitter = ()=>{
        window.open(`http://twitter.com/share?&url=${linkUrl}&text=${msg}&hashtags=javascript,programming`)
    }
    const compartirWhatsapp = ()=>{
        window.open(`https://api.whatsapp.com/send?text=${msg}: ${linkUrl}`)
    }


    const abrirVentanaCompartir = () => {
        setMostrarVentanaCompartir(true);
    }   
    const cerrarVentanaCompartir = () => {
        setMostrarVentanaCompartir(false);
    }

    const abrirVentana = () => {
        verificacionReview();
        setMostrarVentana(true);
    }

    const cerrarVentana = () =>{
        setMostrarVentana(false);
    }

    const handleStarClick = (index) => {
        if(!verificacion){
            setSelectedStars(index + 1);
        }
    };


    useEffect(() => {
        fetch(`https://lefestin.onrender.com/api/review/promedio/id/${id_receta}`)
        .then(response => response.json())
        .then(data => {
            const avgNumber = parseFloat(data[0].avg);
            console.log(avgNumber)
            setRating(avgNumber);});
    },[])

    const calificarReceta = () => {
        

        fetch(`https://lefestin.onrender.com/api/review/crearReview`,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id_usuario: id_usuario, id_receta: props.id , review: selectedStars})
        })
        .then(respuesta => {
            if(respuesta.ok){
                alert("Calificaste esta receta con " + selectedStars)
            }else if(id_usuario==null){
                alert("Debes iniciar sesión para calificar")
            }else{
                alert("No se puedo calificar")
            }
        })
        .catch(error =>
            alert(error.message))
    }

    const verificacionReview = () => {
        fetch(`https://lefestin.onrender.com/api/review/verificar/${id_usuario}/${id_receta}`)
        .then(response => response.json())
        .then(datos => setVerificacion(datos));
        
        fetch(`https://lefestin.onrender.com/api/review/usuarioRecetaID/${id_usuario}/${id_receta}`)
        .then(response => response.json())
        .then(data => {
            const review = parseFloat(data[0].review);
            setSelectedStars(review);
        });
    }


    return(
        <div className="Review">
            <div className="star-rating-container">
                {[...Array(MAX_RATING)].map((_, index) => (
                    <span key={index}>
                        <img src={index < Math.floor(roundedRating) ? "Star_Filled.png" : "Star.png"} alt="star" className="star-image"/>
                    </span>
                ))}
            </div>
            <div className="promedio-container">
                {!isNaN(roundedRating) ? roundedRating : ''}
            </div>
            

            <div className="boton-container">
                <button className="boton-calificar" onClick={abrirVentana}>
                    Calificar
                </button>
            </div>
            {mostrarVentana && (
                <div className="ventana-emergente-review">
                    <div className="contenido-ventana-review">
                        <div className="container-boton-cerrar">
                            <button className="boton-cerrar-review" onClick={cerrarVentana}>
                                <svg width="50px" height="50px" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 27L26 9M9 9L26 27M18 2C26.8366 2 34 9.16344 34 18C34 26.8366 26.8366 34 18 34C9.16344 34 2 26.8366 2 18C2 9.16344 9.16344 2 18 2Z" stroke="black" strokeWidth="2.5"/>
                                </svg>
                            </button>
                        </div>
                        <div className="container-stars">
                            <div className="star-rating-container-ventana">
                                {[...Array(MAX_RATING)].map((_, index) => (
                                    <img
                                    key={index}
                                    src={index < selectedStars ? "Star_Filled.png" : "Star.png"}
                                    alt="star"
                                    className="star-image-selector"
                                    onClick={() => handleStarClick(index)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="container-boton-calificar">
                            {!verificacion ?(
                                <button className="boton-calificar-ventana" onClick={calificarReceta}>
                                    Calificar
                                </button>
                            ) : (
                                <h2>
                                    Calificaste la receta con {selectedStars}
                                </h2>
                            )}
                        </div>
                    </div>
                </div>
            )}
            <div className="boton-container-compartir">
                <button className="boton-compartir" onClick={abrirVentanaCompartir}>
                    <i class="fas fa-share-alt"></i>
                </button>
            </div>
            {mostrarVentanaCompartir && (
                <div className="ventana-emergente-compartir">
                    <div className="contenido-ventana-review">
                        <div className="container-boton-cerrar">
                            <button className="boton-cerrar-review" onClick={cerrarVentanaCompartir}>
                                <svg width="50px" height="50px" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 27L26 9M9 9L26 27M18 2C26.8366 2 34 9.16344 34 18C34 26.8366 26.8366 34 18 34C9.16344 34 2 26.8366 2 18C2 9.16344 9.16344 2 18 2Z" stroke="black" strokeWidth="2.5"/>
                                </svg>
                            </button>
                        </div>
                        <div className="container-socialnet">
                            <button className="boton-social" onClick={compartirWhatsapp} >
                            <i class="fab fa-whatsapp"></i>
                            </button>
                            <button className="boton-social" onClick={compartirFB}>
                            <i class="fab fa-facebook-f"></i>
                            </button>
                            <button className="boton-social" onClick={compartirTwitter}>
                            <i class="fab fa-twitter"></i>
                            </button>
                        </div>
                        <div className="link-container">
                            <p class="link">{linkUrl}</p>
                        </div>
                        <div className="container-boton-copiar">
                            <button className="copy-btn" onClick={copyCompartir}><span>Copiar</span></button>
                        </div>
                    </div>
                </div>
            )}

        </div>

        
    )
}

export default Review