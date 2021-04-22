import React, {useState} from 'react';
import {Label,Input,MensajeError} from './../elementos/Formularios';



const Campos =({ tipo,label,placeholder,name,mensajeError,expresionRegular})=>{
    

  const [categoria,cambiarUsuario] =useState({cuadrado: '', valido: null});

 

  const onChange=(e)=>{
        cambiarUsuario({...categoria, cuadrado: e.target.value});

  }

  const validacion=()=>{
      if(expresionRegular){
        if(expresionRegular.test(categoria.cuadrado)){

             cambiarUsuario({...categoria,  valido: true})
        }else{
            cambiarUsuario({...categoria,  valido: false})
        }
      }

   }
   
    return(
        <div>
        <Label htmlFor={name} valido={categoria.valido}>{label}</Label>
        <Input 
        type={tipo}
         placeholder={placeholder} 
         id={name}
         value={categoria.cuadrado}
        onChange={onChange}
         onKeyUp={validacion}
         onBlur={validacion}
         onClick={validacion}
         valido={categoria.valido}
        
         />
        <MensajeError valido={categoria.valido}>{mensajeError}</MensajeError>
      </div>
    ) ;

}

export default Campos;