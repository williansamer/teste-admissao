import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/pages/login.css"

const Login:React.FC = () => {

  return (
    <section className="login-container-section">
      <div className='login-section-title'>
        Faça o login
      </div>
      <form className='login-section-form'>
        <label className='login-form-label-email'>
          Email: 
          <input className='login-label-input-email' type="text" />
        </label>
        <label className='login-form-label-password'>
          Senha: 
          <input className='login-label-input-password' type="password" />
        </label>
        <Link to={"../insertOperation"}><input className='login-form-input-submit' type="submit" /></Link>
      </form>
    </section>
  )
};

export default Login;
