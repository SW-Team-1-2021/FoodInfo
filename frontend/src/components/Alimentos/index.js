import './style.css'
import React, {useEffect, useState} from 'react';
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
        <div className="Index">
            <h1><strong>LISTA DE ALIMENTOS</strong></h1>
            <Table data={data}/>
        </div>
    );
}

