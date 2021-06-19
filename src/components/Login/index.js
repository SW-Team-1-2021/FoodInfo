import React, { useState } from 'react';
import './login.css'
import logo from '../../images/logo.png'
import {Formulario,ContenedorBotonCentrado,Boton,MensajeExito,MensajeError } from './estilosLogin'
import ComponenteInput from './componentes/input';

export default function Index() {
    const [correo, cambiarCorreo]=useState({campo:'',valido:null});
    const [password, cambiarPassword]=useState({campo:'',valido:null});
    const [formularioValido,cambiarFormularioValido]=useState(null);

    const expresiones = {
        password: /^.{4,30}$/,
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{1,10}$/
    }

    const onSubmit=(e) =>{
        e.preventDefault();
        if(
            correo.valido === 'true' && 
            password.valido === 'true')
        {
            cambiarFormularioValido(true);
            cambiarCorreo({campo:'', valido: ''});
            cambiarPassword({campo:'', valido:null });
        }else{
            cambiarFormularioValido(false);
        }
    }

    // const correoValido="yara.ale.ok.20@gmail.com";
    // const passwordValido="12345"
    // const validarLogin = () => {
    //     if(correo.campo.length!=0 && password.campo.length!=0){
    //         if(correo.campo.equals(correoValido)){
    //             if(password.campo.equals(passwordValido)){
    //                 alert("Datos correctos");
    //             }else{
    //                 alert("Contraseña incorrecta");
    //             }
    //         }else{
    //             alert("Usuario incorrecto");
    //         }
    //     }else{
    //         alert("Llenar todos los espacios");
    //     }
    // }

    return (        
        <div className="contenedorPrincipal ">
            <div className="contenedorSecundario">
                <h2 className="titulo">Iniciar Sesión</h2>
                <img src={logo} className='image1' alt='logo' width="100px" height="100px" />
                <Formulario action="" onSubmit={onSubmit}>
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

                    {formularioValido === false && <MensajeError>
                        <p><b>Error:</b> Llenar todos los espacios requeridos </p>
                    </MensajeError>}
                    
                    <ContenedorBotonCentrado>
                        <Boton type="submit">Ingresar</Boton>
                        {formularioValido === true && <MensajeExito>Sesion correctamente iniciada</MensajeExito>}
                    </ContenedorBotonCentrado>
                </Formulario>
                
            </div>
        </div>
    )
}