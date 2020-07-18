import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux';

const carritoHandler = (carritoActual = [], action) => {
  if (action.type === "ADD_ITEM") {
    let nuevoArray = JSON.parse(JSON.stringify(carritoActual));
    nuevoArray.push(action.payload);
    return nuevoArray;
  } else if (action.type === "REMOVE_ITEM") {
    return carritoActual.filter( elem => elem.id !== action.payload.id );
  }
  return carritoActual;
}

const stockInicial = [
  {
    id: 1,
    name: "Platan",
    price: 2
  },
  {
    id: 2,
    name: "Manzana",
    price: 3
  },
  {
    id: 3,
    name: "Kiwi",
    price: 10
  }
];

const stockHandler = (stockActual = stockInicial, action) => {
  if (action.type === "ADD_ITEM") {
    // remover este item del stock
    return stockActual.filter( elem => elem.id !== action.payload.id);
    
  } else if (action.type === "REMOVE_ITEM") {
    // agregar el item de vuelta al stock
    return [...stockActual, action.payload];
    
  }
  return stockActual;
}

const todosLosReducerJuntos = combineReducers({
  carrito: carritoHandler,
  stock: stockHandler
});

const store = createStore(todosLosReducerJuntos, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
