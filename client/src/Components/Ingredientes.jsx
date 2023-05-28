import React, { useEffect, useState } from "react";
import "../Style/GUI_Ingredientes.css";

const Ingredientes = (props) => {
  const [search_ingrediente, set_search_Ingrediente] = useState('');//string para la busqueda (no tiene uso aún)
  const [ingrediente, set_Ingrediente] = useState('');//string para ingrediente al que se le da click (no tiene uso aún)
  const [ingredientes, set_Ingredientes] = useState([]);// array para almacenar los ingredientes de la base de datos
  const [seleccionado, setSeleccionado] = useState(false);

  console.log(search_ingrediente)

  useEffect(() => {
    if(search_ingrediente == ""){
      fetch('http://localhost:5000/api/ingredientes')//ruta de la api
        .then(response => response.json())
        .then(datos => set_Ingredientes(datos)); // guardar los ingredientes en el estado
    }else{
      fetch('http://localhost:5000/api/ingredientes/busquedaNombre/' + search_ingrediente)//ruta de la api + la busqueda
      .then(response => response.json())
      .then(datos => set_Ingredientes(datos)); // guardar los ingredientes en el estado
    }
  }, [search_ingrediente]);

  function seleccionarIngrediente(value) {//funcion para agregar al array props.ingredientesSeleccionados los ingredientes seleccionados, recibe un string value
    set_Ingrediente(value)
    setSeleccionado(!seleccionado);
    if (!props.ingredientesSeleccionados.includes(value)){//condicion para que no se repitan ingredientes selccionados
      props.setIngredientesSeleccionados(props.ingredientesSeleccionados.concat(value))
    }
  }

  function deseleccionarIngrediente(value) {//funcion para deseleccionar, osea elimnar el ingrediente del arrey props.ingredientesSeleccionados
    console.log(value)
    const indice = props.ingredientesSeleccionados.indexOf(value);
    console.log(indice)
    const nuevaLista = [...props.ingredientesSeleccionados];
    nuevaLista.splice(indice, 1);
    props.setIngredientesSeleccionados(nuevaLista);
  }


  console.log(ingrediente)
  console.log(props.ingredientesSeleccionados)

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
          {props.ingredientesSeleccionados.length === 0 && (
            <p className="mensaje_Ingredientes">Escoge los ingredientes</p>
          )}
          {props.ingredientesSeleccionados.length > 0 && (
            <div className="grid-container_elegidos">
              {props.ingredientesSeleccionados.map((ingrediente, index) => (
                <button key={index} className="grid-item_elegido" onClick={() => deseleccionarIngrediente(ingrediente)}>
                  {ingrediente}
                  <img src="../../public/x.png" alt="imagen" className="imagen-hover"></img>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
      {/*Apartado de los ingredientes para su selección----------------------*/}
      <section className="componente_Ingredientes">
        <div className="grid-container_ingredientes">
          {ingredientes.map((ingrediente) => (
            <button key={ingrediente.id_ingrediente} className="grid-item_ingrediente" onClick={() => seleccionarIngrediente(ingrediente.nombre)}>
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
