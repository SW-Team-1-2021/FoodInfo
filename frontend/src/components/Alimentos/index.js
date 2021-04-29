import './alimentos.css';
import React, {useEffect, useState} from 'react';
import { Table } from './Table';
import axios from 'axios';

const URL =  `/api/food`;

export default function Index() {

    const [data, setData] = useState([]);

    useEffect(() => {axios.get(URL).then(
        res => {
            console.log(res);
            setData(res.data)
        }
    )}, []);

    return (
        <div className="index">
            <h1 align="center">LISTA DE ALIMENTOS</h1>
            <Table data={data}/>
        </div>
    );
}

