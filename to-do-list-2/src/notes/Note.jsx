import { useState } from "react";

export default function Note({ note, onChange, onDelete }) {
    // const [isEditing, setIsEditing] = useState(false);

    function handleChangeText(e) {
        // const newNote =
    }

    return (
        <label>
            {isEditing ? (
                <>
                    <div>
                        <input type="text" value={note.text} handleChangeNote={handleChangeNote} />
                        <button onClick={() => setIsEditing(false)}>Save</button>
                    </div>
                </>
            ) : (
                <>
                    <input type="checkbox" checked={note.done} handleChangeDone={handleChangeDone} />
                    {note.text}
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => onDelete(note)}>Delete</button>
                </>
            )}
        </label>
    );
}
