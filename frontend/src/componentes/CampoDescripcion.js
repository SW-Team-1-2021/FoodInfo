import React from 'react';
import {Descri,Label,Input, LeyendaError}  from './../elementos/Formularios';

const Descripcion=({estado,cambiarEstado,expresionRegular,leyendaError,funcion})=>{

   

    const onChange=(e)=>{
        cambiarEstado({...estado, campo: e.target.value});
        //console.log(e.target.value);

    }

   const validacion=()=>{
    if(expresionRegular){
     if(expresionRegular.test(estado.campo)){
          cambiarEstado({...estado, valido: 'true'});
          console.log('Input Correcto');
      }else{
        cambiarEstado({...estado, valido: 'false'});
           console.log('Input INCorrecto');
      }
   }
}
if(funcion){
  funcion();
}

    return(
      
        <Descri >
        <Label htmlFor="" valido={estado.valido}>Descripcion</Label>
        <Input 
         type="text" 
         placeholder="Descripcion"
         value={estado.campo}
         onChange={onChange}
         onKeyUp={validacion}
         onBlur={validacion}
         valido={estado.valido}
          />
        <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
      </Descri>

    
 );

} 
 export default Descripcion;