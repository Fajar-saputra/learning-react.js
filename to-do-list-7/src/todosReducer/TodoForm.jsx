import { useContext, useState } from "react";
import { TodosContext } from "./TodoContext";

export default function TodoForm() {
    const { dispatch } = useContext(TodosContext);
    const [text, setText] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        dispatch({
            type: "ADD_TODO",
            payload: { title: text },
        });

        setText("");
    }

    const styleInput = {
        padding: ".5rem",
        width: "250px",
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} style={styleInput} placeholder="New todo..." />
            <button type="submit">Add</button>
        </form>
    );
}
