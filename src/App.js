import React from "react";
import Navbar from "./components/Navbar";
import BannerMain from "./components/BannerMain/index";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import dadosIniciais from "./data/dados_iniciais.json";

function App() {
  return (
    <div>
      <Navbar />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é fron end?"}
      />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[1]} />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[2]} />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[3]} />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[4]} />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[5]} />

      <Footer />
    </div>
  );
}

export default App;
