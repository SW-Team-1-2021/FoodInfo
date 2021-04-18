import React from 'react';
import './alimentos.css';

function Alimentos() {
    return (
        <div>
            <h1 className="titulo">LISTA DE ALIMENTOS</h1>
            <div className="tabla">
                <table border="1">
                    <thead>
                        <tr>
                            <th>Categoria</th>
                            <th>Nombre</th>
                            <th>Procedencia</th>
                            <th>Calorias(kcal)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Frutas</td>
                            <td>Manzana</td>
                            <td>Asia</td>
                            <td>12</td>
                        </tr>
                        <tr className="alt">
                            <td>Frutas</td>
                            <td>Manzana</td>
                            <td>Asia</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>Frutas</td>
                            <td>Manzana</td>
                            <td>Asia</td>
                            <td>12</td>
                        </tr>
                        <tr className="alt">
                            <td>Frutas</td>
                            <td>Manzana</td>
                            <td>Asia</td>
                            <td>12</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );

}

export default Alimentos;