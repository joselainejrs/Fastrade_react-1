import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './assets/css/estilo.css'
import * as serviceWorker from './serviceWorker';
//Importamos as dependencias necessarias:
import { Route, HashRouter as Router, Switch, Redirect } from 'react-router-dom';


//importamos as paginas
import App from './pages/Home/App';
import Erro from'./pages/paginaErro/Erro'

//Realizamos a criação das rotas:
const Rotas = (
	<Router>
		<div>
		<Switch>
			{/* Definimos a rota para as pagina */}
			<Route exact path="/" component={App}/>
			<Route exact path="/Home" component={App}/>
			<Route component={Erro}/>
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
