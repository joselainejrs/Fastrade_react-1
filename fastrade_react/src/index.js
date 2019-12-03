import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/estilo.css'
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import quemSomos from './pages/quemSomos/quemSomos';
import './assets/css/quemSomos.css';

import produtos from './pages/produtos/produtos';
import './assets/css/produtos.css';

import App from '../src/App'

const Rotas = (
    <Router>
        <Switch>
            <div>
                <Route exact path="/" component={App}/>
                <Route path="/quemSomos" component={quemSomos}/>
                <Route exact path="/produtos" component={produtos}/>
            </div>
        </Switch>

    </Router>
)


ReactDOM.render(Rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
