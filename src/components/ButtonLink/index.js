import React from "react";

// import { Container } from './styles';

function ButtonLink(props) {
  //props => {className: "O que passar", href: "/" }
  console.log(props);
  return (
    <a className={props.className} href={props.href}>
      Novo Vídeo
    </a>
  );
}

export default ButtonLink;
