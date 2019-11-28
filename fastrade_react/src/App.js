import React from 'react';
import './App.css';

// Inportamos os nossos componentes
import Rodape from './components/rodape/Rodape';
import Header from './components/cabecalho/cabecalho';

function App() {
  return (
    <div className="App">
      <Header />
      <Rodape />
    </div>
  );
}

export default App;
