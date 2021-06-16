import React from "react";
import './login.css'
import logo from '../../images/logo.png'


export default function Index() {
    return (
        
        <div className="contenedorPrincipal ">
            <div className="contenedorSecundario">
                <h2 className="titulo">Iniciar Sesión</h2>
                <img src={logo} className='image1' alt='logo' width="100px" height="100px" />
                <label>Correo electrónico</label>
                <input type="text" className="form-control"></input>
                <label>Contraseña</label>
                <input type="password" className="form-control"></input><br></br>
                <button className="btn btn-success">Ingresar</button>
            </div>
        </div>
        

    )
}
