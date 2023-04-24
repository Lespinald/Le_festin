import React, { useState } from "react";
import "../Style/GUI_Ingredientes.css";
import data from './Json/ingredientes.json'
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";

const Ingredientes = () => {
  const [search_ingrediente, set_search_Ingrediente] = useState('');
  const [ingrediente, set_Ingrediente] = useState('');

  console.log(search_ingrediente)

  function elegirIngrediente(value) {
    set_Ingrediente(value)
  }
  console.log(ingrediente)

  return (
    <div >
      <div className="componente_busqueda">
        <input 
          type="text" 
          placeholder="Buscar ingredientes" 
          className="barra_busqueda" 
          onChange={(e) => {
            set_search_Ingrediente(e.target.value)
          }}
        />
        <img 
          src="lupa_icon.png" 
          className="lupa_icon" 
        />
      </div>
      <div className="componente_Ingredientes">
        <div className="grid-container">
          {data.ingredientes.map((ingrediente) => (
            <button key={ingrediente.nombre} className="grid-item" onClick={() => elegirIngrediente(ingrediente.nombre)}>{ingrediente.nombre}</button>
          ))}
        </div>
      </div>
    </div>
    
  )
}

export default Ingredientes
