import React, {useState} from 'react';
import "../styles/pages/signin.css"
import { useNavigate } from "react-router-dom"
import axios from 'axios';

type InsertClients = {
  name: string,
  password: string,
  username: string,
  birthday: string,
  address: string,
  cpf: string,
}

const SignIn:React.FC = () => {

  const navigate = useNavigate()
  const [getEmail, setEmail] = useState('')
  const [getRemail, setRemail] = useState('')
  const [getPassword, setPassword] = useState('')
  const [getRpassword, setRpassword] = useState('')
  const [getName, setName] = useState('')
  const [getBirthday, setBirthday] = useState('')
  const [getAddress, setAddress] = useState('')
  const [getCpf, setCpf] = useState('')

  function handleEmailText(event: React.ChangeEvent<HTMLInputElement>){
    event.preventDefault()
    setEmail(event.target.value)
  }
  function handleRemailText(event: React.ChangeEvent<HTMLInputElement>){
    event.preventDefault()
    setRemail(event.target.value)
  }
  function handlePasswordText(event: React.ChangeEvent<HTMLInputElement>){
    event.preventDefault()
    setPassword(event.target.value)
  }
  function handleRpasswordText(event: React.ChangeEvent<HTMLInputElement>){
    event.preventDefault()
    setRpassword(event.target.value)
  }
  function handleNameText(event: React.ChangeEvent<HTMLInputElement>){
    event.preventDefault()
    setName(event.target.value)
  }
  function handleAddressText(event: React.ChangeEvent<HTMLInputElement>){
    event.preventDefault()
    setAddress(event.target.value)
  }
  function handleBirthdayText(event: React.ChangeEvent<HTMLInputElement>){
    event.preventDefault()
    setBirthday(event.target.value)
  }
  function handleCpfText(event: React.ChangeEvent<HTMLInputElement>){
    event.preventDefault()
    setCpf(event.target.value)
  }

  function cleanInputs(){
    setEmail('')
    setRemail('')
    setPassword('')
    setRpassword('')
    setName('')
    setBirthday('')
    setAddress('')
    setCpf('')
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    if(getEmail === getRemail && getPassword === getRpassword){
      axios.post('http://localhost:3001/createClient', {
        name: getName,
        password: getPassword,
        username: getEmail,
        birthday: getBirthday,
        address: getAddress,
        cpf: getCpf
      })
      .then(res=>{
        navigate("/login")
        cleanInputs();
        alert("Cadastro realizado com sucesso!")
      })
      .catch(err => {
        cleanInputs();
        alert(err.response.data) 
      })
    } else {
      alert("Os emails ou as senhas não são iguais")
    }
  }

  return (
    <section className="signin-container-section">
      <div className='signin-section-title'>
        Faça o cadastro
      </div>
      <form className='signin-section-form' onSubmit={handleSubmit}>
        <label className='signin-form-label-email'>
          Email*: 
          <input className='signin-label-input-email' type="email" autoComplete='off' onChange={handleEmailText} value={getEmail} required />
        </label>
        <label className='signin-form-label-remail'>
          Repita o Email*: 
          <input className='signin-label-input-remail' type="email" onChange={handleRemailText} value={getRemail} required />
        </label>
        <label className='signin-form-label-password'>
          Senha*: 
          <input className='signin-label-input-password' type="password" onChange={handlePasswordText} value={getPassword} required />
        </label>
        <label className='signin-form-label-rpassword'>
          Repita a Senha*: 
          <input className='signin-label-input-rpassword' type="password" onChange={handleRpasswordText} value={getRpassword} required />
        </label>
        <label className='signin-form-label-name'>
          Nome*: 
          <input className='signin-label-input-name' type="text" onChange={handleNameText} value={getName} required />
        </label>
        <label className='signin-form-label-address'>
          Endereço*: 
          <input className='signin-label-input-address' type="text" onChange={handleAddressText} value={getAddress} required />
        </label>
        <label className='signin-form-label-birthday'>
          Nascido em*: 
          <input className='signin-label-input-birthday' type="date" onChange={handleBirthdayText} value={getBirthday} required />
        </label>
        <label className='signin-form-label-cpf'>
          CPF*: 
          <input className='signin-label-input-cpf' type="text" pattern='\d{3}\.?\d{3}\.?\d{3}-?\d{2}' onChange={handleCpfText} value={getCpf} required />
        </label>
        <input className='signin-form-input-submit' type="submit"></input>
      </form>
    </section>
  )
};

export default SignIn;