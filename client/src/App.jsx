import React, { useState } from "react";
import VentanaPrincipal from "./pages/VentanaPrincipal";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import NotfoundPage from "./pages/NotfoundPage";
import ViewReceta from "./pages/ViewReceta";
import ViewPreguntasSugerencias from "./pages/ViewPreguntasSugerencias";
import ViewPerfil from "./pages/ViewPerfil"
import Banner from "./Components/banner/Banner";

const App = () => {
  // En este componente se declaran las rutas y hay un ejemplo con el state error para probar la navegacion 

  return (
    <>
      <BrowserRouter>
        <Banner/>
        <Routes>
        
        <Route path="/receta" element={<VentanaPrincipal/>}/>

        <Route path="/receta/*" element={<ViewReceta/>}/>

        <Route path="/preguntas&sugerencias" element={<ViewPreguntasSugerencias/>}/>

        <Route path="/perfil" element={<ViewPerfil/>}/>

        <Route path="/error" element={<NotfoundPage/>}/>
        
        <Route path="*" element={<NotfoundPage/>}/>

        <Route path="/" element={<Navigate to="/receta"/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
