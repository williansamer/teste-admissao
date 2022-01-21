import React from 'react';
import "../styles/signin.css"
import { Link } from "react-router-dom"

const SignIn:React.FC = () => {

  return (
    <section className="signin-container-section">
      <div className='signin-section-title'>
        Faça o cadastro
      </div>
      <form className='signin-section-form'>
        <label className='signin-form-label-email'>
          Email*: 
          <input className='signin-label-input-email' type="text" />
        </label>
        <label className='signin-form-label-remail'>
          Repita o Email*: 
          <input className='signin-label-input-remail' type="text" />
        </label>
        <label className='signin-form-label-password'>
          Senha*: 
          <input className='signin-label-input-password' type="text" />
        </label>
        <label className='signin-form-label-rpassword'>
          Repita a Senha*: 
          <input className='signin-label-input-rpassword' type="text" />
        </label>
        <label className='signin-form-label-name'>
          Nome*: 
          <input className='signin-label-input-name' type="text" />
        </label>
        <label className='signin-form-label-address'>
          Endereço*: 
          <input className='signin-label-input-address' type="text" />
        </label>
        <label className='signin-form-label-birthday'>
          Nascido em*: 
          <input className='signin-label-input-birthday' type="date" />
        </label>
        <label className='signin-form-label-cpf'>
          CPF*: 
          <input className='signin-label-input-cpf' type="text" />
        </label>
        <Link to={"../login"}><input className='signin-form-input-submit' type="submit" /></Link>
      </form>
    </section>
  )
};

export default SignIn;
