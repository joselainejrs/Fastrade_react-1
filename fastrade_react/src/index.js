import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

//Importamos as dependencias necessarias:
import { Route, HashRouter as Router, Switch } from 'react-router-dom';



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
				{/* <Route path="/Home" component={App} /> */}
				<Route path="/cadastroProduto" component={cadastroProduto} />
				<Route path="/cadastroProdutos" component={cadastroProduto} />
				<Route component={Erro} />
		</Switch>
		</div>
	</Router>
)

//Trocamos ao App padrão pelas nossas rotas
ReactDOM.render(Rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
