import React , {useState} from "react"

let globalId = 0

export default function Todo() {
    const [task, setTask] = useState("")
    const [todos, setTodos] = useState([])
    
    function createToDo(event) { //event passato dalla onSubmit
        event.preventDefault() //Boh fa in modo che non si refreshi la pagina come fa normalmente
        setTodos(oldTodos => { 
            setTask("")
            return [...oldTodos, {todo:task, id:globalId++}]
        })
        
    }
    
    function deleteItem(itemId) {
        setTodos(oldTodos => oldTodos.filter(item => item.id !== itemId))
    }

    return <div>
        <form onSubmit={createToDo}>
            <h1>Best to do App</h1>
            <input type="text" value={task} //{task} viene ripreso ad ogni cambiamento
            onChange={event => { 
                setTask(event.target.value) //ad ogni cambiamento esegue setTask che modifica il valore di task
            }}/>
            <button type="submit">Create to Do</button>
                
            <ul>
                {todos.map(item=> {  //Fa passare ogni elemento di todos(array) dentro la funzione(anonima)
                    return <div key={item.id}>
                    <li>{item.todo}({item.id})</li>
                    <button onClick={() => deleteItem(item.id)}>Delete</button> {/* se si deve passare un parametro dentro una funzione nel return, bisonga scriverla:"() =>funz(arg)"*/}
                    </div>
                })}
            </ul>
        </form>
    </div>
}

