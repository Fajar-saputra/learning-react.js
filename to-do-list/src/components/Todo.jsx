import { useState } from "react"

export default function Todo() {
    const [todos, setTodos] = useState([
        {id: Date.now(), text: "Belajar React", isCompleted: true}
    ])

    const [input, setInput] = useState("")

    function  handleAddTodo() {
        
    }

    return (
        <div>
            <form action="">
                <input type="text" className="style-input" placeholder="Enter todo"/>
                <button className="style-button">Add Todo</button>
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