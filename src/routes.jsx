import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import PaginaBranco from './pages/PaginaBranco';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/paginabranco" component={PaginaBranco} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;