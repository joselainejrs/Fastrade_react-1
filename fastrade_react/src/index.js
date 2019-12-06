import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import './index.css';
import './assets/css/estilo.css'
=======
>>>>>>> 50002fb246dcb365a098b0ca3f394ac7b278d1ae
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

<<<<<<< HEAD
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


=======
//Importamos as dependencias necessarias:
import { Route, HashRouter as Router, Switch } from 'react-router-dom';

//importamos ccs
// import './assets/css/cadastroProduto.css';

import './index.css';
import './assets/css/estilo.css'

//importamos as paginas
import App from './pages/Home/App';
import cadastroProduto from './pages/cadastroProduto/cadastroProduto';
import Erro from './pages/paginaErro/Erro';

//Criamos uma variavel que Realiza a criação das rotas:
const Rotas = (
	<Router>
		<div>
		<Switch>
				<Route exact path="/" component={App} />
				<Route path="/Home" component={App} />
				<Route path="/cadastroProduto" component={cadastroProduto} />
				<Route path="/cadastroProdutos" component={cadastroProduto} />
				<Route component={Erro} />
		</Switch>
		</div>
	</Router>
)

//Trocamos ao App padrão pelas nossas rotas
>>>>>>> 50002fb246dcb365a098b0ca3f394ac7b278d1ae
ReactDOM.render(Rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
