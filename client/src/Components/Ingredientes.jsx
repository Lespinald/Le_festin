import React, { useState } from "react";
import "../Style/GUI_Ingredientes.css";
import data from './Json/ingredientes.json'

const Ingredientes = () => {
  const [search_ingrediente, set_search_Ingrediente] = useState('');//string para la busqueda (no tiene uso aún)
  const [ingrediente, set_Ingrediente] = useState('');//string para ingrediente al que se le da click (no tiene uso aún)
  const [ingredientes_elegidos, set_Ingredientes_Elegidos] = useState([]);//array de los ingredientes elegidos

  console.log(search_ingrediente)

  function seleccionarIngrediente(value) {//funcion para agregar al array ingredientes_elegidos los ingredientes seleccionados, recibe un string value
    set_Ingrediente(value) //el valor 
    if (!ingredientes_elegidos.includes(value)){//condicion para que no se repitan ingredientes selccionados
      set_Ingredientes_Elegidos(ingredientes_elegidos.concat(value))
    }
  }
  console.log(ingrediente)
  console.log(ingredientes_elegidos)

  return (
    <div>
      {/*Apartado de la barra de busqueda------------------------------------ */}
      <section className="componente_busqueda">
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
      </section>
      {/*Apartado de los ingredientes que se seleccionaron------------------- */}
      <section className="componente_elegidos">
        <h2 className="text_ingredientes_elegidos">
          Ingredientes seleccionados:
        </h2>
        <div className="componente_elegidos_grid">
          <div className="grid-container_elegidos">
            {ingredientes_elegidos.map((ingrediente, index) => (
              <div key={index} className="grid-item_elegido">
                {ingrediente}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*Apartado de los ingredientes para su selección---------------------- */}
      <section className="componente_Ingredientes">
        <div className="grid-container_ingredientes">
          {data.ingredientes.map((ingrediente) => (
            <button key={ingrediente.nombre} className="grid-item_ingrediente" onClick={() => seleccionarIngrediente(ingrediente.nombre)}>
              {ingrediente.nombre}
            </button>
          ))}
        </div>
      </section>
    </div>
    
  )
}

export default Ingredientes
