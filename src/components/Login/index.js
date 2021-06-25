import React, { useState } from "react";
import "./login.css";
import logo from "../../images/logo.png";
import {
  Formulario,
  ContenedorBotonCentrado,
  Boton,
  MensajeExito,
  MensajeError,
} from "./estilosLogin";
import ComponenteInput from "./componentes/input";
import axios from "axios";
import { URL_LOGIN } from "../../global/const";

const MSG_ERROR_NAME = "Correo y/o contraseña incorrecto";

var msg = "Llenar todos los espacios requeridos";

const Index = () => {
  const [correo, cambiarCorreo] = useState({ campo: "", valido: null });
  const [password, cambiarPassword] = useState({ campo: "", valido: null });
  const [formularioValido, cambiarFormularioValido] = useState(null);

  const expresiones = {
    password: /^.{1,10}$/,
    // correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{1,10}$/,
    // correo: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/,
    correo: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/,

    // correo: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9_\s_-___@_.-]*$/,
    // correo: /^[a-zA-Z0-9._-\s@a-zA-Z0-9._-\s\.a-zA-Z.-\s]*$/,

  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (correo.valido === true && password.valido === true) {
      var datos = {
        username: correo.campo,
        password: password.campo,
      };
      axios
        .post(URL_LOGIN, datos)
        .then((res) => {
          cambiarFormularioValido(true);
          cambiarCorreo({ campo: "", valido: null });
          cambiarPassword({ campo: "", valido: null });
        })
        .catch((error) => {
          if (error.response.status === 401) {
            msg = MSG_ERROR_NAME;
          }
          cambiarFormularioValido(false);
        });
    } else {
      msg = "Llenar todos los espacios requeridos";
      cambiarFormularioValido(false);
      if (correo.valido == null) {
        cambiarCorreo({ valido: false });
      }
      if (password.valido == null) {
        cambiarPassword({ valido: false });
      }
    }
  };

  return (
    <div className="contenedorPrincipal ">
      <div className="contenedorSecundario">
        <h2 className="titulo">
          <b>Iniciar Sesión</b>
        </h2>
        <img
          src={logo}
          className="image1"
          alt="logo"
          width="100px"
          height="100px"
        />
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
          {/* <ComponenteInput
            estado={correo}
            cambiarEstado={cambiarCorreo}
            tipo="email"
            nuMin="1"
            nuMax="100"
            label="*Correo electrónico"
            placeholder="ejemplo@gmail.com"
            name="correo"
            leyendaError=" Introdusca un coorreo valido "
            expresionRegular={expresiones.correo}
            requerido={""}
          /> */}
          <ComponenteInput
            estado={password}
            cambiarEstado={cambiarPassword}
            tipo="password"
            label="Contraseña"
            placeholder="Escriba su contraseña"
            name="password"
            leyendaError="La contraseña debe ser de 1 a 10 caracteres"
            expresionRegular={expresiones.password}
            requerido={""}
          />

          {formularioValido === false && (
            <MensajeError>
              <p>
                <b>Error: </b>
                {msg}{" "}
              </p>
            </MensajeError>
          )}

          <ContenedorBotonCentrado>
            <Boton type="submit">Ingresar</Boton>
            {formularioValido === true && (
              <MensajeExito>Sesion correctamente iniciada</MensajeExito>
            )}
          </ContenedorBotonCentrado>
        </Formulario>
      </div>
    </div>
  );
};

export default Index;
