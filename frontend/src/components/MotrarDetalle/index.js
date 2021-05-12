import React, {useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { CajaMayor, Titulo, Imagen, Detalle, Subtitulos,  Otros, Parrafos } from './estilos';
import papaya from '../../images/papaya.jpg';

let alimento = '';

const MostrarDetalle = props => {
    
    const location = useLocation();
    const [food, setFood] = useState({});
    
    
    useEffect(() => {
        alimento = location.state ? location.state.dato : alimento;
        setFood(alimento);
     }, [location]);

    return (
        <CajaMayor>
            <Titulo>
                <h1 align="center">DETALLE DEL ALIMENTO</h1>
            </Titulo>
            <Imagen>
                <img src={papaya} height="280px" width="280px" alt="" />
                <br></br>
                <h4 align="center"><b>{food.nombre}</b></h4>

            </Imagen>
            <Detalle>
                <Parrafos>
                  {food.descripcion}
                </Parrafos>
               <Otros>
                <Subtitulos>
                  Nombre Opcional
                </Subtitulos> 
                <Parrafos>
                  {food.segundonombre}
                </Parrafos>  
               <Subtitulos>        
                    CATEGORIA
              </Subtitulos>
              <Parrafos>
                  {food.categoria}
              </Parrafos>
              <Subtitulos>
                   PROCEDENCIA
              </Subtitulos>
              <Parrafos>
                  {food.procedencia}
              </Parrafos>
              <Subtitulos>
                   CALORIAS
              </Subtitulos>
              <Parrafos>
                  {food.calorias}
              </Parrafos>
            <Subtitulos>
                    HORARIOS DE CONSUMO
            </Subtitulos>
            <Parrafos>
                {food.horainicio}-{food.horafinal}
            </Parrafos>
                <Subtitulos>
                    ADVERTENCIAS
              </Subtitulos>
            <Parrafos>
              {food.advertencia}
            </Parrafos>
            <Subtitulos>
                    COMBINACION DE ALIMENTOS
           </Subtitulos>
           <Parrafos>
               {food.combinacion}
           </Parrafos>
        </Otros>
            </Detalle>
           
        </CajaMayor>
    );
}
export default MostrarDetalle;