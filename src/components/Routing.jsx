import React from "react"
import {BrowserRouter, Link, Route} from "react-router-dom"
import User from "./User"

export default function RouteApp() {
    return (
        <BrowserRouter> {/*Browser router permette di gestire le estensioni /hello-world /home ecc.. senza fare richieste al server e quindi tutto in locale nel BrowserRouter*/}
            <div>
                <nav>
                    <ul>
                        <li><Link to="/hello-world">Go to hello world</Link></li> {/*Link porta al tag route qua sotto*/}
                        <li><Link to="/">Go home</Link></li>
                        <li><Link to="/user/aldo">User 1</Link></li>
                        <li><Link to="/user/giovanni">User 2</Link></li>
                        <li><Link to="/user/giacomo">User 3</Link></li>
                    </ul>
                </nav>
                <Route path="/hello-world" exact> 
                    <h1>Im on hello world route</h1>
                </Route>
                <Route path="/" exact> {/*Exact fa in modo che il route / non venga visto in ogni route che inizia con "/" */}
                    <h1>Im on hello world route</h1>
                </Route>
                <Route path="/user:username" exact> 
                    <User/>
                </Route>
                <h2>Im just a h2</h2>
            </div>
        </BrowserRouter>
    )
}
