import React, {useState} from "react";
import "../styles/modals/modalPassword.css";
import axios from "axios";

type PropsModalPassword = {
  modalPassword: boolean,
  setModalPassword: React.Dispatch<React.SetStateAction<boolean>>,
  setUpdatePassword: React.Dispatch<React.SetStateAction<string>>
}

const ModalPassword: React.FC<PropsModalPassword> = (props) => {

  const [getEmail, setEmail] = useState('')
  const [getOldPassword, setOldPassword] = useState('')
  const [getNewpassword, setNewpassword] = useState('')
  const [getRnewpassword, setRnewpassword] = useState('')

  function handleEmailText(event: React.ChangeEvent<HTMLInputElement>){
    event.preventDefault()
    setEmail(event.target.value)
  }
  function handleOldPasswordText(event: React.ChangeEvent<HTMLInputElement>){
    event.preventDefault()
    setOldPassword(event.target.value)
  }
  function handleNewpasswordText(event: React.ChangeEvent<HTMLInputElement>){
    event.preventDefault()
    setNewpassword(event.target.value)
  }
  function handleRnewpasswordText(event: React.ChangeEvent<HTMLInputElement>){
    event.preventDefault()
    setRnewpassword(event.target.value)
  }

  function handleCloseModal(){
    props.setModalPassword(!props.modalPassword);
  }

  async function handleSubmitModal(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    if(getNewpassword === getRnewpassword){
      props.setUpdatePassword("Alterada")
      props.setModalPassword(!props.setModalPassword);
      await axios.put('http://localhost:3001/updateClient', {
        username: getEmail,
        password: getRnewpassword
      },
      {
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + localStorage.getItem('token') as string,
      }}
    ).then(res => {
      alert("Senha alterada com sucesso!")
    }).catch(err => {
      alert(err.response.data)
    })
    } else{
      alert("Os campos das novas senhas não são iguais")
    }
  }

  return (
    <section className="modalPassword-container-section">
      <div className="modalPassword-section-close" onClick={handleCloseModal}>
        X
      </div>
      <form className="modalPassword-section-form" onSubmit={handleSubmitModal}>
        <input className="modalPassword-form-input" type="email" placeholder="digite o email" onChange={handleEmailText} value={getEmail} required />
        <input className="modalPassword-form-input" type="password" placeholder="digite a ANTIGA senha" onChange={handleOldPasswordText} value={getOldPassword} required />
        <input className="modalPassword-form-input" type="password" placeholder="digite a NOVA senha" onChange={handleNewpasswordText} value={getNewpassword} required />
        <input className="modalPassword-form-input" type="password" placeholder="digite a NOVA senha novamente" onChange={handleRnewpasswordText} value={getRnewpassword} required />
        <input className='edit-form-input-submit modalPassword-edit-form-input-submit' type="submit" value="Confirmar"/>
      </form>
    </section>
  );
};

export default ModalPassword;
