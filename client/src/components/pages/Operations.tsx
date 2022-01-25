import React from "react";
import "../styles/pages/operations.css"
import InsertOperations from "./InsertOperation";
import AllOperations from "./AllOperations";

const Operations: React.FC = () => {

  return (
    <section className="operations-container-section">

      <InsertOperations />
      <AllOperations />

    </section>
  );
};

export default Operations;
