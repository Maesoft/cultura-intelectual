import React, { useState } from 'react';
import '../styles/BurgerMenu.css';
import burgerIcon from '../assets/burger.svg';
import ContPerfil from './ContPerfil';

const BurgerMenu = ({ children }) => {
  const [visibility, setVisibility] = useState(false);
  const [showProfile, setShowProfile] = useState(true);

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  if (!visibility) {
    return (
      <div className="burger-icon" onClick={toggleVisibility}>
        <img src={burgerIcon} alt="Menu Hamburguesa" />
      </div>
    );
  }

  return (
    <div className="burger-bar">
      <button className="btnBurgerClose" onClick={toggleVisibility}>
        &#128502;
      </button>
      <div className="container">
        {showProfile ? (
          <ContPerfil></ContPerfil>
        ) : (
          <a id="logIn" href="http://localhost:5173/login">
            Iniciar Sesión
          </a>
        )}
        {!showProfile && ( 
          <a id="createAccount" href="http://localhost:5173/register">
            Crear Cuenta
          </a>
        )}
      </div>
      <div className="s">{children}</div>
    </div>
  );
};

export default BurgerMenu;