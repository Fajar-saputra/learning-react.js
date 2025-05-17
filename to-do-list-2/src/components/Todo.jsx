import { useState } from "react";

export default function Todo() {
    const [todos, setTodos] = useState([
        { id: 123, title: "Belajar ngoding" },
        { id: 124, title: "Belajar ReactJS" },
        { id: 127, title: "Belajar JS" },
    ]);

    const [input, setInput] = useState("");

    const handleAdd = (e) => {
        e.preventDefault();

        if (input.trim() === "") {
            alert("Tidak boleh kosong!!");
            return;
        }

        if (input.trim().length < 4) {
            alert("Karakter harus lebih dari 4");
            return;
        }

        const newItem = {
            id: Date.now(),
            title: input.trim()
        }

        setTodos([...todos, newItem])
        setInput("")

    }

    return (
        <div>
            <h2>Todo</h2>
            <form action="" onSubmit={handleAdd}>
                <input type="text" placeholder="Enter todo" value={input} onChange={(e) => setInput(e.target.value)}/>
                <button>Add</button>
            </form>
            <ul>
                {todos.map((item) => {
                    return <li key={item.id}>{item.title}</li>;
                })}
            </ul>
        </div>
    );
}
