import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import styled from "styled-components";

// import { Container } from './styles';

const Main = styled.main`
  background-color: var(--red);
  color: var(--white);
  flex: 1;
  padding: 50px 5% 0px 5%;
`;

function PageDefault({ children }) {
  return (
    <>
      <Navbar />
      <Main>{children}</Main>

      <Footer />
    </>
  );
}

export default PageDefault;
