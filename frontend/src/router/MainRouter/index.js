import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Alimentos from '../../components/Alimentos';
import AñadirAlimento from '../../components/AñadirAlimento';
import Header from '../../components/Header';
import Inicio from '../../components/Inicio';

function MainRouter() {
    return (
        <Router>
            <Route path='/' component={Header}/>
            <Switch>
                <Route path='/inicio' component={Inicio} />
                <Route path='/alimentos'component={Alimentos} />
                <Route path='/añadir' component={AñadirAlimento} />
                <Redirect from='' to='/inicio' exact />
            </Switch>
        </Router >
    );
}

export default MainRouter;
