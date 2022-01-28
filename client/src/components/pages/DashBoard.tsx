import React, { useEffect, useState } from "react";
import "../styles/pages/dashBoard.css";
import { Link, Outlet, useNavigate } from "react-router-dom";

import { useCustom } from "../context/hooks/useCustom";

const DashBoard: React.FC = () => {

  const navigate = useNavigate();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {isLoged, setIsLoged} = useCustom();
  const [logState, setLogState] = useState<string>();

  useEffect(() => {

    if(isLoged){
      setLogState("Logout")
    } else{
      setLogState("Login")
    }

  }, [isLoged]);

  function handleLogButton(){
    if(isLoged){
      localStorage.removeItem('token')
      navigate("/")
      setIsLoged(false)
    } else{
      navigate("/login")
    }
  }

  return (
    <div className="container-dasboard">
      <header className="container-header">
        <div className="header-logo">
          <a href="/">
            <img
              src="https://cdn.frentecorretora.com.br/2018/11/22221040/Logo-Frente-1.png"
              alt="logo"
            />
          </a>
        </div>
        <div className="header-menu">
          <Link className={isLoged ? "menu-button-operations" : "display-none"} to="/in/getoperations">
            Operações
          </Link>
          <div onClick={handleLogButton} className="menu-button-login">
            {logState}
          </div>
          <Link className={isLoged ? "display-none" : "menu-button-signin"} to="/signin">
            Cadastrar
          </Link>
          <Link className={isLoged ? "menu-button-edit" : "display-none"} to="/editclient">
            Editar
          </Link>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default DashBoard;
