import React, { useState } from "react";
import "../Style/GUI_Ingredientes.css";
import data from './Json/ingredientes.json'

const Ingredientes = () => {
  const [search_ingrediente, set_search_Ingrediente] = useState('');//string para la busqueda (no tiene uso aún)
  const [ingrediente, set_Ingrediente] = useState('');//string para ingrediente al que se le da click (no tiene uso aún)
  const [ingredientes_elegidos, set_Ingredientes_Elegidos] = useState([]);//array de los ingredientes elegidos
  const [seleccionado, setSeleccionado] = useState(false);

  console.log(search_ingrediente)

  function seleccionarIngrediente(value) {//funcion para agregar al array ingredientes_elegidos los ingredientes seleccionados, recibe un string value
    set_Ingrediente(value)
    setSeleccionado(!seleccionado);
    if (!ingredientes_elegidos.includes(value)){//condicion para que no se repitan ingredientes selccionados
      set_Ingredientes_Elegidos(ingredientes_elegidos.concat(value))
    }
  }

  function deseleccionarIngrediente(value) {//funcion para deseleccionar, osea elimnar el ingrediente del arrey ingredientes_elegidos
    console.log(value)
    const indice = ingredientes_elegidos.indexOf(value);
    console.log(indice)
    const nuevaLista = [...ingredientes_elegidos];
    nuevaLista.splice(indice, 1);
    set_Ingredientes_Elegidos(nuevaLista);
  }

  console.log(ingrediente)
  console.log(ingredientes_elegidos)

  return (
    <div className="INGREDIENTES">
      
      {/*Apartado de la barra de busqueda------------------------------------ */}
      <section className="componente_busqueda">
        <input type="text" placeholder="Buscar ingredientes" className="barra_busqueda" onChange={(e) => {set_search_Ingrediente(e.target.value)}} />
        <img src="lupa_icon.png" className="lupa_icon" />
      </section>
      {/*Apartado de los ingredientes que se seleccionaron------------------- */}
      <section className="componente_elegidos">
        <h3 className="text_ingredientes_elegidos">
          Ingredientes seleccionados:
        </h3>
        <div className="componente_elegidos_grid">
          {ingredientes_elegidos.length === 0 && (
            <p className="mensaje_Ingredientes">Escoge los ingredientes</p>
          )}
          {ingredientes_elegidos.length > 0 && (
            <div className="grid-container_elegidos">
              {ingredientes_elegidos.map((ingrediente, index) => (
                <button key={index} className="grid-item_elegido" onClick={() => deseleccionarIngrediente(ingrediente)}>
                  {ingrediente}
                  <img src="../../public/x.png" alt="imagen" class="imagen-hover"></img>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
      {/*Apartado de los ingredientes para su selección----------------------*/}
      <section className="componente_Ingredientes">
        <div className="grid-container_ingredientes">
          {data.ingredientes.map((ingrediente) => (
            <button key={ingrediente.nombre} className="grid-item_ingrediente" onClick={() => seleccionarIngrediente(ingrediente.nombre)}>
              {ingrediente.nombre}
              <img src={ingrediente.imagen} className="imagen_Ingrediente"/>
            </button>
          ))}
        </div>
      </section>
    </div>
    
  )
}

export default Ingredientes
