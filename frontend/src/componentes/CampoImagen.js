import React, {useState} from 'react';
import {GrupoInput,Input,Label}  from './../elementos/Formularios';

  

const Imagen=()=>{

  const [fileUrl, setFileUrl]=useState(null);

  const vistaImagen=(event)=>{
    const imagenCargada=event.target.files[0];
    const imagenUrl=URL.createObjectURL(imagenCargada); 
    setFileUrl(imagenUrl);
  }

    return(
        <GrupoInput>
        <Label htmlFor="">Subir Imagen</Label><label></label>
       
        
        
        <Input type="file" name="file" 
        id="archivo" 
         placeholder="Subir" 
         accept="image/*" 
         onChange={vistaImagen}/>
         
         <image src={fileUrl} height="5px" width="5px" />

         
      </GrupoInput>

    
 );

} 
 export default Imagen;