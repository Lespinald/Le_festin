// import React, { useState } from "react";
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

  return (
    <nav className="Home">
        <p className="TitleApp">Le Festin</p>
        <NavLink to="/preguntas&sugerencias">
          <button className="ButtonBeginSesion">
            Preguntas y Sugerencias
          </button>
        </NavLink>
        <NavLink to="/perfil">
          <button className="ButtonPerfil">
            Perfil
          </button>
        </NavLink>
    </nav>
  );
};

export default Banner;
