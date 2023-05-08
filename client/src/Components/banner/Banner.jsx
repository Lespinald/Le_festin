// import React, { useState } from "react";
import { useState } from "react";
import "../../Style/Banner.css";
// import { useDispatch, useSelector } from "react-redux";
// import { startGoogleSignIn } from "../../store/auth/thunks";
import { Link, NavLink } from 'react-router-dom';

const Banner = () => {
  // const dispatch = useDispatch();
  // const info = useSelector((state) => state.auth);
  // const [Validate, setValidate] = useState(true);

  // const BeginSesion = async () => {
  //   await dispatch(startGoogleSignIn());
  //   setValidate(info?.status === "authenticated");
  // };

  const [UserName, setUserName] = useState('Nombre de usuario');
  //setUserName("Nombre de usuario")

  return (
    <nav className="Home">
            <NavLink to="/receta">
          <button className="TitleApp">
            Le Festin
          </button>
        </NavLink>
        <a className="imagenQA" href="/preguntas&sugerencias">
          <img src="./Comment_icon.png" className="image"  />
        </a>
        <NavLink to="/perfil">
      <button className="ButtonPerfil"> 
        <img src="./icon_guest.png" className="ImageUser"/>
        
          {UserName}
      </button>
      </NavLink>
    </nav>
  );
};

export default Banner;
