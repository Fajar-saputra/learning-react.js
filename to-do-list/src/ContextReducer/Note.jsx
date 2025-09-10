import { useContext, useState } from "react";
import { NotesDispatchContext } from "./NotesContext";

export default function Note({ note }) {
    const dispatch = useContext(NotesDispatchContext);

    const [isEditing, setIsEditing] = useState(false);

    function handleChangeText(e) {
        dispatch({ ...note, type: "CHANGE_NOTE", text: e.target.value });
    }

    function handleChangeDone(e) {
        dispatch({ ...note, type: "CHANGE_NOTE", done: e.target.checked });
    }

    function handleDelte() {
        dispatch({
            type: "DELETE_NOTE",
            id: note.id,
        });
    }

    let component;
    if (isEditing) {
        component = (
            <>
                <input type="text" value={note.text} onChange={handleChangeText} />
                <button type="button" onClick={() => setIsEditing(false)}>
                    Save
                </button>
            </>
        );
    } else {
        component = (
            <>
                {note.text}
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        );
    }

    return (
        <label>
            <input type="checkbox" checked={note.done} onChange={handleChangeDone} />
            {component}
            <button onClick={handleDelte}>Delete</button>
        </label>
    );
}
