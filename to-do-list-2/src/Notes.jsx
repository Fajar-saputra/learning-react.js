import { useReducer, useState } from "react";
import { v4 } from "uuid";

export default function Notes() {
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
    // note
    const [inputNote, setInputNote] = useState("");
    const [subNote, setSubNote] = useState("");
    const [editIdTask, setEditIdTask] = useState(null);
    const [editTask, setEditTask] = useState("");
    const [isEditNote, setIsEditNote] = useState(false);
    // subnote
    const [editIdSub, setEditIdSub] = useState(null);
    const [editSubnote, setEditSubnote] = useState("");
    const [isEditSubnote, setIsEditSubnote] = useState(false);

    function handleErrInput(input) {
        const trimmed = input.trim();

        if (trimmed === "") {
            return alert("Note tidak boleh kosong!!");
        }

        if (trimmed.length < 6) {
            return alert("Minimal 5 karakter!! ");
        }

        const duplicated = notes.some((note) => note.title === trimmed);
        if (duplicated) {
            return alert("Note sudah ada");
        }

        return null;
    }

    function handleAddNote() {
        // handleErrInput(inputNote)
        setNotes((prev) => [...prev, { id: v4(), title: inputNote, tasks: [] }]);
        setInputNote("");
    }

    function handleDeleteNote(noteID) {
        setNotes((notes) => notes.filter((note) => note.id !== noteID));
    }

    function handleAddSubnote(noteID) {
        // handleErrInput(subNote)
        setNotes((notes) => notes.map((note) => (note.id === noteID ? { ...note, tasks: [...note.tasks, { id: v4(), task: subNote, done: false }] } : note)));
        setSubNote("");
    }

    function handleDeleteSubnote(noteID, subnoteID) {
        setNotes((notes) => notes.map((note) => (note.id === noteID ? { ...note, tasks: note.tasks.filter((task) => task.id !== subnoteID) } : note)));
    }

    function handleEditNote(noteId, noteTitle) {
        setEditIdTask(noteId);
        setEditTask(noteTitle);
        setIsEditNote(true);
    }
    function handleCancelEditNote() {
        setEditIdTask(null);
        setEditTask("");
        setIsEditNote(false);
    }
    function handleSaveEditNote(e) {
        e.preventDefault();
        setNotes((notes) => notes.map((note) => (note.id === editIdTask ? { ...note, title: editTask } : note)));
        setEditIdTask(null);
        setEditTask("");
        setIsEditNote(false);
    }
    function handleEditSubnote(subnoteId, subnoteTitle) {
        setEditIdTask(subnoteId);
        setEditTask(subnoteTitle);
        setIsEditSubnote(true);
    }
    function handleCancelEditSbnote() {
        setEditSubnote("");
        setEditSubnote("");
        setIsEditSubnote(false);
    }
    function handleSaveEditSubnote(e) {
        e.preventDefault();
        setNotes((notes) =>
            notes.map((note) =>
                note.id === editIdTask
                    ? {
                          ...note,
                          tasks: [
                              ...note.tasks.map((task) =>
                                  task.id === editIdSub
                                      ? {
                                            ...task,
                                            task: editSubnote,
                                        }
                                      : task
                              ),
                          ],
                      }
                    : note
            )
        );
        setEditIdSub(null);
        setEditSubnote("");
        setIsEditSubnote(false);
    }

    return (
        <div>
            <h2>DAFTAR NOTES</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Enter note..." value={inputNote} onChange={(e) => setInputNote(e.target.value)} />
                <button onClick={handleAddNote}>➕</button>
            </form>
            <ul>
                {notes.map((note) => (
                    <li key={note.id}>
                        <div>
                            {note.title}
                            <span>
                                <button type="button" onClick={() => handleDeleteNote(note.id)}>
                                    🗑
                                </button>
                                <button type="button" onClick={() => handleEditNote(note.id, note.title)}>
                                    ⚙
                                </button>
                                {isEditNote && (
                                    <form>
                                        <input type="text" value={editTask} onChange={(e) => setEditTask(e.target.value)} />
                                        <button type="button" onClick={handleSaveEditNote}>
                                            📑
                                        </button>
                                        <button type="button" onClick={handleCancelEditNote}>
                                            ✖
                                        </button>
                                    </form>
                                )}
                            </span>
                            <span>
                                <input type="text" placeholder="Enter task.." value={subNote[note.id]} onChange={(e) => setSubNote(e.target.value)} />
                                <button onClick={() => handleAddSubnote(note.id)}>➕</button>
                            </span>
                        </div>
                        <div>
                            <ul>
                                {note.tasks.map((item) => (
                                    <li key={item.id}>
                                        {item.task}{" "}
                                        <span>
                                            <button type="button" onClick={() => handleDeleteSubnote(note.id, item.id)}>
                                                🗑
                                            </button>
                                            <button type="button" onClick={() => handleEditSubnote(item.id, item.task, note.id)}>
                                                ⚙
                                            </button>
                                            {isEditSubnote && (
                                                <form>
                                                    <input type="text" value={editSubnote[note.id]} onChange={(e) => setEditSubnote(e.target.value)} />
                                                    <button type="button" onClick={handleSaveEditSubnote}>
                                                        📑
                                                    </button>
                                                    <button type="button" onClick={handleCancelEditSbnote}>
                                                        ✖
                                                    </button>
                                                </form>
                                            )}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
