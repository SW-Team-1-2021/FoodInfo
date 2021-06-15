import React from "react";
import './login.css'

export default function Index() {
    return (
        <div className="contenedorPrincipal ">
            <div className="contenedorSecundario">
                <h2>Iniciar Sesion</h2>
                <label>Usuario</label>
                <input type="text" className="form-control"></input><br></br>
                <label>Contraseña</label>
                <input type="password" className="form-control"></input><br></br>
                <button className="btn btn-success">Ingresar</button>
            </div>
        </div>

    )
}
