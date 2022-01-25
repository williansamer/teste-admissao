import React, { useState } from 'react';
import "../styles/pages/editClient.css"
import ModalEmail from '../modals/ModalEmail';
import ModalPassword from '../modals/ModalPassword';
import ModalConfirmed from '../modals/ModalConfirmed';

const EditClient:React.FC= () => {
  const [modalEmail, setModalEmail] = useState<boolean>(false);
  const [modalPassword, setModalPassword] = useState(false);
  const [modalConfirmed, setModalConfirmed] = useState<boolean>(false);
  const [updateEmail, setUpdateEmail] = useState('Alterar');
  const [updatePassword, setUpdatePassword] = useState('Alterar');

  function handleEditEmail(){
    setModalEmail(!modalEmail);
  }

  function handleEditPassword(){
    setModalPassword(!modalPassword);
  }

  function handleConfirmed(e: any){
    e.preventDefault();
    setModalConfirmed(!modalConfirmed);
  }

  return (
    <section className="edit-container-section">
      {modalEmail && <ModalEmail modalEmail={modalEmail} setModalEmail={setModalEmail} setUpdateEmail={setUpdateEmail}/>}
      {modalPassword && <ModalPassword modalPassword={modalPassword} setModalPassword={setModalPassword} setUpdatePassword={setUpdatePassword}/>}
      {modalConfirmed && <ModalConfirmed modalConfirmed={modalConfirmed} setModalConfirmed={setModalConfirmed}/>}
      <div className='edit-section-title'>
        Edite os campos que deseja
      </div>
      <form className='edit-section-form'>
        <label className='edit-form-label-email'>
          Email: 
          <div className='edit-label-edit' onClick={handleEditEmail}>{updateEmail}</div>
        </label>
        <label className='edit-form-label-password'>
          Senha: 
          <div className='edit-label-edit' onClick={handleEditPassword}>{updatePassword}</div>
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
        <input className='edit-form-input-submit' type="submit" value="Confirmar" onClick={handleConfirmed}/>
      </form>
    </section>
  )
};

export default EditClient;
