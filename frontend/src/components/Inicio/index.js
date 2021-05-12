import React from 'react';
import ComponentBuscador from '../Buscador';
import "./style.css";

function Inicio() {

    const accionBuscar = (text) => {
        alert(text);
    }

    return (
        <div className="container-title">
            <h1 className="titulo-catalogo" align='center'><strong>CATÁLOGO DE ALIMENTOS</strong></h1>
            <ComponentBuscador accionBuscar={accionBuscar}/>
        </div>
    );
}

export default Inicio;