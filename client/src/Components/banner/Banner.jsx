import React from "react";
import "../../Style/Banner.css";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { startGoogleSignIn } from "../../store/auth/thunks";

const Banner = () => {
  const dispatch = useDispatch();
  const info = useSelector(state => state.auth);
  const [BeginModal, setBeginModal] = useState(false);
  const [Validate, setValidate] = useState(true)

  const BeginSesion = async () => {
    await dispatch(startGoogleSignIn())
    ModalClose();
    setValidate(info?.status === "authenticated")
  };

  const ModalOpen = () => {
    setBeginModal(true);
  };

  const ModalClose = () => {
    setBeginModal(false);
  };

  return (
    <>
      <div className="Home" />
      <div className="TitleApp">Titulo de Pagina</div>
      <button className="ButtonUser" onClick={ModalOpen}>
        <img src="icon_guest.png" className="IconGuest" />
        <p className="UserName">{info?.displayName}</p>
      </button>
      {Validate && <Modal
        open={BeginModal}
        onCancel={ModalClose}
        footer={null}
        centered={true}
        className="modalStyle"
      >
        <button onClick={BeginSesion} className="ButtonBeginSesion">
          <img src="Google Icon.png" className="GoogleIconButton"/>
          <p className="TitleButton">Iniciar Sesión</p>
        </button>
        <button onClick={BeginSesion} className="ButtonRegister">
          Registrarse
        </button>
      </Modal>}
      <div/>
    </>
  );
};

export default Banner;
