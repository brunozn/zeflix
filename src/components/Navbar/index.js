import React from "react";
import logo from "../../assets/logo-zeflix.png";
import "./Navbar.css";

import { Button } from "../ButtonLink/styles";

//import ButtonLink from "../ButtonLink";

// import { Container } from './styles';

function Navbar() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={logo} alt="logo" />
      </a>
      <Button as="a" href="/" className="ButtonLink">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Navbar;
