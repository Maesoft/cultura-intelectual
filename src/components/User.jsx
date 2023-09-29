import {React, useState} from 'react'
import '../styles/user.css'



const user = ({children}) => {
    const [visibility, setVisibility]=useState(false);

    const toggleVisibility=()=>{
        setVisibility(!visibility)
    }

  if(!visibility)return (
  <div className="userBack" onClick={toggleVisibility}>
     <button className='userButton'>usuario</button>
  </div>)
  
  return(
  <div className="userUI">
      <button className='btnUserClose'onClick={toggleVisibility}>X</button>
      <div className='containerUser'>
        <div className='infoBox'>
            <div className='imgInfo'>
                <img src="user.image" alt="user Info" />
                <button>edit</button>
            </div>
            <div className='infoText'>
                <h4>Name:</h4>
                <button>edit</button>
                <h4>E-mail:</h4>
                <button>edit</button>
                <h4>Contraseña:</h4>
                <button>edit</button>
            </div>
        </div>
        <div className='historial'>
            <h1 className='histTypo'>Historial.</h1>
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
      {children}
  </div>
  )}


export default user