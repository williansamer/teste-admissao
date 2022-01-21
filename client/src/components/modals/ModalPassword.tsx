import React from "react";
import "../styles/modals/modalPassword.css";

const ModalPassword: React.FC = () => {
  return (
    <section className="modalPassword-container-section">
      <div className="modalPassword-section-close">
        X
      </div>
      <form className="modalPassword-section-form">
        <input className="modalPassword-form-input" type="email" placeholder="digite o email" required />
        <input className="modalPassword-form-input" type="password" placeholder="digite a ANTIGA senha" required />
        <input className="modalPassword-form-input" type="password" placeholder="digite a NOVA senha" required />
        <input className="modalPassword-form-input" type="password" placeholder="digite a NOVA senha novamente" required />
        <input className='edit-form-input-submit modalPassword-edit-form-input-submit' type="submit" value="Confirmar" />
      </form>
    </section>
  );
};

export default ModalPassword;
