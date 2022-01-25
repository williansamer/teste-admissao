import React from "react";
import "../styles/pages/allOperations.css"
import { Outlet } from "react-router-dom"

const AllOperations: React.FC = () => {

  return (
      <div className="section-listoperations">
        <h1 className="section-listoperations-title">
          Operações Realizadas
        </h1>
        <div className="section-listoperations-list">
          <Outlet />
        </div>
      </div>
  );
};

export default AllOperations;
