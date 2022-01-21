import React, { Props, useState } from 'react';
import "../styles/pages/editClient.css"
import { Link } from "react-router-dom"
import ModalEmail from '../modals/ModalEmail';
import ModalPassword from '../modals/ModalPassword';

const EditClient:React.FC = () => {
  const [modalEmail, setModalEmail] = useState<boolean>(false);
  const [modalPassword, setModalPassword] = useState(false);

  function handleEditEmail(){
    setModalEmail(!modalEmail);
    console.log(modalEmail)
  }

  function handleEditPassword(){
    setModalPassword(!modalPassword);
    console.log(modalPassword)
  }

  return (
    <section className="edit-container-section">
      {/* {modalEmail && <ModalEmail />} */}
      {/* <ModalPassword /> */}
      <div className='edit-section-title'>
        Edite os campos que deseja
      </div>
      <form className='edit-section-form'>
        <label className='edit-form-label-email'>
          Email: 
          <div className='edit-label-edit' onClick={handleEditEmail}>Alterar</div>
        </label>
        <label className='edit-form-label-password'>
          Senha: 
          <div className='edit-label-edit' onClick={handleEditPassword}>Alterar</div>
        </label>
        <label className='edit-form-label-name'>
          Nome: 
          <input className='edit-label-input-name' type="text" />
        </label>
        <label className='edit-form-label-address'>
          Endereço: 
          <input className='edit-label-input-address' type="text" />
        </label>
        <label className='edit-form-label-birthday'>
          Nascido em: 
          <input className='edit-label-input-birthday' type="date" />
        </label>
        <label className='edit-form-label-cpf'>
          CPF: 
          <input className='edit-label-input-cpf' type="text" />
        </label>
        <Link to={"../login"}><input className='edit-form-input-submit' type="submit" value="Confirmar" /></Link>
      </form>
    </section>
  )
};

export default EditClient;
