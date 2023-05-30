import React, { useEffect, useState } from 'react'
import RecetaAmpliada from '../Components/viewReceta/RecetaAmpliada'
import { useParams } from 'react-router-dom'

const ViewReceta = (props) => {
  const id = useParams().recetaid;

  const [receta, setReceta] = useState({})
  const [ingredientes, setIngredientes] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/recetas/id/${id}`)//ruta de la api
    .then(response => response.json())
    .then(datos => setReceta(datos[0]))
  }, [id])

  useEffect(() => {
    fetch(`http://localhost:5000/api/ingredienteAsociado/recetaid/${id}`)//ruta de la api
    .then(response => response.json())
    .then(datos => {
      const arrayIngredientes = []
      datos.forEach(element => {
        arrayIngredientes.push(element.id_ingrediente);
      });
      setIngredientes(arrayIngredientes);
    })
  }, [id])

  return (
    <div className='label' style={{height: "calc(100% - 100px)"}}>
      <RecetaAmpliada receta={receta} ingredientes={ingredientes} id={id}/>
    </div>
  );
}

export default ViewReceta
