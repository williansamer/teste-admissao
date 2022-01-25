import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/pages/login.css"

const Login:React.FC = () => {

  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    navigate("/in/getoperations");
  }

  return (
    <section className="login-container-section">
      <div className='login-section-title'>
        Faça o login
      </div>
      <form className='login-section-form' onSubmit={handleSubmit}>
        <label className='login-form-label-email'>
          Email: 
          <input className='login-label-input-email' type="text" required/>
        </label>
        <label className='login-form-label-password'>
          Senha: 
          <input className='login-label-input-password' type="password" required/>
        </label>
        <input className='login-form-input-submit' type="submit" value="Entrar"/>
      </form>
    </section>
  )
};

export default Login;