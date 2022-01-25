import React, {useState} from "react";
import "../styles/modals/modalEmail.css";

type PropsModalEmail = {
  modalEmail: boolean,
  setModalEmail: React.Dispatch<React.SetStateAction<boolean>>,
  setUpdateEmail: React.Dispatch<React.SetStateAction<string>>
}

const ModalEmail: React.FC<PropsModalEmail> = (props) => {

  const [getEmail, setEmail] = useState('')
  const [getRemail, setRemail] = useState('')

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

  function handleSubmitModal(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    if(getEmail === getRemail){
      props.setUpdateEmail(getEmail)
      props.setModalEmail(!props.modalEmail);
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
        <input className="modalEmail-form-input" type="email" placeholder="digite o email ANTIGO" required/>
        <input className="modalEmail-form-input" type="email" placeholder="digite o email NOVO" onChange={handleEmailText} value={getEmail} required />
        <input className="modalEmail-form-input" type="email" placeholder="digite o email NOVO novamente" onChange={handleRemailText} value={getRemail} required />
        <input className="modalEmail-form-input" type="password" placeholder="digite a senha" required />
        <input className='edit-form-input-submit modalEmail-edit-form-input-submit' type="submit" value="Confirmar"/>
      </form>
    </section>
  );
};

export default ModalEmail;
