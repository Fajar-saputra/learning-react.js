import { useState } from "react"

export default function Todo() {
    const [todos, setTodos] = useState([
        {id: Date.now(), text: "Belajar React", isCompleted: true}
    ])

    const [input, setInput] = useState("")

    function handleAddTodo(e) {
        e.preventDefault();

        setTodos(prevTodo => [...prevTodo, { id: Date.now(), text: input.trim(), isCompleted: false }])
        
        setInput("")
    }

    return (
        <div>
            <h2>INI TODO</h2>
            <form action="">
                <input type="text" className="style-input" placeholder="Enter todo" onChange={(e) => setInput(e.target.value)} value={input}/>
                <button className="style-button" onClick={handleAddTodo}>Add Todo</button>
            </form>

            <h3>Ini penggunaan useState</h3>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{ todo.text }</li>
                ))}
            </ul>
        </div>
    )
}