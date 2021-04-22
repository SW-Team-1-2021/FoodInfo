import React from 'react';
import {Horario,Label,Input,LeyendaError,SuperHorario} from './../elementos/Formularios';

const horario =({mensajeError})=>{
    return(
       <div> 
        <SuperHorario  >
            <Label htmlFor="">Sugerencia Horarios de Consumo </Label>
            <Horario>
            <Input type="time" placeholder="de:"/><Input type="time" placeholder="a:"/>
            </Horario>
            <LeyendaError>{mensajeError}</LeyendaError>
        </SuperHorario>
       </div> 
    ) ;

}

export default horario;