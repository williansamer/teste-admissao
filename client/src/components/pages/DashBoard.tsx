import React from 'react';
import { Link } from "react-router-dom"

const DashBoard:React.FC = () => {
  return (
    <div>
      <h1>DashBoard</h1>
      <Link to="/login">Login</Link> <br />
      <Link to="/signin">Cadastrar</Link>
    </div>
  )
};

export default DashBoard;
