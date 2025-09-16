import { useState } from "react";
import { useTodos } from "./UseTodos";

export default function FormTodo() {
    const { dispatch } = useTodos();
    const [todo, setTodo] = useState("");


    function handleAddTodo(e) {
        e.preventDefault();
        dispatch({
            type: "ADD_TODO",
            payload: {text: todo}
        });

        setTodo("");
    }

    return (
        <form onSubmit={handleAddTodo} style={{marginBottom: "1rem"}}>
            <input type="text" placeholder="Enter Todo..." value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button type="submit">➕</button>
        </form>
    );
}
