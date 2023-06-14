import React from "react";
import VentanaPrincipal from "./pages/VentanaPrincipal";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import NotfoundPage from "./pages/NotfoundPage";
import ViewReceta from "./pages/ViewReceta";
import ViewPreguntasSugerencias from "./pages/ViewPreguntasSugerencias";
import ViewPerfil from "./pages/ViewPerfil"
import PublicaReceta from "./pages/PublicarReceta"
import Banner from "./Components/banner/Banner";
import { useSelector } from "react-redux";

const AppPriv = () => {

  const status = useSelector((state) => state.auth.status === "authenticated");
  console.log("🚀 ~ file: AppPriv.jsx:24 ~ AppPriv ~ status:", status)

  if(!status){
    return <Navigate to="/receta"/>
  }

  return (
    <>
      <Routes>
        <Route path="perfil" element={<ViewPerfil />} />
        <Route path="publicarReceta" element={<PublicaReceta/>}/>
        <Route path="favoritos" element={<VentanaFavoritos />} />
        <Route path="/*" element={<Navigate to="/my/perfil"/>}/>
      </Routes>
    </>
  );
};

export default AppPriv;
