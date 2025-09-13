import { createContext, useReducer } from "react";
import { v4 } from "uuid";

// reducer
export function NotesReducer(notes, action) {
    switch (action.type) {
        case "ADD_NOTE":
            return [...notes, { id: v4(), title: action.text, tasks: [] }];
        case "DELETE_NOTE":
            return notes.filter((note) => note.id !== action.noteId);
        case "UPDATE_NOTE":
            return notes.map((note) => (note.id === action.noteId ? { ...note, text: action.text } : note));
        case "ADD_SUBTODO":
            return notes.map((note) =>
                note.id === action.noteId
                    ? {
                          ...note,
                          tasks: [...note.tasks, { id: v4(), text: action.text, done: false }],
                      }
                    : note
            );
        case "DELETE_SUBNOTE":
            return notes.map((note) => (note.id === action.noteId ? { ...note, subtasks: [...note.subtasks.filter((sub) => sub.id !== action.subId)] } : note));
        case "DONE_SUBNOTE":
            return notes.map((note) => (note.id === action.noteIdid ? { ...note, done: !note.done } : note));
        default:
            return notes;
    }
}

// create
export const NotesContext = createContext(null);

// provider
export function NotesProvider({ children }) {
    const [notes, dispatch] = useReducer(NotesReducer, []);
    return (
        < NotesContext.Provider value={{ notes, dispatch }}>
            {children}
        </NotesContext.Provider >
    );
}

