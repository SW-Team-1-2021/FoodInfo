import React from 'react';
import {GrupoInput,Label,Input,MensajeError} from './../elementos/Formularios';

const horario =({mensajeError})=>{
    return(
        <GrupoInput  >
            <Label htmlFor="">Sugerencia Horario </Label><Label>de consumo</Label>
            <Input type="time" placeholder="de:"/><Input type="time" placeholder="a:"/>
            <MensajeError>{mensajeError}</MensajeError>
        </GrupoInput>
    ) ;

}

export default horario;