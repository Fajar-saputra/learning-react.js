import { useState } from "react";
import { v4 } from "uuid";

export default function ReducerNotes() {
    const [notes, setNotes] = useState([
        {
            id: v4(),
            title: "Rabu",
            tasks: [
                { id: v4(), task: "Belajar React Dasar 1", done: false },
                { id: v4(), task: "Belajar React Dasar 2", done: false },
                { id: v4(), task: "Belajar React Dasar 3", done: false },
                { id: v4(), task: "Belajar React Dasar 4", done: false },
            ],
        },
    ]);
    return (
        <div>
            <ol>
                {notes.map((note) => (
                    <li key={note.id}>
                        <div>{note.title}</div>
                        <div>
                            <ul>
                                {note.tasks.map(task => (
                                    <li key={task.id}>{ task.task }</li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}
