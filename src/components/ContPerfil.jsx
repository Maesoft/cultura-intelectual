import React from 'react';
import logo from '../assets/logo.png'
import '../styles/ContPerfil.css'

const ContPerfil = () => {



    return (
        <>
            <div className='contUs'>
                <img className='imgUs' src={logo} alt="" />
                <a className='linkUs' href="http://localhost:5173/you">Ver Perfil</a>
            </div>
        </>
    );
};

export default ContPerfil;