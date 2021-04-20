import React, {useState} from 'react';
import {Descri,Label,Input,MensajeError}  from './../elementos/Formularios';

const Descripcion=({expresionRegular,mensajeError})=>{

   const [descripcion,cambiarDescripcion] =useState({camp: '', vale: null});

    const onChange=(e)=>{
        cambiarDescripcion({...descripcion, camp: e.target.value});
        //console.log(e.target.value);

    }

   const validacion=()=>{
    if(expresionRegular){
     if(expresionRegular.test(descripcion.camp)){
          cambiarDescripcion({...descripcion, vale: true});
          console.log('Input Correcto');
      }else{
        cambiarDescripcion({...descripcion, vale: false});
           console.log('Input INCorrecto');
      }
   }

 }
    return(
        <Descri >
        <Label htmlFor="" valido={descripcion.vale}>Descripcion</Label>
        <Input 
         type="text" 
         placeholder="Descripcion"
         value={descripcion.camp}
         onChange={onChange}
         onKeyUp={validacion}
         onBlur={validacion}
         valido={descripcion.vale}
          />
        <MensajeError valido={descripcion.vale}>{mensajeError}</MensajeError>
      </Descri>

    
 );

} 
 export default Descripcion;