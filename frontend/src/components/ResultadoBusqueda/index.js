import React from 'react'
import Cards from './Cards'
import './resultado.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function index() {
    return (
        <div className="resultado">
            <h1 align="center">RESULTADO DE BUSQUEDA</h1>
            <Cards/>
        </div>
    )
}

export default index
