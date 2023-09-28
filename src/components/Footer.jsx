import React from 'react'
import '../styles/footer.css'
import facebook from '../assets/facebook_icon.svg'
import instagram from '../assets/Instagram_icon.png'
import whatsapp from '../assets/WhatsApp_icon.png'
import logo from '../assets/logo.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='col33'>
        <h4>Redes Sociales</h4>
            <div>
            <img src={facebook}/>
			<img src={instagram}/>
            <img src={whatsapp}/>
            </div>
        </div>
        <div className='col33'>
        <img src={logo}/>
        <h3> Copyrigth © 2023 - Cultura Intelectual Team</h3>
        </div>
        <div className='col33'>
            <a href="#">Iniciar Sesion</a>
            <a href="#">Crear Cuenta</a>
            <a href="#">Buscar Libro</a>
        </div>
    </div>
  )
}

export default Footer