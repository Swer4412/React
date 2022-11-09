//I componenti devono essere scritti Camel case, con la lettera maiuscola
import React from 'react';//La funzione di react è quella di TROVARE LE DIFFERENZE tra i DOM tree
import ReactDOM from 'react-dom/client'; //React una volta capiti i cambiamenti, deve saper renderizzarli 
import './index.css';
import reportWebVitals from './reportWebVitals';
//React query
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools} from 'react-query/devtools' /* è un vero e proprio strumento che viene renderizzato sulla pagina e serve per aiutare gli sviluppatori*/ 


import App from './components/App'
import Todo from './components/Todo'
import RouteApp from "./components/Routing"
import TailWind from './components/TailWind'
import ReactQuery from './components/ReactQuery'
import SmallBlog from './components/SmallBlog'

import abc, {add, sub} from './calculator.js'
console.log(add(1,3))
console.log(sub(1,3))

//L'utilizzo di una cache permette di ridurre l'utilizzo della banda
const client = new QueryClient() //Queryclient viene usato per interagire con una cache
// Per il funzionamento di una app react basta avere una struttura(index.html), un file che renderizza su quella struttura (index.js), tutto questo grazie ad un bundler
const root = ReactDOM.createRoot(document.getElementById('root')); //Essendo react 18.x si scrive in questo modo
// Nel javascript normale non si puo mischiare html e css, c'è per questo create-react-app (bundler) che inietta del codice in modo che funzioni
root.render( 
  <QueryClientProvider client = {client}> {/*QueryClientProvider serve per connetterti e fornire un QueryClient alla tua applicazione*/}
    <SmallBlog/>
    <ReactQueryDevtools/> 
  </QueryClientProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
