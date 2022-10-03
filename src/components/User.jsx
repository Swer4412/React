import React, { useEffect, useState} from "react"
import {useParams} from "react-router-dom"

export default function User() {
    const {username} = useParams() //link passa un username alla route user:username, quest'ultima esegue <User/> e passa il parametro :username, preso da useParams e messo nella variabile username
    const [userData, setUserData] = useState({})
    
    useEffect(() => {
        fetch('/users.json').then(data => {
            return data.json() //Ricorda che quando prendi qualcosa da un file json bisogna sempre passaro per .json()
        }).then(data => {
            setUserData(data[username]) /*userData prende il contenuto di users.json(data) dove c'è username es. data(giovanni)*/
        })     
    }, [username]) // si mette username perche ogni volta che la funzione User viene chiamata username viene passato da useParams
    return <div>
    <h1>I am a user component {username}</h1>
    <p>Nome: {userData.nome}</p>
    <p>Età: {userData.eta}</p>
    </div>
}