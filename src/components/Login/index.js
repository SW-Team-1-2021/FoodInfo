import React from "react";
import './login.css'

export default function Index() {
    return (
        <div className="contenedorPrincipal ">
            <div className="contenedorSecundario">
                <h2 className="titulo">Iniciar Sesión</h2>
                <label>Correo electrónico</label>
                <input type="text" className="form-control"></input><br></br>
                <label>Contraseña</label>
                <input type="password" className="form-control"></input><br></br>
                <button className="btn btn-success">Ingresar</button>
            </div>
        </div>

    )
}
