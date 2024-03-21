import React from 'react';
import DiveCentral from './homepage'; // Importe o componente DiveCentral
import Header from './homepage'; // Importe o componente Header
import './App.css';


function App() {
  return (
    <div className="App">
      <Header /> {/* Renderize o componente Header aqui */}
    </div>
  );
}

export default App;

