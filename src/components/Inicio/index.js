import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import ComponentBuscador from "../Buscador";
import "./style.css";
import { Categorias } from "./Categorias";
import { URL } from '../../global/const';

function Inicio() {
  let history = useHistory();

  const accionBuscar = (text) => {
    const params = {
      name: text,
    };
    search(params);
  };

  const accionBuscarCategoria = (text) => {
    const params = {
      category: text,
    };
    search(params);
  };

  const search = (params) => {
    axios
      .get(URL, {
        params,
      })
      .then((res) => {
        const alimentos = res.data;
        history.push({
          pathname: "/ui/resultados",
          state: { alimentos },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div style={{position:'relative', top:'60px'}}>
      <div className="container-title">
        <h1 className="titulo-catalogo" align="center">
          <strong>CATÁLOGO DE ALIMENTOS</strong>
        </h1>
        <ComponentBuscador accionBuscar={accionBuscar} />
      </div>
      <div style={{ height: "20px" }}></div>
      <h2 className="categorias" align="center">
        CATEGORIAS
      </h2>
      <Categorias accionBuscarCategoria={accionBuscarCategoria} />
    </div>
  );
}

export default Inicio;