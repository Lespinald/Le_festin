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
            <NavLink to="/receta">
          <button className="TitleApp">
            Le Festin
          </button>
        </NavLink>
        <NavLink to="/preguntas&sugerencias">
          <button className="ButtonBeginSesion">
            Preguntas y Sugerencias
          </button>
        </NavLink>
    </nav>
  );
};

export default Banner;
