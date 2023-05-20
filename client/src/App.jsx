import React, { useEffect, useState } from "react";
import VentanaPrincipal from "./pages/VentanaPrincipal";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import NotfoundPage from "./pages/NotfoundPage";
import ViewReceta from "./pages/ViewReceta";
import ViewPreguntasSugerencias from "./pages/ViewPreguntasSugerencias";
import ViewPerfil from "./pages/ViewPerfil"
import PublicaReceta from "./pages/PublicarReceta"
import Banner from "./Components/banner/Banner";

const App = () => {
  // En este componente se declaran las rutas y hay un ejemplo con el state error para probar la navegacion 
  /*
  useEffect(() => {
     fetch('http://localhost:5000/users')//Este código obtiene la lista de usuarios de prueba en el json de la API y la muestra en la consola.
       .then(response => response.json())
       .then(users => console.log(users));
  })*/

  return (
    <>
      <BrowserRouter>
        <Banner/>
        <Routes>
        
        <Route path="/receta" element={<VentanaPrincipal/>}/>

        <Route path="/receta/:recetaid" element={<ViewReceta/>}/>

        <Route path="/preguntas&sugerencias" element={<ViewPreguntasSugerencias/>}/>

        <Route path="/perfil" element={<ViewPerfil/>}/>

        <Route path="/publicarReceta" element={<PublicaReceta/>}/>

        <Route path="/error" element={<NotfoundPage/>}/>
        
        <Route path="*" element={<NotfoundPage/>}/>

        <Route path="/" element={<Navigate to="/receta"/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
