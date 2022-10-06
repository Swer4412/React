
// TailWind css permette di scrivere il css in modo semplice utilizzando la voce classe, in essa si mettono tutti i dettagli(adeguatamente abbreviati) per definire il css
export default function TailWind() {
    return <div>
        <p className="bg-gray-800 text-white p-2 m-4">Sono andrea, sto guardando mehul e prendo gli appunti</p> {/*Il numero dopo gray indica l'intensità, e varia da 50,a 900*/}
        {/*le unità usate per es. p-2 , quel due indica 2/4(0,5) rem, rem invece si riferisci al font size(di default 16) questo permette quindi di modificare 
        facilmente tutte le dimensioni utilizzando "font-size:n" ; rem in poche parole rende piu facile scalare*/ }
        <p style={{background:"gray", color:"white", padding:2, margin:4 }}>Ciao ora ho scritto tutto con il css normale, vedi quanto è lungo e complicato??</p>
        <p className="sm:bg-red-800 md:bg-orange-700 lg:bg-yellow-600 xl:bg-aqua-500 2xl:bg-green-400 ">Ridimensiona la pagina per cambiare il background</p>
        {/* TailWind fornisce queste classi speciali che circa rappresentano le dimensioni piccolo, medio ecc. questo controllo della larghezza si puo fare con il media query: @media screen and (max-width: 992px) { p {bgcolor:red} } */}
        <p className="bg-gradient-to-r from-cyan-500 via-cyan-300 to-red-500 mt-2">Sono sfumato ma anche fumato</p> {/*bg-gradient-to-r = sfondo sfumato verso destra*/}
        <p className="bg-fuchsia-900 text-white hover:bg-gray-200 hover:text-black my-2">HOVER</p>
        <div className="flex">
            <div className="h-96 flex-1 bg-gray-900"></div>
            <div className="h-96 flex-1 bg-red-900"></div>
            <div className="h-96 flex-1 bg-blue-900"></div>
        </div>
    </div>
}