import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from './App';
import Mangalore from './components/Mangalore';
import Udupi from './components/Udupi';
import Goa from './components/Goa';
import Dudhsagar from './components/Dudhsagar';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact/>
             <Route path="/Mangalore" component={Mangalore}/> 
             <Route path="/Udupi" component={Udupi}/> 
             <Route path="/Goa" component={Goa}/> 
             <Route path="/Dudhsagar" component={Dudhsagar}/> 
        </Switch>
    </BrowserRouter>
);

export default Router;