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
        foods.map(food => (
            <div className="col-md-3" key={food._id}>
                <img src={food.imagen}  alt="" width="100" height="100" />
            </div>
        ))
        // <div className="resultado">
        //     <h1 align="center"><strong>RESULTADO DE BÚSQUEDA</strong></h1>
        //     <Cards/>
        // </div>
    )
}
