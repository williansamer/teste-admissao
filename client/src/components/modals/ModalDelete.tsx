import React, {useState} from "react";
import "../styles/modals/modalDelete.css";
import { useNavigate } from "react-router-dom"
import axios from "axios";

type PropsModalDelete = {
  modalDelete: boolean,
  setModalDelete: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalDelete: React.FC<PropsModalDelete> = (props) => {

  const navigate = useNavigate();

  function handleCloseModal(){
    props.setModalDelete(!props.modalDelete);
  }

  async function handleSubmitModal(e: any){
    e.preventDefault();
    props.setModalDelete(!props.modalDelete);
    // const {sub} = JSON.parse(localStorage.getItem('user') || '{}')
    await axios.delete('http://localhost:3001/deleteClient', {
      headers: {
        'authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }).then(res => {
      alert("Conta deletada com sucesso!")
      localStorage.removeItem('token')
      navigate('/')
    }).catch(err => {
      alert("Esteja Logado. Digite seu email e senha corretamente!")
      navigate('/login')
    })
  }

  return (
    <section className="modalDelete-container-section">
      <div className="modalDelete-section-close" onClick={handleCloseModal}>
        X
      </div>
      <form className="modalDelete-section-form" onSubmit={handleSubmitModal}>
        <div className="form-warning">Todos seus dados serão apagados. Você tem certeza disso?</div>
        <input className='edit-form-input-submit modalDelete-edit-form-input-submit' type="submit" value="Confirmar" onClick={handleSubmitModal}/>
      </form>
    </section>
  );
};

export default ModalDelete;
