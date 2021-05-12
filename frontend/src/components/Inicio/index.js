import React from 'react';
import ComponentBuscador from '../Buscador';
import "./style.css";
import { Categorias } from "./Categorias"

function Inicio() {

    const accionBuscar = (text) => {
        alert(text);
    }

  return (
    <div className="container-title">
      <h1 className="titulo-catalogo" align="center">
        <strong>CATÁLOGO DE ALIMENTOS</strong>
      </h1>
        <div className="container-title">
            <h1 className="titulo-catalogo" align='center'><strong>CATÁLOGO DE ALIMENTOS</strong></h1>
            <ComponentBuscador accionBuscar={accionBuscar}/>
        </div>
      <div style={{height:"50px"}}></div>
      <h2 className="categorias" align="center">
        CATEGORIAS
      </h2>
      <Categorias/>
    </div>
  );
}
export default Inicio;
