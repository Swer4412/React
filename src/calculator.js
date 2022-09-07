//esempio
export function add(num1, num2) { //Aggiungendo export davanti ad una funzione, essa puo essere importata dagli altri file
    return num1+num2
}

export function sub(num1, num2) {
    return num1-num2
}

export default function abc() { //Se c'è davanti default, non bisonga mettere le parentesi graffe quando si importa
    return 100
}