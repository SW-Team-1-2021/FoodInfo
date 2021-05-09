import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Alimentos from '../../components/Alimentos';
import AñadirAlimento from '../../components/AñadirAlimento';
import Header from '../../components/Header';
import Inicio from '../../components/Inicio';
import ResultadoBusqueda from '../../components/ResultadoBusqueda';
import './style.css'

function MainRouter() {
    return (
        <Router>
            <Route path='/ui' component={Header} />
            <Switch>
                <Route path='/ui/inicio'>
                    <div className='container-image inicio'>
                        <Inicio />
                    </div>
                </Route>
                <Route path='/ui/alimentos'>
                    <div className='container-image alimentos'>
                        <Alimentos />
                    </div>
                </Route>
                <Route path='/ui/añadir'>
                    <div className='container-image anadir-alimento'>
                        <AñadirAlimento />
                    </div>
                </Route>
                <Route path='/ui/resultados'>
                    <div className='container-image resultado-busqueda'>
                        <ResultadoBusqueda />
                    </div>
                </Route>
                <Redirect from='' to='/ui/inicio' exact />
            </Switch>
        </Router >
    );
}

export default MainRouter;
