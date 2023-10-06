import {React, useState} from 'react'
import '../styles/User.css'
import NavSecun from './NavSecun'
import Footer from './Footer'
import logo from '../assets/logo.png'

const User = () => {

  return(
  <>
  
    
    <NavSecun></NavSecun>
      <div className='containerUser'>
        <div className='infoBox'>
            <div className='imgInfo'>
                <img className='imgEditUs' src={logo} alt="user Info" />
                <button className='btnEditImg'>Edit</button>
            </div>
            <div className='infoText'>
                <h4>Name: test</h4>
                <button>Edit</button>
                <h4>E-mail:</h4>
                <button>Edit</button>
                <h4>Contraseña:</h4>
                <button>Edit</button>
            </div>
        </div>
        <div className='historial'>
            <h1 className='histTypo'>Historial</h1>
              <div className='tableBack'>
              <tbody>
                <tr>
                    <th>
                        <img src="user.book" alt="user book" />
                    </th>
                    <th>
                        <h5>Nombre del libro</h5>
                    </th>
                    <th>
                        <h5>Precio:</h5>
                    </th>
                </tr> 
                <tr>
                    <th>
                        <img src="user.book" alt="user book" />
                    </th>
                    <th>
                        <h5>Nombre del libro</h5>
                    </th>
                    <th>
                        <h5>Precio:</h5>
                    </th>
                </tr>   
                <tr>
                    <th>
                        <img src="user.book" alt="user book" />
                    </th>
                    <th>
                        <h5>Nombre del libro</h5>
                    </th>
                    <th>
                        <h5>Precio:</h5>
                    </th>
                </tr>                     
              </tbody>
              </div>
        </div>
      </div>
      
    <Footer/>
  </>

  );}


export default User