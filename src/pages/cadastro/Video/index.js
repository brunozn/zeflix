import React from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";

// import { Container } from './styles';

function CadastroVideo() {
  return (
    <PageDefault>
      <h1>cadastro de Video</h1>
      <Link to="/cadastro/categoria">Cadastar Categoria</Link>
    </PageDefault>
  );
}

export default CadastroVideo;
