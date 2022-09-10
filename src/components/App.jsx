import React from 'react'
// Dentro app.js poi si importano tutti gli altri moduli in modo da creare un solo tag <app/> da renderizzare
import Header from "./Header"

const eta = 19
export default function App() {
    return <div>
        <Header/>
        <h1 className="classe">io ho</h1> {/*classname viene usato al posto di classe perche class ha gia un significato in javascript*/}
        <h1>eta e quindi{eta > 18 ? <p>posso guidare</p> : <p>Non posso guidare</p>}</h1> {/*Per usare la sintassi javascript qua dentro, bisogna aprire la parentesi graffa*/}
        {/*Cio che si puo mettere dentro le graffe sono solo cose che vanno bene come argomenti: interi, stringhe, liste, oggetti ma non per esempio if o for ecc...*/}
    </div>
}