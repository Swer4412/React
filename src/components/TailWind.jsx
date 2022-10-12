import { useState } from "react"
// TailWind css permette di scrivere il css in modo semplice utilizzando la voce classe, in essa si mettono tutti i dettagli(adeguatamente abbreviati) per definire il css
export default function TailWind() {
    const [x, setx] = useState(false)
    return <div className={x ? "dark" : ''}> {/* Per abilitare la dark mode ha senso mettere dark nell' elemento parent (per far funzionare 'dark:' negli elementi serve che il parent sia class="dark") questo script fa in modo che la scritta dark compaia o no in base a se x è true o false*/}
        <p className="bg-gray-800 text-white p-2 m-4">Sono andrea, sto guardando mehul e prendo gli appunti</p> {/*Il numero dopo gray indica l'intensità, e varia da 50,a 900*/}
        {/*le unità usate per es. p-2 , quel 2 indica 2/4(0,5) rem, rem invece si riferisci al font size(di default 16px) questo permette quindi di modificare 
        facilmente tutte le dimensioni utilizzando "font-size:n" ; rem in poche parole rende piu facile scalare*/ }
        <p style={{background:"gray", color:"white", padding:2, margin:4 }}>Ciao ora ho scritto tutto con il css normale, vedi quanto è lungo e complicato??</p>
        <p className="sm:bg-red-800 md:bg-orange-700 lg:bg-yellow-600 xl:bg-aqua-500 2xl:bg-green-400 ">Ridimensiona la pagina per cambiare il background</p>
        {/* TailWind fornisce queste classi speciali che circa rappresentano le dimensioni piccolo, medio ecc. questo controllo della larghezza si puo fare con il media query: @media screen and (max-width: 992px) { p {bgcolor:red} } */}
        <p className="bg-gradient-to-r from-cyan-500 via-cyan-300 to-red-500 mt-2">Sono sfumato ma anche fumato</p> {/*bg-gradient-to-r = sfondo sfumato verso destra*/}
        <p className="bg-fuchsia-900 text-white hover:bg-gray-200 hover:text-black my-2">HOVER</p>
        <div className="flex sm:flex-row flex-col"> {/*facendo cosi si puo facilmente adattare questa disposizone a dispositivi mobili automaticamente*/}
            <div className="h-96 sm:flex-1 bg-gray-900"></div> {/*flex-1 imposta: flex-grow:1, flex-shrink:1 flex-basis:0% */}
            <div className="h-96 sm:flex-1 bg-red-900"></div>
            <div className="h-96 sm:flex-1 bg-blue-900"></div>
        </div>
        <div className="grid grid-cols-3 gap-1 my-1">
            <div className="h-20 w-full bg-red-700"></div>
            <div className="h-20 w-full bg-gray-700"></div>
            <div className="h-20 w-full bg-blue-700"></div>
            
            <div className="h-20 w-full bg-red-700"></div>
            <div className="h-20 w-full bg-gray-700"></div>
            <div className="h-20 w-full bg-blue-700"></div>
            
            <div className="h-20 w-full bg-red-700"></div>
            <div className="h-20 w-full bg-gray-700"></div>
            <div className="h-20 w-full bg-blue-700"></div>

            <div className="h-20 w-full bg-red-700"></div>
            <div className="h-20 w-full bg-gray-700"></div>
            <div className="h-20 w-full bg-blue-700"></div>

            <div className="h-20 w-full bg-red-700"></div>
            <div className="h-20 w-full bg-gray-700"></div>
            <div className="h-20 w-full bg-blue-700"></div>

            <div className="h-20 w-full bg-red-700"></div>
            <div className="h-20 w-full bg-gray-700"></div>
            <div className="h-20 w-full bg-blue-700"></div>
        </div>
        <div className="flex overflow-x-auto snap-x snap-mandatory"> {/*overflow-x-auto fa in modo che la flexbox non si estenda oltre il limite di larghezza della pagina, snap-x fa in modo che lo snap sia orizzontale, snap-mandatory fa in modo che le freccettine della scrollbar (e della tastiera) muovono no di una certa lunghezza ma di un elemento intero*/}
            <div className="w-80 snap-center flex-shrink-0 h-48 bg-red-600"></div> {/*snap center fa in modo che l'elemento rimanga sempre in centro con la scrollbar*/}
            <div className="w-80 snap-center flex-shrink-0 h-48 bg-orange-600"></div>
            <div className="w-80 snap-center flex-shrink-0 h-48 bg-yellow-600"></div>
            <div className="w-80 snap-center flex-shrink-0 h-48 bg-teal-600"></div>
            <div className="w-80 snap-center flex-shrink-0 h-48 bg-blue-600"></div>
        </div>
        <h1 className="text-5xl font-thin underline hover:decoration-wavy decoration-indigo-500">Tre civette sul comò</h1> {/*TailWind toglie le differenze tra h1, h2 ecc. aggiunge però la possibilità di modificare la dimensione(text-), lo spessore (font-)*/}
        <div className="[color:white] [text-align:center] bg-[#3a3a3a]"> {/* Le parentesi quadre permettono di scrivere css normale, esse possono essere per integrare intero codice css ([color:white]) oppure metà tailwind e metà css (bg-[#3a3a3a])}
            <p className="text-3xl text-white">Iscriviti al canale!</p>
            <button className="p-2 my-4 bg-indigo-500 text-white rounded-md shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500/90 font-semibold">Iscriviti</button> {/* il /50 e /90 indicano l'opacità dell' ombra in percentuale*/}
        </div>
        <button onClick={() => {setx(x => !x) }} className="text-3xl dark:text-white bg-[#E5E2D4] bg-[#6C6337]">Dark mode!</button>
    </div>
}