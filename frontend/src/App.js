import React /*{useState}*/from 'react';
import {Formulario,BotonMedio,Boton} from './elementos/Formularios';
import Campos from './componentes/Campos';
import CampoHoraio from  './componentes/CampoHorario';
import CampoImagen from  './componentes/CampoImagen';
import Descripcion from './componentes/CampoDescripcion';

const App = ()=> {
   //const [cate,cambiarUsuario] =useState({cuadrado: '', valido: null});
   

   const  expresiones  =  {
    
    nombre : /^[a-zA-Z0-9_\s-]{3,80}$/,  // Letras 80.
    
  }
   const onSubmit=(e)=>{
        e.preventDefault();

        if(Campos.props.valido){
          console.log("verdad")
        }
   }   
      
    return (
      <main>
        <h2 align="center" ><font face="Comic Neue">AGREGAR  ALIMENTO</font></h2>
        <Formulario action="" onSubmit={onSubmit}>
           <Campos
          //  estado={cate}
           // cambiarEstado={cambiarUsuario}
            tipo="text"
            label="Categoria"
            placeholder="Escriba el nombre"
            name="categoria"
            mensajeError="La categoria tiene que ser de 4 a 80 caracteres . "
            expresionRegular={expresiones.nombre} 
            //   asegurar=props.valido

             
           />
           <Campos 
             tipo="text"
             label="Nombre Alimento"
             placeholder="ejemplo: palta"
             name="nombre"
             mensajeError=" El nombre tiene que ser de 4 a 80 caracteres, sin caracteres especiales. "
             expresionRegular={expresiones.nombre} 
           />
           <Campos 
            tipo="text"
            label="Nombre Opcional"
            placeholder="ejemplo: aguacate"
            name="segundo"
            mensajeError=" El nombre tiene que ser de 4 a 80 caracteres sin caracteres especiales. "
            expresionRegular={expresiones.nombre} 
           />
           <Campos 
             tipo="text"
             label="Procedencia"
             placeholder="ejemplo:Latinoamerica "
             name="procedencia"
             mensajeError=" La procedencia tiene que ser de 4 a 80 carcteres sin caracteres especiales. "
             expresionRegular={expresiones.nombre} 
           />
           <Campos
             tipo="number"
             label="Calorias"
             placeholder="ejemplo: 24"
             name="calorias"
             mensajeError=" ingrese solo numeros "
             expresionRegular=""
           />
           
           <CampoHoraio
            mensajeError=""
           /> 
           <Campos
             tipo="text"
             label="Advertencias"
             placeholder="ejemplo: no comer durante el embarazo"
             name="advertencias"
             mensajeError=" Las Advertencias tienen que ser de 4 a 80 caracteres sin caracteres especiales. "
             expresionRegular={expresiones.nombre} 
           />
           <Campos
             tipo="text"
             label="Combinacion de Alimentos"
             placeholder="ejemplo: 24"
             name="combinacion"
             mensajeError=" La combinacion de alimentos deven ser de 4 a 80 caracteres sin caracteres especiales. "
             expresionRegular={expresiones.nombre} 
           />
           
           <CampoImagen/>
           
          <Descripcion
            mensajeError="La descripcion deve ser de 4 a 250 digitos sin caracteres especiales."
            expresionRegular={expresiones.nombre} 
           />
          
          

          <BotonMedio>
            <p><b>Error: </b>Por favor rellene el formulario correctamente</p>
          </BotonMedio>
          <BotonMedio>
            <Boton type="submit">Enviar</Boton>
            <p>Formulario Enviado correctamente</p>
          </BotonMedio>

        </Formulario>
      </main>
    );
  }
  
  export default App;