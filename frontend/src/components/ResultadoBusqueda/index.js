import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useLocation } from "react-router-dom";
import Cards from './Cards'
import './resultado.css'
import ComponentBuscador from "../Buscador";
import 'bootstrap/dist/css/bootstrap.min.css'

const URL = '/api/food';

export default function Index() {
    const [foods, setFoods] = useState([]);

    const location = useLocation();

    useEffect(() => {
        setFoods(location.state.alimentos);
    }, [location]);

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
            <h1 align="center"><strong>RESULTADO DE BÚSQUEDA</strong></h1>
            <ComponentBuscador accionBuscar={accionBuscar} />
            <Cards foods = {foods}/>
        </div>

    )
}
