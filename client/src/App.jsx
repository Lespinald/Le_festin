import React, { useState } from "react";
import VentanaPrincipal from "./pages/VentanaPrincipal";
import { Navigate, Route, Routes } from 'react-router-dom'
import NotfoundPage from "./pages/NotfoundPage";
import ViewReceta from "./pages/ViewReceta";

const App = () => {
  // En este componente se declaran las rutas y hay un ejemplo con el state error para probar la navegacion 
  const [error, setError] = useState(true)

  return (
    <>
      <Routes>
        
        <Route path="/receta" element={error ? <VentanaPrincipal setError={setError}/> : <Navigate to="/error"/>}/>

        <Route path="/receta/*" element={<ViewReceta/>}/>

        <Route path="/error" element={<NotfoundPage/>}/>
        
        <Route path="*" element={<NotfoundPage/>}/>

        <Route path="/" element={<Navigate to="/receta"/>}/>
      </Routes>
    </>
  );
};

export default App;
