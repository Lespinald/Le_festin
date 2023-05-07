import React, { useEffect, useState } from "react";
import "../Style/ViewPreguntasSugerencias.css";
import { datosPreguntas } from "../DataPruebas/Preguntas&Sugerencias";
import { useSelector } from 'react-redux'

const ViewPreguntasSugerencias = () => {
  const [seleccion, setSeleccion] = useState("");
  const [pregunta, setPregunta] = useState("");
  const [preguntas, setPreguntas] = useState([])
  const info = useSelector((state) => state.auth);
  
  useEffect(() => {
    fetch('http://localhost:5000/api/preguntasSugerencias')//ruta de la api
    .then(respuesta => respuesta.json())
    .then(datos => setPreguntas(datos)); // guardar las preguntas en el estado
  }, [])
  
  useEffect(() => {
  },[preguntas])

  const handleSeleccion = (e) => {
    setSeleccion(e.target.value);
  };

  const handleTextarea = (e) => {
    setPregunta(e.target.value);
  };
  
  const handleEnviar = () => {
    if(seleccion !== "" && pregunta !== ""){
      const nuevaPregunta = {
        ID_Pregunta: '1',
        ID_usuario: "123",
        textoPregunta: pregunta,
        type: seleccion,
        respuesta: null,
        userName: "jcarrenoar@unal.edu.co",
      }
      setPregunta('')
      setSeleccion('')
    }else{
      alert("Complete todos los campos.")
    }
  };

  return (
    <div className="pagina">
      <div className="Card">
        <div className="head">
          <p className="title">Preguntas o Sugerencias</p>
          <a className="imagenContainer" href="/receta">
            <img src="./xButton.png" className="imagen" />
          </a>
        </div>
        <div className="content">
          <ul className="lista">
            {preguntas?.map((element,index) => (
              <li key={index}>
                <p>
                  {element.tipo === "P" ? "Pregunta: " : "Sugerencia: "}
                  {element.textopregunta}
                </p>
                {element.tipo === "P" && (
                  <ul>
                    <li>
                      {element.textorespuesta === null
                        ? "Aún no hay respuesta"
                        : element.textorespuesta}
                    </li>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="areaInput">
        <textarea
          placeholder="Ingrese su pregunta/sugerencia"
          className="entradaPregunta"
          onChange={handleTextarea}
          value={pregunta}
        ></textarea>
        <div
          style={{ display: "flex", flexDirection: "column", marginLeft: "1%" }}
        >
          <select onChange={handleSeleccion} className="typeSelection" value={seleccion}>
            <option value={""} style={{fontFamily:"Maven Pro", fontSize:"20px"}}>Seleccione Una</option>
            <option value={"P"}  style={{fontFamily:"Maven Pro", fontSize:"20px"}}>Pregunta</option>
            <option value={"S"}  style={{fontFamily:"Maven Pro", fontSize:"20px"}}>Sugerencia</option>
          </select>
          <button className="enviarButton" onClick={handleEnviar}>
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewPreguntasSugerencias;
