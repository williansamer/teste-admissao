import React from "react";
import "../styles/modals/modalPassword.css";

type PropsModalPassword = {
  modalPassword: boolean,
  setModalPassword: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalPassword: React.FC<PropsModalPassword> = (props) => {

  function handleCloseModal(){
    props.setModalPassword(!props.modalPassword);
  }

  function handleSubmitModal(e: any){
    e.preventDefault();
    props.setModalPassword(!props.setModalPassword);
  }

  return (
    <section className="modalPassword-container-section">
      <div className="modalPassword-section-close" onClick={handleCloseModal}>
        X
      </div>
      <form className="modalPassword-section-form">
        <input className="modalPassword-form-input" type="email" placeholder="digite o email" required />
        <input className="modalPassword-form-input" type="password" placeholder="digite a ANTIGA senha" required />
        <input className="modalPassword-form-input" type="password" placeholder="digite a NOVA senha" required />
        <input className="modalPassword-form-input" type="password" placeholder="digite a NOVA senha novamente" required />
        <input className='edit-form-input-submit modalPassword-edit-form-input-submit' type="submit" value="Confirmar" onClick={handleSubmitModal}/>
      </form>
    </section>
  );
};

export default ModalPassword;
