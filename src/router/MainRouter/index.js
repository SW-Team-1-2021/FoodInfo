import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import MostrarDetalle from "../../components/MotrarDetalle";
import Alimentos from "../../components/Alimentos";
import AñadirAlimento from "../../components/AñadirAlimento";
import Header from "../../components/Header";
import Inicio from "../../components/Inicio";
import ResultadoBusqueda from "../../components/ResultadoBusqueda";
import Login from "../../components/Login";
import "./style.css";

function MainRouter() {
  return (
    <Router>
      {/*<Route path="/ui" component={Header} />*/}
      <Switch>
        <Route path="/ui/inicio">
          <div className="container-image inicio">
            <Header />
            <Inicio />
          </div>
        </Route>
        <Route path="/ui/alimentos">
          <div className="container-image alimentos">
            <Header />
            <Alimentos />
          </div>
        </Route>
        <Route path="/ui/añadir">
          <div className="container-image anadir-alimento">
            <Header />
            <AñadirAlimento />
          </div>
        </Route>
        <Route path="/ui/resultados">
          <div className="container-image resultado-busqueda">
            <Header />
            <ResultadoBusqueda />
          </div>
        </Route>
        <Route path="/ui/mostrar">
          <div className="container-image mostrar-detalle">
            <Header />
            <MostrarDetalle />
          </div>
        </Route>
        <Route path="/ui/login">
          <div className="container-image login">
            <Header />
            <Login />
          </div>
        </Route>
        <Redirect from="" to="/ui/inicio" exact />
      </Switch>
    </Router>
  );
}

export default MainRouter;
