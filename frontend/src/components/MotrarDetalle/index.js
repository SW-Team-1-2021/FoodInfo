import React from 'react';
import { CajaMayor, Titulo, Imagen, Detalle, Subtitulos,  Otros, Parrafos } from './estilos';
import papaya from '../../images/papaya.jpg';

const mostrarDetalle = () => {

    var datos = {
        categoria: "Frutas",
        nombre: "Papaya",
        segundonombre: "Papio",
        procedencia: "Latinoamerica",
        calorias: "56",
        horainicio: "13:00",
        horafinal: "20:00",
        advertencia: "y El consumo excesivo de papayas puede causar un efecto laxante poderoso en los intestinos provocar irritación gastrointestinal, hinchazón dolores y diarrea. Evita comer grandes cantidades de papaya, especialmente si está inmadura.",
        combinacion: "Papaya con limon",
        imagen: "imagen.campo",
        descripcion: "La papaya es una fruta tropical que se consume por su pulpa principalmente, que suele ser de color anaranjado y de sabor dulce y jugoso. ... La papaya es un alimento rico en agua y bajo en calorías, que aporta minerales como calcio, fósforo y hierro y vitaminas A y C. Contiene papaína, un enzima que favorece la digestión."

    };
    return (
        <CajaMayor>
            <Titulo>
                <h1 align="center">DETALLE DEL ALIMENTO</h1>
            </Titulo>
            <Imagen>
                <img src={papaya} height="300px" width="300px" alt="" />
                <br></br>
                <h4 align="center"><b>{datos.nombre}</b></h4>

            </Imagen>
            <Detalle>
                <Parrafos>
                  {datos.descripcion}
                </Parrafos>
               <Otros>
                <Subtitulos>
                  Nombre Opcional
                </Subtitulos> 
                <Parrafos>
                  {datos.segundonombre}
                </Parrafos>  
               <Subtitulos>        
                    CATEGORIA
              </Subtitulos>
              <Parrafos>
                  {datos.categoria}
              </Parrafos>
              <Subtitulos>
                   PROCEDENCIA
              </Subtitulos>
              <Parrafos>
                  {datos.procedencia}
              </Parrafos>
              <Subtitulos>
                   CALORIAS
              </Subtitulos>
              <Parrafos>
                  {datos.calorias}
              </Parrafos>
            <Subtitulos>
                    HORARIOS DE CONSUMO
            </Subtitulos>
            <Parrafos>
                {datos.horainicio}-{datos.horafinal}
            </Parrafos>
                <Subtitulos>
                    ADVERTENCIAS
              </Subtitulos>
            <Parrafos>
              {datos.advertencia}
            </Parrafos>
            <Subtitulos>
                    COMBINACION DE ALIMENTOS
           </Subtitulos>
           <Parrafos>
               {datos.combinacion}
           </Parrafos>
        </Otros>
            </Detalle>
           
        </CajaMayor>
    );
}
export default mostrarDetalle;