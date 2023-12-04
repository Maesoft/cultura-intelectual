import '../styles/Login.css';
import logo from '../assets/logo.png'
import back from '../assets/back.png'
import Footer from './Footer';
import NavSecun from './NavSecun';
import { useState, useContext, useEffect } from 'react';
import { usersContext } from '../context/UsersContext';
import { useNavigate } from 'react-router-dom';  // Cambiado a useNavigate
import { useAuth } from '../context/AuthContext';

function Login() {
  const users = useContext(usersContext)
  
  const navigate = useNavigate();
// ----------------------
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [authenticated, setAuthenticated] = useState(false);
const [error, setError] = useState('');

const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    // Busca un usuario con las credenciales proporcionadas
    const user = users.find(
      (u) => u.name === username && u.password === password
    );

    if (user) {
      login(user);
      console.log('Usuario autenticado:', user);
      navigate('/');
    } else {
      setError('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
      console.log('Error de autenticación');
    }
  };


    return (
    <>
      <NavSecun/>
      <div className='cont-form'>
        <div className='border-form'>
        <div className='cont-ini cont-iniB'>
          <h2>Iniciar Sesión</h2>
          <form  className='formLogin' onSubmit={handleLogin}  >
            <div>
              <label className="labelLogin" htmlFor="username-login">Usuario</label>
              <input className='inputLogin' type="text" id="username-login"             value={username}
            onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div>
              <label className="labelLogin" htmlFor="password-login">Contraseña</label>
              <input className='inputLogin' type="password" id="password-login"  value={password}
            onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
              <p id="notification"></p>
            <button className='btnLogin' type="submit">Ingresar</button>
            </div>
          </form>
        </div>

        <div className='cont-ini'>
          <h2>Crear Cuenta</h2>
          <form className='formLogin' >
            <div>
              <label className="labelLogin" htmlFor="username-signup">Usuario</label>
              <input
              className='inputLogin'
                type="text"
                id="username-signup"
            
              />
            </div>
            <div>
              <label className="labelLogin" htmlFor="password-signup">Contraseña</label>
              <input
              className='inputLogin'
                type="password"
                id="password-signup"
              />
            </div>
            <div>
              <label className="labelLogin" htmlFor="email-signup">Email</label>
              <input
              className='inputLogin'
                type="email"
                id="email-signup"
              
              />
            </div>
            <button className='btnLogin' type="submit">Crear Cuenta</button>
          </form>
        </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Login
