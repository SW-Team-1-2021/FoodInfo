import React, { useState } from 'react';
import Input from '../AñadirAlimento/CampoInput'
import {Boton} from '../AñadirAlimento/estilosFormmulario'
import {Formulario,ContenedorBotonCentrado} from './estilos';

const Administrador = () => { 
    const [nombres,cambiarNombres]=useState({ campo: '', valido: null});
    const [apellidos,cambiarApellidos]=useState({ campo: '', valido: null});
    const[ci,cambiarCi]=useState({ campo: '', valido: null});
    const[correo,cambiarCorreo]=useState({ campo: '', valido: null});
    const[nacimiento,cambiarNacimiento]=useState({ campo: '', valido: null});

return(
<main>
<h1 align="center">Agregar Administrador</h1>

 <Formulario>
   <Input
     estado={nombres}
     cambiarEstado={cambiarNombres}
     tipo="text"
     nuMin="1"
     nuMax="80"
     label="*Nombres"
     placeholder="ej: Michel"
     name="nombre"
     requerido={""}
   />
   <Input
     estado={apellidos}
     cambiarEstado={cambiarApellidos}
     tipo="text"
     nuMin="1"
     nuMax="80"
     label="*Apellidos"
     placeholder="ej: Mamani choquehuanca"
     name="apellido"
     requerido={""}
   />
   <Input
     estado={ci}
     cambiarEstado={cambiarCi}
     tipo="text"
     nuMin="1"
     nuMax="80"
     label="*Carnet de Identidad"
     placeholder="ej: 3490293"
     name="ci"
     requerido={""}
   />
      <Input
     estado={correo}
     cambiarEstado={cambiarCorreo}
     tipo="email"
     nuMin="1"
     nuMax="80"
     label="*Correo Electronico"
     placeholder="ej: mevale90@gmail.com"
     name="correo"
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
   <ContenedorBotonCentrado>
					<Boton type="submit">Enviar</Boton>
	</ContenedorBotonCentrado>
   
   
 </Formulario>
 </main> 
    );
}
export default Administrador;