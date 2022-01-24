import React from "react";
import "../styles/modals/modalEmail.css";

type PropsModalEmail = {
  modalEmail: boolean,
  setModalEmail: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalEmail: React.FC<PropsModalEmail> = (props) => {

  function handleCloseModal(){
    props.setModalEmail(!props.modalEmail);
  }

  function handleSubmitModal(e: any){
    e.preventDefault();
    props.setModalEmail(!props.modalEmail);
  }

  return (
    <section className="modalEmail-container-section">
      <div className="modalEmail-section-close" onClick={handleCloseModal}>
        X
      </div>
      <form className="modalEmail-section-form">
        <input className="modalEmail-form-input" type="email" placeholder="digite o email ANTIGO" required/>
        <input className="modalEmail-form-input" type="email" placeholder="digite o email NOVO" required />
        <input className="modalEmail-form-input" type="email" placeholder="digite o email NOVO novamente" required />
        <input className="modalEmail-form-input" type="password" placeholder="digite a senha" required />
        <input className='edit-form-input-submit modalEmail-edit-form-input-submit' type="submit" value="Confirmar" onClick={handleSubmitModal}/>
      </form>
    </section>
  );
};

export default ModalEmail;
