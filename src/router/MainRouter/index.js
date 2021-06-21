import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import MostrarDetalle from '../../components/MotrarDetalle';
import Alimentos from '../../components/Alimentos';
import AñadirAlimento from '../../components/AñadirAlimento';
import Header from '../../components/Header';
import Inicio from '../../components/Inicio';
import ResultadoBusqueda from '../../components/ResultadoBusqueda';
import Login from '../../components/Login';
import './style.css'
import Administrador from '../../components/Administrador';

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
                {localStorage.getItem('token') !== null && localStorage.getItem('token') !== '' && localStorage.getItem('token') !== undefined &&
                    <Route path='/ui/alimentos'>
                        <div className='container-image alimentos'>
                            <Alimentos />
                        </div>
                    </Route>
                }
                {localStorage.getItem('token') !== null && localStorage.getItem('token') !== '' && localStorage.getItem('token') !== undefined &&
                    <Route path='/ui/añadir'>
                        <div className='container-image anadir-alimento'>
                            <AñadirAlimento />
                        </div>
                    </Route>
                }
                {localStorage.getItem('token') !== null && localStorage.getItem('token') !== '' && localStorage.getItem('token') !== undefined &&
                 <Route path='/ui/administrador'>
                    <div className='container-image mostrar-detalle'>
                        <Administrador />
                    </div>
                </Route>}
                <Route path='/ui/resultados'>
                    <div className='container-image resultado-busqueda'>
                        <ResultadoBusqueda />
                    </div>
                </Route>
                <Route path='/ui/mostrar'>
                    <div className='container-image mostrar-detalle'>
                        <MostrarDetalle />
                    </div>
                </Route>
                <Route path='/ui/resultados'>
                    <div className='container-image resultado-busqueda'>
                        <ResultadoBusqueda />
                    </div>
                </Route>
                <Route path='/ui/mostrar'>
                    <div className='container-image mostrar-detalle'>
                        <MostrarDetalle />
                    </div>
                </Route>
                {(localStorage.getItem('token') === null || localStorage.getItem('token') === '' || localStorage.getItem('token') === undefined) &&
                    <Route path='/ui/login'>
                        <div className='container-image login'>
                            <Login />
                        </div>
                    </Route>
                }
                <Redirect from='/ui/*' to='/ui/inicio' />
            </Switch>
            <Redirect from='/*' to='/ui/inicio' />
        </Router >
    );
}

export default MainRouter;
