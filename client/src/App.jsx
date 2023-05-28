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
import AppPublic from "./AppPublic";

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
      <Routes>
        <Route path="/my/*" element={<AppPriv/>}/>
        
        <Route path="/*" element={<AppPublic/>}/>

      </Routes>
    </>
  );
};

export default App;
