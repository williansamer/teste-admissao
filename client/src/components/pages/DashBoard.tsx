import React from "react";
import "../styles/dashBoard.css";
import { Link, Outlet } from "react-router-dom";

const DashBoard: React.FC = () => {
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
          <Link className="menu-button-login" to="/login">
            Login
          </Link>
          <Link className="menu-button-signin" to="/signin">
            Cadastrar
          </Link>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default DashBoard;
