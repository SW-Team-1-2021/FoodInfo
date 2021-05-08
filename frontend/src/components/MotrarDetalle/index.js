import React from 'react';
import {CajaMayor, Titulo, Imagen, Detalle, Parrafos} from './estilos';
import logo from '../../images/logo.png';

const mostrarDetalle=()=>{
   return (
       <CajaMayor>
        <Titulo>
         <h1 align="center">Mostrar Alimento</h1>
       </Titulo>
        <Imagen>
            <img src={logo} height="280px" width="280px" alt=""/>
            <br></br>
            <h4><b>Nombre de alimento</b></h4>
            
        </Imagen>
        <Detalle>
            <Parrafos>
            
            Además contiene fibra, la cual favorece el tránsito intestinal, regulando la digestión, facilita la eliminación de colesterol malo. Aporta vitamina C, tiene un 136% de la cantidad diaria recomendada, ayudando a fijar el hierro, potenciando el sistema inmune y siendo un poderoso antiroxidante
            </Parrafos>
          
        </Detalle>
      </CajaMayor>  
   );
}
export default mostrarDetalle;