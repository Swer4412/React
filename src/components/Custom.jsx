import React from "react"

export default function Custom(props) { {/*props é un oggetto che viene fornito da React una volta che renderizza*/}
    return <h1>ciao, {props.name}</h1>
}