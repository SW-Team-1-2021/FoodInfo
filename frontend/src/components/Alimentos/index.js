import React, {useEffect, useState} from 'react';
import './alimentos.css';
import { Table } from './Table';
import axios from 'axios';

export default function Index() {

    const [data, setData] = useState([]);

    useEffect(() => {axios.get('/api/food').then(
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

