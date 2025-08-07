import { useState } from "react"

export default function LogicTodo() {
    const [todos, setTodos] = useState([
        {id:1, text: "Belajar React Intermedi", done: false},
        {id:2, text: "Belajar React Intermedi", done: false},
        {id:3, text: "Belajar React Intermedi", done: false},
        {id:4, text: "Belajar React Intermedi", done: false},
        {id:5, text: "Belajar React Intermedi", done: false}
    ])

    return (
        todos, setTodos
    )
}