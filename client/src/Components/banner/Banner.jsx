import { useEffect, useState } from "react";
import "../../Style/Banner.css";
import { useDispatch, useSelector } from "react-redux";
import { startGoogleSignIn } from "../../store/auth/thunks";
import { Link, NavLink } from 'react-router-dom';
import { chekingCredentials, login, logout } from "../../store/auth/authslice";
import { guardar } from '../../store/infoUsuario/authslice';
import { signInWithGoogle } from "../../firebase/providers";

const Banner = () => {
  const dispatch = useDispatch();
  const [exist, setExist] = useState(false)
  const info = useSelector((state) => state.auth);
  // const page = useSelector((state) => state.page);
  
  const BeginSesion = async () => {
    dispatch(chekingCredentials())
    const result = await signInWithGoogle()
    fetch(`https://lefestin.onrender.com/api/usuarios/verificar/${result?.uid}`)
    .then(respuesta => {
      return respuesta.json()
    })
    .then(datos => {
        if(datos){
        dispatch(guardar(result))
        dispatch(login(result))
      }else{
        alert("El usuario no está registrado.")
        // dispatch(guardar({uid:result.user.uid,email:result.user.email,fecha:result.user.metadata.creationTime,displayName:result.user.displayName,photoUrl:result.user.photoURL,errorMessage:null}))
        dispatch(guardar(result))
        dispatch(logout())
      }
    }); 
  };


  const Register = async () => {
    dispatch(chekingCredentials())
    const result = await signInWithGoogle()
    
    fetch(`https://lefestin.onrender.com/api/usuarios/crear`,{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id_usuario: result.uid, username: result.displayName })
    })
    .then(respuesta => {
      if(!respuesta.ok){
        alert("Ya existe este usuario")

      }else{
        alert("Creado con exito, ya puedes inciar sesión.")
      }
    }).catch(error =>
      alert(error.message))
    dispatch(logout())
  };
  
  

  const [UserName, setUserName] = useState('');
  //setUserName("Nombre de usuario")

  return (
    <nav className="Home">
      <NavLink to="/receta" title="Página principal">
        <button className="TitleApp">
          LE FESTIN
        </button>
      </NavLink>
      <NavLink to={'/preguntas&sugerencias'} title="Preguntas y sugerencias">
        <a className="imagenQA">
          <img src="Comment_icon.png" className="image"  />
        </a>      
      </NavLink>
      { info?.status !== "authenticated" ?
      <div>
        <button className="ButtonBeginSesion" onClick={BeginSesion}>
          <img src="Google Icon.png" className="GoogleIconButton"/>
          <p className="TitleButton"> Iniciar Sesión </p>
        </button>
        <button className="ButtonRegister" onClick={Register}>
          Registrarse
        </button>
      </div> : 
      <div>
        <NavLink to="/my/publicarReceta" title="Publicar receta">
          <a className="imagenPublicar">
            <img src="plus.png" className="image" />
          </a>
        </NavLink>
        <NavLink to="/my/favoritos" title="Mis favoritos">
          <a className="imagenFV">
            <img src="FavoritiesIcon.png" className="image" />
          </a>
        </NavLink>
        <NavLink to="/my/perfil" title="Mis recetas">
          <button className="divIconoAuthenticated"> 
            <img src="icon_guest.png" className="ImageUser"/>
            <p className="displayNameUser">{info?.displayName}</p>  
          </button>
        </NavLink> 
        <button onClick={() => dispatch(logout())} title="Cerrar sesión">
            <img src="https://cdn.onlinewebfonts.com/svg/img_277163.png" className="ImageLogOut"/>
        </button>
      </div>
      }
    </nav>
  );
};

export default Banner;
