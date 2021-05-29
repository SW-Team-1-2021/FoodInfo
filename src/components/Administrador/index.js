import React, { useState } from 'react';
import Input from '../AñadirAlimento/CampoInput'
import { Boton } from '../AñadirAlimento/estilosFormmulario'
import { Formulario, ContenedorBotonCentrado } from './estilos';
import Genero from '../Administrador/Genero/index'
const Administrador = () => {
  const [nombres, cambiarNombres] = useState({ campo: '', valido: null });
  const [apellidos, cambiarApellidos] = useState({ campo: '', valido: null });
  const [ci, cambiarCi] = useState({ campo: '', valido: null });
  const [correo, cambiarCorreo] = useState({ campo: '', valido: null });
  const [nacimiento, cambiarNacimiento] = useState({ campo: '', valido: null });
  const [genero, cambiarGenero] = useState({ campo: '', valido: null });

  const expresiones = {

    nombre: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ_\s_ñ-]{1,30}$/,
    apellido: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ_\s_ñ-]{1,40}$/,
    correo_electronico: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9_\s_-___@_.-]{1,100}$/,
    carnet: /^[0-9\b]+$/,
  }

  return (
    <main>
      <h1 align="center">Agregar Administrador</h1>

      <Formulario>
        <Input
          estado={nombres}
          cambiarEstado={cambiarNombres}
          tipo="text"
          nuMin="1"
          nuMax="30"
          label="*Nombres"
          placeholder="ej: Michel"
          name="nombre"
          expresionRegular={expresiones.nombre}
          requerido={""}
        />
        <Input
          estado={apellidos}
          cambiarEstado={cambiarApellidos}
          tipo="text"
          nuMin="1"
          nuMax="40"
          label="*Apellidos"
          placeholder="ej: Mamani choquehuanca"
          name="apellido"
          expresionRegular={expresiones.apellido}
          requerido={""}
        />
        <Input
          estado={ci}
          cambiarEstado={cambiarCi}
          tipo="text"
          nuMin="1"
          nuMax="10"
          label="*Carnet de Identidad"
          placeholder="ej: 3490293"
          name="ci"
          expresionRegular={expresiones.carnet}
          requerido={""}
        />
        <Input
          estado={correo}
          cambiarEstado={cambiarCorreo}
          tipo="email"
          nuMin="1"
          nuMax="100"
          label="*Correo Electronico"
          placeholder="ej: mevale90@gmail.com"
          name="correo"
          expresionRegular={expresiones.correo_electronico}
          requerido={""}
        />
        <Input
          estado={nacimiento}
          cambiarEstado={cambiarNacimiento}
          tipo="date"
          nuMin="1"
          nuMax="80"
          label="*Fecha Nacimiento"
          placeholder="ej: mevale90@gmail.com"
          name="nacimiento"
          requerido={""}
        />
        <Genero
          estado={genero}
          cambiarEstado={cambiarGenero}
        />

        <ContenedorBotonCentrado>
          <Boton type="submit">Enviar</Boton>
        </ContenedorBotonCentrado>


      </Formulario>
    </main>
  );
}
export default Administrador;