import React from "react";
import { useNavigate } from "react-router-dom"
import "../styles/modals/modalConfirmed.css";

type PropsModalConfirmed = {
  modalConfirmed: boolean,
  setModalConfirmed: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalConfirmed: React.FC<PropsModalConfirmed> = (props) => {

  const navigate = useNavigate();

  function handleConfirmedModal(e: any){
    e.preventDefault();
    props.setModalConfirmed(!props.modalConfirmed);
    navigate("/");
  }

  return (
    <section className="modalConfirmed-container-section">
        <div className="modalConfirmed-section-title">
          Alteração realizada com sucesso!
        </div>
        <input className='modalConfirmed-edit-input-submit' type="submit" value="Confirmar" onClick={handleConfirmedModal}/>
    </section>
  );
};

export default ModalConfirmed;
