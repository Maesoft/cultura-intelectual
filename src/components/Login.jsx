import '../styles/Login.css';
import logo from '../assets/logo.png'
import back from '../assets/back.png'
import Footer from './Footer';
import NavSecun from './NavSecun';

function Login() {
    return (
    <>
      <NavSecun/>
      <div className='cont-form'>
        <div className='border-form'>
        <div className='cont-ini cont-iniB'>
          <h2>Iniciar Sesión</h2>
          <form  className='formLogin' >
            <div>
              <label className="labelLogin" htmlFor="username-login">Usuario</label>
              <input
              className='inputLogin'
                type="text"
                id="username-login"
              
              />
            </div>
            <div>
              <label className="labelLogin" htmlFor="password-login">Contraseña</label>
              <input
              className='inputLogin'
                type="password"
                id="password-login"
              
            
              />
            </div>
            <button className='btnLogin' type="submit">Ingresar</button>
          </form>
        </div>

        <div className='cont-ini'>
          <h2>Crear Cuenta</h2>
          <form className='formLogin'>
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
