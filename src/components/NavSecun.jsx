import React from 'react';
import logo from '../assets/logo.png'
import back from '../assets/back.png'
import '../styles/NavSecun.css'

const NavSecun = () => {



    return (
        <>
        <div className='cont-nav'>
            <a href="http://localhost:5173/"><img className='img-back' src={back} alt="home" /></a>
            <a href="http://localhost:5173/"><img className='img-logo' src={logo} alt=" logo" /></a>
        </div>
        </>
    );
};

export default NavSecun;