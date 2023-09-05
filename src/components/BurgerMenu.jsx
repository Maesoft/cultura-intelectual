import {React, useState} from 'react'
import '../styles/BurgerMenu.css'
const BurgerMenu = () => {
    const [visibility, setVisibility]=useState(false);

    const toggleVisibility=()=>{
        setVisibility(!visibility)
    }

  if(!visibility){
    return(
    <div className="burger-icon" onClick={toggleVisibility}>
    Menu Cerrado
    </div>
  )}else{  
  return(
  <div className="burger-bar" onClick={toggleVisibility}>
    Menu Abierto
  </div>
  )}
}

export default BurgerMenu