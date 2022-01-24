import React from "react";
import "../styles/pages/insertOperation.css"
import { Outlet, Link } from "react-router-dom"

const InsertOperation: React.FC = () => {

  return (
    <section className="home-container-section">
      <div className="section-insertoperation">
        <h1 className="insertoperation-title">Criar Operação</h1>
        <form className="insertoperation-form">
          <label className="form-label form-label-name">
              <span>Nome da Operação:</span>
              <input className="label-input" type="text" />
            </label>
          <label className="form-label form-label-value">
            <span>Valor: R$</span>
            <input className="label-input label-input-value" type="text" />
          </label>
          <label className="form-label form-label-preference">
            <span>Nota:</span>
            <select  className="label-select">
              <option value="10"> 10 reais</option>
              <option value="50">50 reais</option>
              <option value="100">100 reais</option>
            </select>
          </label>
          <label className="form-label form-label-quantities">
            <span>Quantidade de notas:</span>
            <input className="label-input" type="text" inputMode="none"/>
          </label>
          <label className="form-label form-label-packages">
            <span>Quantidade de pacotes:</span>
            <input className="label-input" type="text" inputMode="none"/>
          </label>
          <input className="form-submit" type="submit" value="Finalizar Operação"/>
        </form>
        <div className="insertoperation-observations">
          <h3 className="observation-title">Observações</h3>
          <div  className="observation-default">- O valor tem que ser de 100 em 100. <span>Ex: R$1000, R$1100, R$1200..</span></div>
          <div  className="observation-default">- Terá somente 1 tipo de preferência de notas. <span>(R$10 / R$50 / R$100)</span></div>
          <div  className="observation-default">- Cada Pacote terá o máximo de 50 notas. Se houver mais, será dividido em subpacotes</div>
        </div>
      </div>

      <div className="section-listoperations">
        <h1 className="section-listoperations-title">
          Operações Realizadas
        </h1>
        <div className="section-listoperations-list">
          <Outlet />
        </div>
      </div>

{/*       <Link to="getoperations"><h3>Listar Operações</h3></Link> <br />
      <Link to="getpackages"><h3>Listar Pacotes</h3></Link>

      <Outlet /> */}
    </section>
  );
};

export default InsertOperation;
