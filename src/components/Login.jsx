import '../styles/Login.css';
import logo from '../assets/logo.png'
import back from '../assets/back.png'
import Footer from './Footer';
import NavSecun from './NavSecun';
const URL='https://647683b09233e82dd53a1337.mockapi.io/'

function Login() {
    const handleSubmitSignIn=async(e)=>{
      e.preventDefault();
      const inputUserLogin=document.getElementById('username-login').value;
      const inputPassLogin=document.getElementById('password-login').value;
      let notification=document.getElementsByClassName('.notification').innerText;
      const res = await fetch(URL+'/users')
      const parsed = await res.json()
      const auth= parsed.find(usr => usr.user_name === inputUserLogin && usr.password === inputPassLogin )
      auth? notification='Session iniciada': notification='Usuario y/o contraseña erroneo/s';
    }
    const handleSubmitSignUp=(e)=>{
      e.preventDefault();
      console.log('Creando usuario');
    }

    return (
    <>
      <NavSecun/>
      <div className='cont-form'>
        <div className='border-form'>
        <div className='cont-ini cont-iniB'>
          <h2>Iniciar Sesión</h2>
          <form  className='formLogin' onSubmit={handleSubmitSignIn} >
            <div>
              <label className="labelLogin" htmlFor="username-login">Usuario</label>
              <input className='inputLogin' type="text" id="username-login"/>
            </div>
            <div>
              <label className="labelLogin" htmlFor="password-login">Contraseña</label>
              <input className='inputLogin' type="password" id="password-login"/>
            </div>
            <div>
              <p className="notification">sdfsdfsdf</p>
            <button className='btnLogin' type="submit">Ingresar</button>
            </div>
          </form>
        </div>

        <div className='cont-ini'>
          <h2>Crear Cuenta</h2>
          <form className='formLogin' onSubmit={handleSubmitSignUp}>
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
