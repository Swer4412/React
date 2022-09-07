import React from 'react';//La funzione di react è quella di TROVARE LE DIFFERENZE tra i DOM tree
import ReactDOM from 'react-dom/client'; //React una volta capiti i cambiamenti, deve saper renderizzarli 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import abc, {add, sub} from './calculator.js'
console.log(add(1,3))
console.log(sub(1,3))

// Per il funzionamento di una app react basta avere una struttura(index.html), un file che renderizza su quella struttura (index.js), tutto questo grazie ad un bundler

const root = ReactDOM.createRoot(document.getElementById('root')); //Essendo react 18.x si scrive in questo modo
// Nel javascript normale non si puo mischiare html e css, c'è per questo create-react-app (bundler) che inietta del codice in modo che funzioni
root.render(
  <h1>Hello world</h1>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
