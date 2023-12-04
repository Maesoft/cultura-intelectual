import React from 'react';
import logo from '../assets/logo.png'
import back from '../assets/back.png'
import '../styles/NavSecun.css'
import { Link } from 'react-router-dom';

const NavSecun = () => {



    return (
        <>
        <div className='cont-nav'>
            <Link to="/"><img className='img-back' src={back} alt="home" /></Link>
            <Link to="/"><img className='img-logo' src={logo} alt=" logo" /></Link>
        </div>
        </>
    );
};

export default NavSecun;