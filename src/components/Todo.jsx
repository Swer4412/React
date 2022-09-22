import React , {useState} from "react"

export default function Todo() {
    const [task, setTask] = useState("")
    const [todos, setTodos] = useState(["andrea", "gianpaolo"])
    
    function createToDo() {
        setTodos(oldTodos => { 
            return [...oldTodos, task]
        })
    }

    return <div>
        <h1>Best to do App</h1>
        <input type="text" value={task} onChange={event => { //Il parametro event contiene informazioni
            setTask(event.target.value)
        }}/>
        <button onClick={createToDo}>Create to Do</button>
            
        <ul>
            {todos.map(todo=> {  //Fa passare ogni elemento di todos(array) dentro la funzione(anonima)
                return <li>{todo}</li>
            })}
        </ul>
    </div>
}

