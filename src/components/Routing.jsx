import React from "react"
import { BrowserRouter, Link, Route } from "react-router-dom"

export default function RouteApp() {
    return (
        <BrowserRouter> {/*Browser router permette di gestire le estensioni /hello-world /home ecc.. senza fare richieste al server e quindi tutto in locale nel BrowserRouter*/}
            <div>
                <nav>
                    <ul>
                        <li><Link to="/hello-world">Go to hello world</Link></li>
                        <li><Link to="/">Go home</Link></li>
                    </ul>
                </nav>
                <Route path="/hello-world">
                    <h1>Im on hello world route</h1>
                </Route>
            <h2>Im just a h2</h2>
        </div>
        </BrowserRouter>
    )
}
