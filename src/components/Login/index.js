import React, { useState } from 'react';
import './login.css'
import logo from '../../images/logo.png'
import {Formulario,ContenedorBotonCentrado,Boton,MensajeExito,MensajeError } from './estilosLogin'
import ComponenteInput from './componentes/input';

export default function Index() {
    const [correo, cambiarCorreo]=useState({campo:'',valido:null});
    const [password, cambiarPassword]=useState({campo:'',valido:null});

    const expresiones = {
        password: /^.{4,30}$/,
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    }

    return (        
        <div className="contenedorPrincipal ">
            <div className="contenedorSecundario">
                <h2 className="titulo">Iniciar Sesión</h2>
                <img src={logo} className='image1' alt='logo' width="100px" height="100px" />
                <Formulario action="">
                    <ComponenteInput
                        estado={correo}
                        cambiarEstado={cambiarCorreo}
                        tipo="text"
                        label="Correo electrónico"
                        placeholder="ejemplo@gmail.com"
                        name="correo"
                        leyendaError="Solo acepta un máximo de 250 caracteres, y solamente se permitiran letras, numeros, guion, guion bajo, punto y arroba"
                        expresionRegular={expresiones.correo}
                    />
                    <ComponenteInput
                        estado={password}
                        cambiarEstado={cambiarPassword}
                        tipo="password"
                        label="Contraseña"
                        placeholder="Escriba su password"
                        name="password"
                        leyendaError="Solo se acepta un máximo de 30 caracteres"
                        expresionRegular={expresiones.password}
                    />

                    {false && <MensajeError>
                        <p><b>Error:</b> Llenar todos los espacios requeridos </p>
                    </MensajeError>}
                    
                    <ContenedorBotonCentrado>
                        <Boton type="submit">Ingresar</Boton>
                        <MensajeExito>Sesion correctamente iniciada</MensajeExito>
                    </ContenedorBotonCentrado>
                </Formulario>
                
            </div>
        </div>
    )
}