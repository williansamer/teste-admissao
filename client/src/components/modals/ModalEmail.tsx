import React, {useState} from "react";
import "../styles/modals/modalEmail.css";
import axios from "axios";

type PropsModalEmail = {
  modalEmail: boolean,
  setModalEmail: React.Dispatch<React.SetStateAction<boolean>>,
  setUpdateEmail: React.Dispatch<React.SetStateAction<string>>
}

const ModalEmail: React.FC<PropsModalEmail> = (props) => {

  const [getOldEmail, setOldEmail] = useState('')
  const [getEmail, setEmail] = useState('')
  const [getRemail, setRemail] = useState('')

  function handleOldEmailText(event: React.ChangeEvent<HTMLInputElement>){
    event.preventDefault()
    setOldEmail(event.target.value)
  }
  function handleEmailText(event: React.ChangeEvent<HTMLInputElement>){
    event.preventDefault()
    setEmail(event.target.value)
  }
  function handleRemailText(event: React.ChangeEvent<HTMLInputElement>){
    event.preventDefault()
    setRemail(event.target.value)
  }

  function handleCloseModal(){
    props.setModalEmail(!props.modalEmail);
  }

  async function handleSubmitModal(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const oldEmail = await axios.get('http://localhost:3001/authClient', {
      data:{
        username: getOldEmail
      }
    })
    if(getEmail === getRemail && oldEmail){
      props.setUpdateEmail(getEmail)
      props.setModalEmail(!props.modalEmail);
      await axios.put('http://localhost:3001/updateClient', {
        header: {
          'Content-Type': 'application/json',
          'authorization': 'Bearer ' + localStorage.getItem('token'),
        },
        username: getRemail,
      }).then(res => {
        alert("Email alterado com sucesso!")
      }).catch(err => {
        alert(err.response.data)
      })
    } else {
      alert("Os emails não são iguais")
    }
  }

  return (
    <section className="modalEmail-container-section">
      <div className="modalEmail-section-close" onClick={handleCloseModal}>
        X
      </div>
      <form className="modalEmail-section-form" onSubmit={handleSubmitModal}>
        <input className="modalEmail-form-input" type="email" placeholder="digite o email ANTIGO" onChange={handleOldEmailText} value={getOldEmail} required/>
        <input className="modalEmail-form-input" type="email" placeholder="digite o email NOVO" onChange={handleEmailText} value={getEmail} required />
        <input className="modalEmail-form-input" type="email" placeholder="digite o email NOVO novamente" onChange={handleRemailText} value={getRemail} required />
        <input className="modalEmail-form-input" type="password" placeholder="digite a senha" required />
        <input className='edit-form-input-submit modalEmail-edit-form-input-submit' type="submit" value="Confirmar"/>
      </form>
    </section>
  );
};

export default ModalEmail;
