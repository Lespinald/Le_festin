import React, { useEffect, useState } from "react";
import { memo, SVGProps } from 'react';
import "../Style/Review.css";


const Review = (props) => {
    const MAX_RATING = 5;
    const [rating, setRating] = useState(0);
    const roundedRating = Math.floor(rating); // Redondear hacia abajo

    useEffect(() => {
        fetch(`http://localhost:5000/api/review/promedio/id/${props.id}`)
        .then(response => response.json())
        .then(data => {
            const avgNumber = parseFloat(data[0].avg);
            console.log(avgNumber)
            setRating(avgNumber);});
    },[])

    return(
        <div className="Review">
            <div className="star-rating-container">
                {[...Array(MAX_RATING)].map((_, index) => (
                    <span key={index}>
                        <img src={index < roundedRating ? '../../public/Star_Filled.png' : '../../public/Star.png'} alt="star" className="star-image"/>
                    </span>
                ))}
            </div>
            <div className="promedio-container">
                {!isNaN(rating) ? rating : ''}
            </div>
            <div className="boton-container">
                <button className="boton-calificar">
                    Calificar
                </button>
            </div>
        </div>
    )
}

export default Review