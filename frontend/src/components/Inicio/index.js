import React from "react";
import "./style.css";
import { Categorias } from "./Categorias"

function Inicio() {
  return (
    <div className="container-title">
      <h1 className="titulo-catalogo" align="center">
        <strong>CATÁLOGO DE ALIMENTOS</strong>
      </h1>
      <div style={{height:"50px"}}></div>
      <h2 className="categorias" align="center">
        CATEGORIAS
      </h2>
      <Categorias/>
    </div>
  );
}

export default Inicio;
