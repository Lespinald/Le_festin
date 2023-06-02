import React, { useEffect, useState } from "react";
import VentanaPrincipal from "./pages/VentanaPrincipal";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import NotfoundPage from "./pages/NotfoundPage";
import ViewReceta from "./pages/ViewReceta";
import ViewPreguntasSugerencias from "./pages/ViewPreguntasSugerencias";
import ViewPerfil from "./pages/ViewPerfil"
import PublicaReceta from "./pages/PublicarReceta"
import Banner from "./Components/banner/Banner";
import AppPriv from "./AppPriv";


const AppPublic = () => {
  return (
    <>
        <Routes>
        
        <Route path="/receta" element={<VentanaPrincipal/>}/>

        <Route path="/receta/:recetaid" element={<ViewReceta/>}/>

        <Route path="/preguntas&sugerencias" element={<ViewPreguntasSugerencias/>}/>

        <Route path="/" element={<Navigate to="/receta"/>}/>



        </Routes>
    </>
  );
};

export default AppPublic;
