import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Cadastrar from './pages/cadastrar';
import Login from './pages/login';
import Erro from './pages/erro';
import Produtos from './pages/produtos';

function Routes(){
    return(
    <BrowserRouter>
        <Switch>
            <Route path = "/" exact component = {Home}/>
            <Route path = "/login" component = {Login}/>
            <Route path = "/cadastrar" component = {Cadastrar}/>
            <Route path = "/produtos" component = {Produtos}/>
            <Route path = "**" component={Erro}/>
        </Switch>
    </BrowserRouter>
    )
}

export default Routes;