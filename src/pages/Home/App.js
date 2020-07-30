import React from "react";
import Navbar from "../../components/Navbar";
import BannerMain from "../../components/BannerMain/index";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import dadosIniciais from "../../data/dados_iniciais.json";

function Home() {
  return (
    <div>
      <Navbar />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        //videoDescription={"O que é fron end?"}
      />

      <Carousel category={dadosIniciais.categorias[0]} />

      <Carousel category={dadosIniciais.categorias[1]} />

      <Carousel category={dadosIniciais.categorias[2]} />

      <Footer />
    </div>
  );
}

export default Home;
