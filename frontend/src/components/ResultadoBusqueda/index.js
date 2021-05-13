import React, { useState, useEffect } from 'react';
import axios from "axios";
import Cards from './Cards'
import './resultado.css'
import ComponentBuscador from "../Buscador";
import 'bootstrap/dist/css/bootstrap.min.css'

const URL = 'http://localhost:8082/api/food';

export default function Index(props) {
    const [foods, setFoods] = useState([]);

    const accionBuscar = (texto) => {
        if(texto.trim().length > 0) {
            axios.get(URL,{
                params: {
                    name: texto,
    
                }
            }).then((res) => {
              setFoods(res.data);
            }).catch(error => {
                console.log(error);
            });
        }
        else {
            setFoods([]);
        }
      };

    return (
        <div className="resultado">
            <h1 align="center">RESULTADO DE BÚSQUEDA</h1>
            <ComponentBuscador accionBuscar={accionBuscar} />
            <Cards foods = {foods}/>
        </div>
        
    )
}