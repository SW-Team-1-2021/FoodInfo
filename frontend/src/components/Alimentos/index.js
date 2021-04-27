import './style.css'
import React, {useEffect, useState} from 'react';
import { Table } from './Table';
import axios from 'axios';

const URL =  `http://localhost:8082/api/food`;

export default function Index() {

    const [data, setData] = useState([]);

    useEffect(() => {axios.get(URL).then(
        res => {
            console.log(res);
            setData(res.data)
        }
    )}, []);

    return (
        <div className="Index">
            <h1><strong>LISTA DE ALIMENTOS</strong></h1>
            <Table data={data}/>
        </div>
    );
}

