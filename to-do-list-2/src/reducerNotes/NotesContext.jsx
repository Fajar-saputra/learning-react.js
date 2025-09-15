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
            return notes.map((note) =>
                note.id === action.noteId ? { ...note, title: action.text } : note
            );

        case "ADD_TASK":
            return notes.map((note) =>
                note.id === action.noteId
                    ? { ...note, tasks: [...note.tasks, { id: v4(), task: action.text, done: false }] }
                    : note
            );

        case "DELETE_TASK":
            return notes.map((note) =>
                note.id === action.noteId
                    ? { ...note, tasks: note.tasks.filter((task) => task.id !== action.taskId) }
                    : note
            );

        case "UPDATE_TASK":
            return notes.map((note) =>
                note.id === action.noteId
                    ? {
                          ...note,
                          tasks: note.tasks.map((task) =>
                              task.id === action.taskId ? { ...task, task: action.text } : task
                          ),
                      }
                    : note
            );

        case "TOGGLE_TASK":
            return notes.map((note) =>
                note.id === action.noteId
                    ? {
                          ...note,
                          tasks: note.tasks.map((task) =>
                              task.id === action.taskId ? { ...task, done: !task.done } : task
                          ),
                      }
                    : note
            );

        default:
            return notes;
    }
}

// create
export const NotesContext = createContext(null);

// provider
export function NotesProvider({ children }) {
    const [notes, dispatch] = useReducer(NotesReducer, []);
    return(
        <NotesContext.Provider value={{ notes, dispatch }}>
            {children}
        </NotesContext.Provider>
)}
