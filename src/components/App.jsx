import React, {useState, useEffect} from 'react'
// Dentro app.js poi si importano tutti gli altri moduli in modo da creare un solo tag <app/> da renderizzare
import Header from "./Header"
import Custom from "./Custom"

export default function App() {
    const eta = 19
    const nome = "Andrea"

    function buttonfn() { // é consuetudine mettere le funzioni qua dentro nonostante sembri sbagliato
        console.log("cliccato")
    }

    function increase() {
        setCounter(counter + 1) //Modo 1 per variare il valore
    }
    function decrease() {
        setCounter(val => val-1) //Se viene passata una funzione, il parametro passato è il vecchio valore di conunter
    //Setcounter si riferisce solo al suo valore, quindi chiaramente se si passa un parametro il valore sarà quello
    }
    const [counter, setCounter] = useState(100) //Cio che inizia con use viene chiamato hook che non è molto diverso da una funzione normale
    // useState(dafaultValue) ritorna un valore(counter) e una funzione(setCounter) che quando viene chiamata ri-renderizza l'elemento (ricorda che const non puo variare)
    
    const quotes = [
        'fanne tanta e falla profumata',
        'better to come in the sink, than sink in the cum',
        'meglio una gallina domani di un uovo oggi'
    ]
    const [quote, setQuote] = useState(quotes[0])
    function randomizeQuote() {
        const random = quotes[Math.floor(Math.random() * quotes.length)]
        setQuote(random)
    }

    useEffect(() => { //useEffect è una funzione che accetta un funzione(spesso non nominale) e una lista di valori; se cambiano quei valori, la funzione viene eseguita(questo dopo il render)
        console.log("la citazione è cambiata")
    }, [quote])
    return <div>
        <Header/>
        <h1 className="classe">io ho</h1> {/*classname viene usato al posto di classe perche class ha gia un significato in javascript*/}
        {/*Conditional rendering */}
        <h1>eta e quindi{eta > 18 ? <p>posso guidare</p> : <p>Non posso guidare</p>}</h1> {/*Per usare la sintassi javascript qua dentro, bisogna aprire la parentesi graffa*/}
        {/*Cio che si puo mettere dentro le graffe sono solo cose che vanno bene come argomenti (nota che qui siamo dentro un return): interi, stringhe, liste, oggetti ma non per esempio if o for ecc...*/}
        {eta > 20 && <h1>Siumm</h1>} {/* Tra le parentesi graffe se si usa &&, verrà renderizzata l'elemento false oppure l'ultimo elemento true*/}
        {/* eta non è maggiore di 20 quindi questa espressione si trasforma in false e react renderizza flase come null */}
        
        <Custom name={nome}/>
        {/*Event listener in React*/}
        <button onClick={buttonfn}>Cliccami</button> {/* on+Evento = {funzione}; onClick viene legato a button quando viene renderizzato di conseguenza onClick non si vede*/}

        <h1>Counter: {counter}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        
        <div>{quote}</div>
        <button onClick={randomizeQuote}>Click me</button>
    </div>
}