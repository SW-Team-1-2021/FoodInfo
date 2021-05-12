import React, { useState } from 'react';
import ComponenteInput from '../AñadirAlimento/CampoInput';
import './style.css';

function ComponentBuscador({ accionBuscar }) {
    const [busqueda, cambiarBusqueda] = useState({ campo: '', valido: null });
    const SOLO_LETRAS_ESPACIOS_ACEPTOS = /^[A-zÀ-ú\s]+$/;

    const accionEnter = (event) => {
        if (event.keyCode === 13) {
            console.log(busqueda);
            accionBuscar(event.target.value)
        }
    }

    return (
        <div className="input-container" >
            <span className="material-icons icon">search</span>
            <ComponenteInput className="input-field" type="text" placeholder="Buscar" pattern={SOLO_LETRAS_ESPACIOS_ACEPTOS}
                nuMax={80} onKeyDown={(e) => accionEnter(e)} estado={busqueda} cambiarEstado={cambiarBusqueda} />
        </div>
    );
}

export default ComponentBuscador;