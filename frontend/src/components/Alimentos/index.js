import React, {useEffect, useRef} from 'react';
import './alimentos.css';
import { Table } from './Table';

export default function Index() {
    return (
        <div className="Index">
            <h1>LISTA DE ALIMENTOS</h1>
            <Table/>
        </div>
    );
}

