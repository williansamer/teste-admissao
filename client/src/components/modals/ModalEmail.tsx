import React from "react";
import "../styles/modals/modalEmail.css";

const ModalEmail: React.FC = () => {
  return (
    <section className="modalEmail-container-section">
      <div className="modalEmail-section-close">
        X
      </div>
      <form className="modalEmail-section-form">
        <input className="modalEmail-form-input" type="email" placeholder="digite o email ANTIGO" required/>
        <input className="modalEmail-form-input" type="email" placeholder="digite o email NOVO" required />
        <input className="modalEmail-form-input" type="email" placeholder="digite o email NOVO novamente" required />
        <input className="modalEmail-form-input" type="password" placeholder="digite a senha" required />
        <input className='edit-form-input-submit modalEmail-edit-form-input-submit' type="submit" value="Confirmar" />
      </form>
    </section>
  );
};

export default ModalEmail;
