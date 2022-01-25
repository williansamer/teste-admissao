import React, {useState} from "react";
import "../styles/modals/modalPassword.css";

type PropsModalPassword = {
  modalPassword: boolean,
  setModalPassword: React.Dispatch<React.SetStateAction<boolean>>,
  setUpdatePassword: React.Dispatch<React.SetStateAction<string>>
}

const ModalPassword: React.FC<PropsModalPassword> = (props) => {

  const [getPassword, setPassword] = useState('')
  const [getRpassword, setRpassword] = useState('')

  function handlePasswordText(event: React.ChangeEvent<HTMLInputElement>){
    event.preventDefault()
    setPassword(event.target.value)
  }
  function handleRpasswordText(event: React.ChangeEvent<HTMLInputElement>){
    event.preventDefault()
    setRpassword(event.target.value)
  }

  function handleCloseModal(){
    props.setModalPassword(!props.modalPassword);
  }

  function handleSubmitModal(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    if(getPassword === getRpassword){
      props.setUpdatePassword("Alterada")
      props.setModalPassword(!props.setModalPassword);
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
        <input className="modalPassword-form-input" type="email" placeholder="digite o email" required />
        <input className="modalPassword-form-input" type="password" placeholder="digite a ANTIGA senha" required />
        <input className="modalPassword-form-input" type="password" placeholder="digite a NOVA senha" onChange={handlePasswordText} required />
        <input className="modalPassword-form-input" type="password" placeholder="digite a NOVA senha novamente" onChange={handleRpasswordText} required />
        <input className='edit-form-input-submit modalPassword-edit-form-input-submit' type="submit" value="Confirmar"/>
      </form>
    </section>
  );
};

export default ModalPassword;
