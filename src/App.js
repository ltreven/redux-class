import React from 'react';
import './App.css';
import Stock from './Stock'
import Carrito from './Carrito'
import CarritoIcon from './CarritoIcon';

function App() {
  return (
    <div className="App">
      <CarritoIcon />
      <Stock />
      <Carrito />
    </div>
  );
}

export default App;
