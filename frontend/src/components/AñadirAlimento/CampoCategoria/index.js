import React from 'react';
import {Label,Select,/*Opction*/LeyendaError} from './../estilosFormmulario';

const Categoria=({/*listaCategorias*/leyendaError})=>{

 /*  var indice=document.getElementById("categorias").selectedIndex;

    if( indice === null || indice === 0 ) {
        console.log("elija una opcion");
        //return false;
      }else{
        console.log("verdad");
      }*/
    

   return(
       
       <div>
           <Label>Categoria</Label>
          
           <Select name="categorias" id="categoria" required > 
           <option value="">- Seleccione una categoria</option>
            <option value="1">Frutas</option>
            <option value="2">Verduras</option>
            <option value="3">Carnes y pescado</option>
            <option value="3">Hortalizas</option>
         
           </Select>

          <LeyendaError>{leyendaError}</LeyendaError>
       </div>
   );


}
export default Categoria;