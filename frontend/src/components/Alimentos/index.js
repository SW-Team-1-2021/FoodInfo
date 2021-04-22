import React, {useEffect, useRef} from 'react';
import './alimentos.css';
import Table from 'react-bootstrap/Table';
import axios from "axios";

function Alimentos() {
    let jsonres = useRef(null);
    useEffect(() => {axios.get('/api/food').then(
        res => {
            jsonres.current = res;
            console.log(jsonres.current);
        }
    )});
    return (
        <div className="alimentos">
            <h1 className="titulo">LISTA DE ALIMENTOS</h1>
            <div className="tabla">
                <Table responsive="md" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Categoria</th>
                            <th>Nombre</th>
                            <th>Procedencia</th>
                            <th>Calorias(kcal)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jsonres.current &&
                                jsonres.current.data.map((alimento) => {
                                    return (
                                        <tr className="alt">
                                            <td>{alimento.nombre}</td>
                                            <td>{alimento.segundonombre}</td>
                                            <td>{alimento.descripcion}</td>
                                            <td>{alimento.imagen}</td>
                                        </tr>
                                    )
                                })
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default Alimentos;
