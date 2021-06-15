import React, { useState } from 'react';
import Input from '../AñadirAlimento/CampoInput';
import { Boton, MensajeError } from '../AñadirAlimento/estilosFormmulario';
import { Formulario, ContenedorBotonCentrado,H1 } from './estilos';
import Genero from '../Administrador/Genero/index';
import Fecha from './Fecha';

const Administrador = () => {
  const [nombres, cambiarNombres] = useState({ campo: '', valido: null });
  const [apellidos, cambiarApellidos] = useState({ campo: '', valido: null });
  const [ci, cambiarCi] = useState({ campo: '', valido: null });
  const [correo, cambiarCorreo] = useState({ campo: '', valido: null });
  const [nacimiento, cambiarNacimiento] = useState({ campo: '', valido: null });
  const [genero, cambiarGenero] = useState({ campo: '', valido: null });
  const [formulario,cambiarFormulario]=useState(null);

  const expresiones = {

    nombre: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ_\s_ñ-]*$/,
    apellido: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ_\s_ñ-]*$/,
    correo_electronico: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9_\s_-___@_.-]*$/,
    carnet: /^[0-9\b]*$/,
  }

  const onSubmit = (e) => {
		e.preventDefault();

    if(
      nombres.valido===true&&
      apellidos.valido===true&&
      ci.valido===true&&
      correo.valido===true&&
      nacimiento.valido===true&&
      genero.valido===true){

        cambiarFormulario(true);
        var datos={
          nombres:nombres.campo,
          apellidos:apellidos.campo,
          ci:ci.campo,
          correo:correo.campo,
          nacimiento:nacimiento.campo,
          genero:genero.campo
        }
        console.log(datos);


    }
    else{
         cambiarFormulario(false);
        if(nombres.valido==null){	
          cambiarNombres({valido: false});
         }
        if(apellidos.valido==null){
           cambiarApellidos({valido: false});
         }

         if(ci.valido==null){
          cambiarCi({valido: false});
          }
        if(correo.valido==null){
            cambiarCorreo({valido: false});

        }
        if(nacimiento.valido==null){
          cambiarNacimiento({valido: false});

      }
        if(genero.valido==null){
          cambiarGenero({valido: false});

      }
    }
  }
  console.log(nacimiento.valido);
  return (
    <main>
      <H1 >Agregar Administrador</H1>

      <Formulario action="" onSubmit={onSubmit}>
        <Input
          estado={nombres}
          cambiarEstado={cambiarNombres}
          tipo="text"
          nuMin="1"
          nuMax="30"
          label="*Nombres"
          placeholder="ej: Michel"
          name="nombre"
          leyendaError=" Los nombres tienen que ser de 1 a 30 caracteres, sin caracteres especiales. "
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
          leyendaError=" Los apellidos tiene que ser de 1 a 40 caracteres, sin caracteres especiales. "
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
          leyendaError=" El CI tiene que ser de 1 a 40 caracteres, sin caracteres especiales. "
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
          leyendaError=" Introdusca un coorreo valido "
          expresionRegular={expresiones.correo_electronico}
          requerido={""}
        />
        {/* <Input
          estado={nacimiento}
          cambiarEstado={cambiarNacimiento}
          tipo="date"
          nuMin="1"
          nuMax="80"
          label="*Fecha Nacimiento"
          name="nacimiento"
          requerido={""}
        /> */}

        <Fecha
         estado={nacimiento}
         cambiarEstado={cambiarNacimiento}
         nuMin="1"
         nuMax="100"
         label="*Fecha Nacimiento"
         placeholder="ej: mevale90@gmail.com"
         name="fecha"
         leyendaError=" Introdusca su fecha de nacimiento"
         requerido={""}
        />
        <Genero
          estado={genero}
          cambiarEstado={cambiarGenero}
          leyendaError=" Selecione un genero"

        />

        {formulario === false && <MensajeError>
					<p>
						< b > Error: </b> 
					</p>
				</MensajeError>}

        <ContenedorBotonCentrado>
          <Boton type="submit">Enviar</Boton>
        </ContenedorBotonCentrado>

      </Formulario>
    </main>
  );
}
export default Administrador;