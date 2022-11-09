import React, {useState} from 'react'
import {useQuery} from "react-query"

/*root.render( 
  <QueryClientProvider client = {client}> {/*QueryClientProvider serve per connetterti e fornire un QueryClient alla tua applicazione*/
/*<ReactQuery/>
  <ReactQueryDevtools/> 
</QueryClientProvider>,
);*/


function Button() {
    // useQuery ritorna un oggetto con tanti parametri utili come: data, error, isLoading ecc...  Se metti: {data} intendi che vuoi solo useQuery.data non tutto il resto
    const {data} = useQuery("hello-world", () => { // useQuery ti fa definire una chiave(hello-world) per ricercare una richiesta(funzione che ritorna una promise), che viene salvata nella cache; usare la cache permette un sito che richiede dati nuovi mentre mostra quelli vecchi e di non dovere definire variabili in cui mettere i dati vecchi
        return new Promise(resolve => { // resolve viene scritto perche è un paramentro che serve dopo
            setTimeout(() => resolve(Math.random), 2000) //setTimeout(funzione, millisecondi); essa esegue una funzione dopo un certo numero di millisecondi
           // dopo 2000 ms la query diventa stale(stantia) e ogni volta che si clicca fuori e poi nella pagina, se l'elemento è stale(sono gia passati 2000 ms), viene ripreso(fetching) 
        }) //Se clicco velocemente il bottone toggle vedo che il valore rimane lo stesso ma dopo poco cambia, questo perche il valore vecchio è finito nella cache
    }) // Se invece rifresho la pagina vedo che la cache viene pulita e devo aspettare 2000 ms per il valore

    return <button>Im a button {data}</button>
}




const fetcher = (repo) => fetch(`https://api.github.com/repos/${repo}`).then(res => res.json()) // res.json è una promise quindi a fetcher viene "assegnata" una promise

/*enabled property*/
function Button2() {
    
    const [state, setState] = useState(true)
    const [repo, setRepo] = useState("")
    // come costanti di useQuery si puo usare qualunque cosa(es. query) solo che dopo bisonga scrivere query.isLoading, query.data.name ecc...
    const {isLoading, data, status} = useQuery(["github-data",repo], () => fetcher(repo), {enabled:state}) //enabled:state permette di usare un usestate al posto di un if per decidere se abilitare o no una query
    // il motivo perche fetcher('facebook/react') è scritto come return di una funzione è perche è una promise e useQuery accetta una funzione che ritorna una query
    
    if (isLoading) {
        return <div>
        <input className='border-2' type="text" value={repo} onChange={(e)=> setRepo(e.target.value)}/> {/*e viene passato da onChange e permette di identificare il tag stesso*/}
        <h2>Loading...</h2>
        </div>
    }

    return <div>
        <button className='border-2' onClick={() => setState(c => !c)}>Disable</button>
        <input className='border-2' type="text" value={repo} onChange={(e)=> setRepo(e.target.value)}/> {/*e viene passato da onChange e permette di identificare il tag stesso*/}
        <h2>Name: {data.name}</h2>
        <h2>Desc: {data.description}</h2>
        <h2>Stars: {data.stargazers_count}</h2>
        </div>
}


export default function ReactQuery() {

    const [visible, setVisible] = useState(true)

    function toggleButton() {
        setVisible(visible=> !visible)
    }

    return <div>
        <button onClick={toggleButton} className="border-2 m-2">Toggle</button>
        {visible && <Button/>} {/*Ragionamento complicato ma se visible è false, si ferma li e ritorna false, se è true allora puo passare all'altro elemento*/}
        <Button2/>
        <p>Hello world</p>
    </div>
    }
