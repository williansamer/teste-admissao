import React from 'react';
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
          <input className='login-label-input-email' type="text" required />
        </label>
        <label className='login-form-label-password'>
          Senha: 
          <input className='login-label-input-password' type="password" required/>
        </label>
        <input className='login-form-input-submit' type="submit" />
      </form>
    </section>
  )
};

export default Login;
