import React from 'react';
import { CajaMayor, Titulo, Imagen, Detalle, Subtitulos, Otros, Parrafos } from './estilos';
import papaya from '../../images/papaya.jpg';

const mostrarDetalle = () => {
    return (
        <CajaMayor>
            <Titulo>
                <h1 align="center">DETALLE DEL ALIMENTO</h1>
            </Titulo>
            <Imagen>
                <img src={papaya} height="300px" width="300px" alt="" />
                <br></br>
                <h4 align="center"><b>Papaya</b></h4>

            </Imagen>
            <Detalle>
                <Parrafos>
                    La papaya es una fruta tropical que se consume por su pulpa principalmente, que suele ser de color anaranjado y de sabor dulce y jugoso. ... La papaya es un alimento rico en agua y bajo en calorías, que aporta minerales como calcio, fósforo y hierro y vitaminas A y C. Contiene papaína, un enzima que favorece la digestión
                </Parrafos>
                <Otros>
                    <Subtitulos>
                        Nombre Opcional
                </Subtitulos>
                    <Parrafos>
                        kabaya-papaio
                </Parrafos>
                    <Subtitulos>
                        CATEGORIA
              </Subtitulos>
                    <Parrafos>
                        Frutas
              </Parrafos>
                    <Subtitulos>
                        PROCEDENCIA
              </Subtitulos>
                    <Parrafos>
                        Latinoamerica
              </Parrafos>
                    <Subtitulos>
                        CALORIAS
              </Subtitulos>
                    <Parrafos>
                        56
              </Parrafos>
                    <Subtitulos>
                        HORARIOS DE CONSUMO
            </Subtitulos>
                    <Parrafos>
                        15:45 AM - 20:00 PM
            </Parrafos>
                    <Subtitulos>
                        ADVERTENCIAS
              </Subtitulos>
                    <Parrafos>
                        El consumo excesivo de papayas puede causar un efecto laxante poderoso en los intestinos y provocar irritación gastrointestinal, hinchazón dolores y diarrea. Evita comer grandes cantidades de papaya, especialmente si está inmadura.
            </Parrafos>
                    <Subtitulos>
                        COMBINACION DE ALIMENTOS
           </Subtitulos>
                    <Parrafos>
                        Papaya con limon
           </Parrafos>
                </Otros>
            </Detalle>

        </CajaMayor>
    );
}
export default mostrarDetalle;