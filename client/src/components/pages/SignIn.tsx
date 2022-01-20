import React from 'react';
import { useNavigate } from "react-router-dom"

const SignIn:React.FC = () => {

  const navigate = useNavigate();

  return (
    <div>
      <h1>Cadastrar Usuário</h1>
      <button onClick= {()=>navigate("/login")}>Salvar</button>
    </div>
  )
};

export default SignIn;
