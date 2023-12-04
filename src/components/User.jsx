import {React, useState} from 'react'
import '../styles/User.css'
import NavSecun from './NavSecun'
import Footer from './Footer'
import logo from '../assets/logo.png'
import edit from '../assets/edit.png'
import { useAuth } from '../context/AuthContext'
const User = () => {

    const {user} = useAuth()
   
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState(user.password);
    const [isEditing, setIsEditing] = useState(false);
  
    const handleEdit = async () => {
      try {
        // Realiza la solicitud PUT para actualizar los datos del usuario
        const response = await fetch(`https://api.escuelajs.co/api/v1/users/${user.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        });
  
        if (response.ok) {
          console.log('Datos del usuario actualizados con éxito');
          setIsEditing(false); // Desactiva el modo de edición después de la actualización
        } else {
          console.error('Error al actualizar los datos del usuario');
        }
      } catch (error) {
        console.error('Error en la solicitud PUT:', error);
      }
    };

  return(
  <>
  
    
    <NavSecun></NavSecun>
      <div className='containerUser'>
        <div className='infoBox'>
            <div className='imgInfo'>
                <img className='imgEditUs' src={user.avatar} alt="user Info" />
                <button className='btnEditImg'><img className='edit' src={edit} alt=""  /></button>
            </div>
            <div className='infoText'>
            <div className='contData'>
              {isEditing ? (
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              ) : (
                <>
                  <h4>{name}</h4>
                  <button onClick={() => setIsEditing(true)}><img className='edit' src={edit} alt="" /></button>
                </>
              )}
            </div>
            {/* ... */}
            <div className='contData'>
              {isEditing ? (
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              ) : (
                <>
                  <h4>{email}</h4>
                  <button onClick={() => setIsEditing(true)}><img className='edit' src={edit} alt="" /></button>
                </>
              )}
            </div>
            {/* ... */}
            <div className='contData'>
              {isEditing ? (
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              ) : (
                <>
                  <h4>{password}</h4>
                  <button onClick={() => setIsEditing(true)}><img className='edit' src={edit} alt="" /></button>
                </>
              )}
            </div>
            <button id='gcambio' onClick={handleEdit}>Guardar Cambios</button>
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