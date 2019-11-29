import React from 'react';
import './assets/css/CadastroProduto.css';
import cadastroProduto from './pages/cadastroProduto/cadastroProduto';

// Inportamos os nossos componentes
import Rodape from './components/rodape/Rodape';
import Header from './components/cabecalho/cabecalho';

function App() {
  return (
    <div className="App">
      <cadastroProduto />
    </div>
  );
}

export default App;
