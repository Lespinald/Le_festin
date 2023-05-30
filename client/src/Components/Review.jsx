import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { memo, SVGProps } from 'react';
import "../Style/Review.css";


const Review = (props) => {
    const info = useSelector((state) => state.auth)
    const id_usuario = info?.uid

    const MAX_RATING = 5;
    const [rating, setRating] = useState(0);
    const roundedRating = rating.toFixed(1); // Redondear 1 decimal
    const [mostrarVentana, setMostrarVentana] = useState(false);
    const [selectedStars, setSelectedStars] = useState(1);

    const abrirVentana = () => {
        setMostrarVentana(true);
    }

    const cerrarVentana = () =>{
        setMostrarVentana(false);
    }

    const handleStarClick = (index) => {
        setSelectedStars(index + 1);
    };

    useEffect(() => {
        fetch(`http://localhost:5000/api/review/promedio/id/${props.id}`)
        .then(response => response.json())
        .then(data => {
            const avgNumber = parseFloat(data[0].avg);
            console.log(avgNumber)
            setRating(avgNumber);});
    },[])

    const calificarReceta = () => {
        fetch(`http://localhost:5000/api/review/crearReview`,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id_usuario: id_usuario, id_receta: props.id , review: selectedStars})
        })
        .then(respuesta => {
            if(respuesta.ok){
                alert("Calificaste esta receta con" + selectedStars)
            }else if(id_usuario==null){
                alert("Debes iniciar sesión para calificar")
            }else{
                alert("No se puedo calificar")
            }
        })
        .catch(error =>
            alert(error.message))
    }

    return(
        <div className="Review">
            <div className="star-rating-container">
                {[...Array(MAX_RATING)].map((_, index) => (
                    <span key={index}>
                        <img src={index < Math.floor(roundedRating) ? '../../public/Star_Filled.png' : '../../public/Star.png'} alt="star" className="star-image"/>
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
                                    src={index < selectedStars ? '../../public/Star_Filled.png' : '../../public/Star.png'}
                                    alt="star"
                                    className="star-image-selector"
                                    onClick={() => handleStarClick(index)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="container-boton-calificar">
                            <button className="boton-calificar-ventana" onClick={calificarReceta}>
                                Calificar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Review