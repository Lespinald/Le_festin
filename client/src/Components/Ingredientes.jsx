import React, { useState } from "react";
import "../Style/GUI_Ingredientes.css";
import data from './Json/ingredientes.json'

const Ingredientes = () => {
  const [search_ingrediente, set_search_Ingrediente] = useState('');
  const [ingrediente, set_Ingrediente] = useState('');
  const [ingredientes_elegidos, set_Ingredientes_Elegidos] = useState([]);

  console.log(search_ingrediente)

  function agregar_ingredientes(value) {
    set_Ingrediente(value)
    if (!ingredientes_elegidos.includes(value)){
      set_Ingredientes_Elegidos(ingredientes_elegidos.concat(value))
    }
  }
  console.log(ingrediente)
  console.log(ingredientes_elegidos)

  return (
    <div>
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
      <h2 className="text_ingredientes_elegidos">
        Ingredientes seleccionados:
      </h2>
      <div className="componente_elegidos">
        <div className="grid-container_elegidos">
          {ingredientes_elegidos.map((ingrediente, index) => (
            <div 
              key={index} 
              className="grid-item_elegido"
            >
              {ingrediente}
            </div>
          ))}
        </div>
      </div>
      <div className="componente_Ingredientes">
        <div className="grid-container_ingredientes">
          {data.ingredientes.map((ingrediente) => (
            <button 
              key={ingrediente.nombre} 
              className="grid-item_ingrediente" 
              onClick={() => agregar_ingredientes(ingrediente.nombre)}
            >
              {ingrediente.nombre}
            </button>
          ))}
        </div>
      </div>
    </div>
    
  )
}

export default Ingredientes
