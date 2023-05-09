import { useEffect, useState } from "react";
import "../../Style/Banner.css";
import { useDispatch, useSelector } from "react-redux";
import { startGoogleSignIn } from "../../store/auth/thunks";
import { Link, NavLink } from 'react-router-dom';

const Banner = () => {
  const dispatch = useDispatch();
  const info = useSelector((state) => state.auth);
  // const page = useSelector((state) => state.page);
  
  const BeginSesion = async () => {
    await dispatch(startGoogleSignIn());
  };


  const Register = async () => {
    //Funcion verificar si ya existe para condicionar
    await dispatch(startGoogleSignIn());
  };
  
  

  const [UserName, setUserName] = useState('');
  //setUserName("Nombre de usuario")

  return (
    <nav className="Home">
      <NavLink to="/receta">
        <button className="TitleApp">
          Le Festin
        </button>
      </NavLink>
      <NavLink to={'/preguntas&sugerencias'}>
        <a className="imagenQA">
          <img src="./Comment_icon.png" className="image"  />
        </a>      
      </NavLink>
      { info?.status !== "authenticated" ?
      <div>
        <button className="ButtonBeginSesion" onClick={BeginSesion}>
          <img src="./Google Icon.png" className="GoogleIconButton"/>
          <p className="TitleButton"> Iniciar Sesión </p>
        </button>
        <button className="ButtonRegister" onClick={Register}>
          Registrarse
        </button>
      </div> : 
      <div>
        <NavLink to={"/favoritos"}>
          <a className="imagenFV">
            <img src="./FavoritiesIcon.png" className="image"  />
          </a>
        </NavLink>
        <NavLink to="/perfil">
          <button className="divIconoAuthenticated"> 
            <img src="./icon_guest.png" className="ImageUser"/>
            <p className="displayNameUser">{info?.displayName}</p>  
          </button>
        </NavLink>
      </div>
      }
    </nav>
  );
};

export default Banner;
