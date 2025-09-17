import { useContext, useState } from "react";
import { NotesContext } from "./NotesContext";

export default function FormNote() {
    const { dispatch } = useContext(NotesContext);

    const [input, setInput] = useState("");

    function handleSubmitTodo(e) {
        e.preventDefault();

        dispatch({
            type: 'ADD_NOTE',
            payload: {title: input}
        })

        setInput("");
    }

    return (
        <form onSubmit={handleSubmitTodo}>
            <input
                type="text"
                value={input}
                placeholder="New note..."
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">✔</button>
        </form>
    )
}