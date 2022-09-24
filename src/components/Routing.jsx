import React from "react"
import { BrowserRoute, Route } from "react-router-dom"

function RouteApp() {
    return (
        <div>
        <BrowserRoute>
            <Route path="/hello world">
                <h1>Im on hello world route</h1>
            </Route>
            <h2>Im just a h2</h2>
        </BrowserRoute>
    </div>
    )
}