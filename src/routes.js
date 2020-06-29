import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Catalogo from './pages/catalogo/Catalogo';
import Carrinho from './pages/carrinho/Carrinho';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path=""  />
            </Switch>
        </BrowserRouter>
    )
}