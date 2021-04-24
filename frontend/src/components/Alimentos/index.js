import React, {useEffect, useRef} from 'react';
import './alimentos.css';
import { Table } from './Table';
import axios from 'axios';

export default function Index() {

    let jsonres = useRef(null);
    useEffect(() => {axios.get('/api/food').then(
        res => {
            jsonres.current = res;
            console.log(jsonres.current);
        }
    )});

    return (
        <div className="Index">
            <h1><strong>LISTA DE ALIMENTOS</strong></h1>
            {jsonres.current && Table(jsonres.current.data)}
        </div>
    );
}

