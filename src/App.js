import React from 'react';
import './App.css';
import Catalogo from './pages/catalogo/Catalogo';
import Carrinho from './pages/carrinho/Carrinho';

function App() {
  return (
    <div className="App">
      <Catalogo/>
      <Carrinho/>
    </div>
  );
}

export default App;
