import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home/App";

import { Switch, Route, BrowserRouter } from "react-router-dom";

import CadastroVideo from "./pages/cadastro/Video";
import CadastroCategoria from "./pages/cadastro/Categoria";
const Pagin404 = () => <div>Erro 404</div>;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagin404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
