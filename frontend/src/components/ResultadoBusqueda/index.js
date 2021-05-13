import React, { useState, useEffect } from 'react';
import axios from "axios";
import Cards from './Cards'
import './resultado.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const URL = 'http://localhost:8082/api/food';

export default function Index() {

    const [foods, setFoods] = useState([]);

    useEffect(() => {
        axios.get(URL,{
            params: {
                //name: 'PLATANO',
                //category: 'fruta'
            }
        }).then((res) => {
          setFoods(res.data);
        });
    }, []);

    return (
        <div className="resultado">
            <h1 align="center">RESULTADO DE BÚSQUEDA</h1>
            <Cards/>
        </div>
    )
}
