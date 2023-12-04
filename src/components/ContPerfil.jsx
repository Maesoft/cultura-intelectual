import React from 'react';
import logo from '../assets/logo.png'
import '../styles/ContPerfil.css'
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ContPerfil = ( {img}) => {

    const { logout } = useAuth();
    const handleLogout = () => {
        window.location.reload()
      };
const imagen = img
    return (
        <>
            <div className='contUs'>
                <img className='imgUs' src={imagen} alt="" />
                <Link  to="/you">Ver perfil</Link>
                <a onClick={handleLogout}>Cerrar Sesion</a>
            </div>
        </>
    );
};

export default ContPerfil;