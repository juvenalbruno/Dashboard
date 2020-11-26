import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import Home from './pages/Home';
import PaginaBranco from './pages/PaginaBranco';
import Teste from './pages/Test';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Teste} />
                <Route path="/paginabranco" component={PaginaBranco} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;