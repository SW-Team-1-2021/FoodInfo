import React, { useState, useEffect } from 'react';
import axios from "axios";
import Cards from './Cards'
import './resultado.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const URL = 'http://localhost:8082/api/food';

export default function Index() {g

    const [foods, setFoods] = useState([]);

function busquedadireccion(text) {
    axios.get(URL).then((resultado)=>{
      setFoods(resultado.data)
    })


}
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
            <h1 align="center"><strong>RESULTADO DE BÚSQUEDA</strong></h1>
            <Cards/>
        </div>
        
    )
    }

}