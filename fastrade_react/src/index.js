import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/estilo.css'
import * as serviceWorker from './serviceWorker';
//Importamos as dependencias necessarias:
import { Route, HashRouter as Router, Switch} from 'react-router-dom';


//importamos as paginas
import App from './pages/Home/App';
import Dicas from './pages/Dicas/Dicas';
import './assets/css/dicas.css';

import Receitas from './pages/Receitas/receita';
import './assets/css/receita.css';

import Pudim from './pages/Receitas/Pudim';
import './assets/css/receita.css';

import Arroz from './pages/Receitas/Arroz';
import './assets/css/receita.css';

import Doce from './pages/Receitas/Doce';
import './assets/css/receita.css';

import Bolo from './pages/Receitas/Bolo';
import './assets/css/receita.css';

import Farofa from './pages/Receitas/Farofa';
import './assets/css/receita.css';

import Brigadeiro from './pages/Receitas/Brigadeiro';
import './assets/css/receita.css';

import Creme from './pages/Receitas/Creme';
import './assets/css/receita.css';

import Pate from './pages/Receitas/Pate';
import './assets/css/receita.css';



import Erro from'./pages/paginaErro/Erro';



//Realizamos a criação das rotas:
const Rotas = (
	<Router>
		<div>
		<Switch>
			{/* Definimos a rota para as pagina */}
			<Route exact path="/" component={App}/>
			<Route  path="/Home" component={App}/>
			<Route  path="/Dicas" component={Dicas}/>
			<Route  path="/receitas" component={Receitas}/>
			<Route path="/pudim" component={Pudim}/>
			<Route path="/arroz" component={Arroz}/>
			<Route path="/Doce de Casca de Maracujá" component={Doce}/>
			<Route path="/Bolo de casca de abóbora" component={Bolo}/>
			<Route path="/Farofa de Casca de Melão" component={Farofa}/>
			<Route path="/Brigadeiro de Casca de Banana" component={Brigadeiro}/>
			<Route path="/Creme de Couve-Flor" component={Creme}/>
			<Route path="/Patê de Alho Poró" component={Pate}/>
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
