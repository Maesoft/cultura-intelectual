import React, { useState } from 'react';
import '../styles/BurgerMenu.css';
import burgerIcon from '../assets/burger.svg';
import ContPerfil from './ContPerfil';
import { useAuth } from '../context/AuthContext';

const BurgerMenu = ({ children }) => {
  const  {authenticated,user} = useAuth()
  const [visibility, setVisibility] = useState(false);
  const [showProfile, setShowProfile] = useState(authenticated);
 console.log(authenticated)

  const toggleVisibility = () => {
    setVisibility(!visibility);
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
          <ContPerfil img={user.avatar}></ContPerfil>
        ) : (
          <a id="logIn" href="http://localhost:5173/login">
            Iniciar Sesión
          </a>
        )}
        {!showProfile && ( 
          <a id="createAccount" href="http://localhost:5173/register" >
            Crear Cuenta
          </a>
        )}
      </div>
      <div className="s">{children}</div>
    </div>
  );
};

export default BurgerMenu;