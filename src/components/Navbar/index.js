import React from "react";
import logo from "../../assets/logo-zeflix.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

import { Button } from "../ButtonLink/styles";

//import ButtonLink from "../ButtonLink";

// import { Container } from './styles';

function Navbar() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={logo} alt="logo" />
      </Link>
      <Button to="/cadastro/video" className="ButtonLink">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Navbar;
