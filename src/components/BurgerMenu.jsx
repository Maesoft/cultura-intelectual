import {React, useState} from 'react'
import '../styles/BurgerMenu.css'
import burgerIcon from '../assets/burger.svg'
import Categorias from './Categorias';
const BurgerMenu = ({children}) => {
    const [visibility, setVisibility]=useState(false);

    const toggleVisibility=()=>{
        setVisibility(!visibility)
    }

  if(!visibility)return (
  <div className="burger-icon" onClick={toggleVisibility}>
     <img src={burgerIcon} alt="Menu Hamburguesa"/>
  </div>)
  
  return(
  <div className="burger-bar">
      <button className='btnBurgerClose'onClick={toggleVisibility}>&#128502;</button>
      <div className='container'>
      <a id="logIn" href="#">Iniciar Sesion</a>
      <a id="createAccount" href="#">Crear Cuenta</a>
      </div>
      <p>Para acceder a mas funcionalidades, debes registrarte o iniciar sesion.</p>
     <div className='search-container'>
         <p>Buscar Libro</p>
        <input type="text" id="inputSearch" placeholder='Ingrese el titulo'/>
        <button className="btnBurgerBar" type="button">&#128269;</button>
      </div>
      {children}
  </div>
  )}


export default BurgerMenu