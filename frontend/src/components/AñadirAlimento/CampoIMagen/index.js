import React  from 'react';
import {Label}  from './../estilosFormmulario';

  

const Imagen=()=>{

  

    return(
        <div>
        <Label htmlFor="imagen" >Subir imagen</Label>
        
            <input 
                type="file"
                 
                id="imagen"
                
                accept="image/*"
            />
            
        
    </div>

    
 );

} 
 export default Imagen;