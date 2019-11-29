import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD

import App from './App';
=======
import './assets/css/estilo.css'
>>>>>>> 0beef35c6dd9430264c45b10d5ac2ece94c4fe43
import * as serviceWorker from './serviceWorker';
//Importamos as dependencias necessarias:
import { Route, HashRouter as Router, Switch} from 'react-router-dom';

<<<<<<< HEAD
//Importamos a pagina de cadastroProduto
import cadastroProduto from './pages/cadastroProduto/cadastroProduto';
import './assets/css/cadastroProduto.css';
import NaoEncontrada from './pages/NaoEncontrada/NaoEncontrada';

//Realizamos a criação de rotas
=======
//importamos as paginas
import App from './pages/Home/App';
import Erro from'./pages/paginaErro/Erro'
>>>>>>> 0beef35c6dd9430264c45b10d5ac2ece94c4fe43

//Realizamos a criação das rotas:
const Rotas = (
<<<<<<< HEAD
    <Router>
        <Switch>
            <div>
                <Route exact path="/" component={App} />
                <Route path="/cadastroProduto" component={cadastroProduto} />
                <Route component ={NaoEncontrada} />
         
            </div>
        </Switch>
    </Router>
=======
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
>>>>>>> 0beef35c6dd9430264c45b10d5ac2ece94c4fe43
)

//Trocamos ao App padrão pelas nossas rotas

ReactDOM.render(Rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
