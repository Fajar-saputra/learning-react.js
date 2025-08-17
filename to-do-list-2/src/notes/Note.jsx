import { useState } from "react";

export default function Note({ note, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    let component;

    if (isEditing) {
        component = (
            <>
                <input type="text" value={note.text} onChange={handleChangeText} />
                <button onClick={() => setIsEditing(false)}>Save</button>
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
            <input type="checkbox" checked={note.done} onChange={onChange} />
            {component}
            <button onClick={() => onDelete(note)}>Delete</button>
        </label>
    );
}
