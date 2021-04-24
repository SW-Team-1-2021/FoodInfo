import React  from 'react';
import {Label}  from './../estilosFormmulario';

  

const Imagen=({estado,cambiarEstado})=>{

    const onChange =(e)=>{
    const input =e.target;
       
       
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                cambiarEstado({campo:e.target.result,valido:'true'})

            };
            reader.readAsDataURL(input.files[0]);
        }
    }

    return(
        <div>
        <Label htmlFor="imagen" >Subir imagen</Label>
        
            <input 
                type="file"
               
                accept="image/*"

                 
                 onChange={onChange}
            />
            
        
    </div>

    
 );

} 
 export default Imagen;