import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import ComponentBuscador from "../Buscador";
import "./style.css";
import { Categorias } from "./Categorias";

const URL = 'http://localhost:8082/api/food';

function Inicio() {

  let history = useHistory();

  const accionBuscar = (text) => {
    const params = {
      name : text
  }
    search(params);
  };

  const accionBuscarCategoria = (text) => {
    //Sebas, aqui tienes que enviar la categoria que se
    // ha seleccionado, en el texto tienes que enviar
    // el nombre {frutas, verduras, cereales}
    // solo eso, luego la funciopn ya sabe llamar a la pagina de resultados.
    
    const params = {
      category : text
    }
    search(params);
  };

  const search = (params) => {
      axios.get(URL,{
          params
      }).then((res) => {
        const alimentos = res.data;
        history.push({
          pathname: '/ui/resultados',
          state: { alimentos }
        });
      }).catch(error => {
          console.log(error);
      });
  }

  return (
    <div>
      <div className="container-title">
          <h1 className="titulo-catalogo" align="center">
            <strong>CATÁLOGO DE ALIMENTOS</strong>
          </h1>
          <ComponentBuscador accionBuscar={accionBuscar} />
      </div>
      <div style={{ height: "50px" }}></div>
      <h2 className="categorias" align="center">
        CATEGORIAS
      </h2>
      <Categorias />
    </div>
  );
}

export default Inicio;
