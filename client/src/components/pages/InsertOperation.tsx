import React from "react";
import { Outlet, Link } from "react-router-dom"

const InsertOperation: React.FC = () => {
  return (
    <>
      <div>
        <h1>Criar Operação</h1>
      </div>

      <Link to="getoperations"><h3>Listar Operações</h3></Link> <br />
      <Link to="getpackages"><h3>Listar Pacotes</h3></Link>

      <Outlet />
    </>
  );
};

export default InsertOperation;
