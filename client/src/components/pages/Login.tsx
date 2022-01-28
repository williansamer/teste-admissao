import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/pages/login.css"
import axios from 'axios';

import { useCustom } from "../context/hooks/useCustom";

const Login:React.FC = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {setIsLoged} = useCustom();
  const navigate = useNavigate();
  const[getEmail, setEmail] = useState('')
  const[getPassword, setPassword] = useState('')

  function handleEmailText(event: React.ChangeEvent<HTMLInputElement>){
    event.preventDefault()
    setEmail(event.target.value)
  }

  function handlePasswordText(event: React.ChangeEvent<HTMLInputElement>){
    event.preventDefault()
    setPassword(event.target.value)
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    await axios.post('http://localhost:3001/authClient', {
      username: getEmail,
      password: getPassword
    }, {
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + localStorage.getItem('token') as string,
      }
    }).then(res => {
      localStorage.setItem('token', res.data)
      setIsLoged(true)
      navigate("/in/getoperations"); 
    }).catch(err => {
      alert(err.response.data)
    })
  }

  return (
    <section className="login-container-section">
      <div className='login-section-title'>
        Faça o login
      </div>
      <form className='login-section-form' onSubmit={handleSubmit}>
        <label className='login-form-label-email'>
          Email: 
          <input className='login-label-input-email' type="text" onChange={handleEmailText} value={getEmail} required/>
        </label>
        <label className='login-form-label-password'>
          Senha: 
          <input className='login-label-input-password' type="password" onChange={handlePasswordText} value={getPassword} required/>
        </label>
        <input className='login-form-input-submit' type="submit" value="Entrar"/>
      </form>
    </section>
  )
};

export default Login;