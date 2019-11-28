import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//Importamos as dependencias necessarias:
import { Route, HashRouter as Router, Switch, Redirect } from 'react-router-dom';

//Importamos a pagina de cadastroProduto
import cadastroProduto from './pages/cadastroProduto/cadastroProduto';
import NaoEncontrada from './pages/NaoEncontrada/NaoEncontrada';

//Realizamos a criação de rotas

const Rotas = (
    <Router>
        <Switch>
            <div>
                <Route exact path="/" component={App} />
                <Route path="/cadastroProduto" component={cadastroProduto} />
                <Route component ={NaoEncontrada} />
            </div>
        </Switch>
    </Router>
)

//Trocamos ao App padrão pelas nossas rotas

ReactDOM.render(Rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
