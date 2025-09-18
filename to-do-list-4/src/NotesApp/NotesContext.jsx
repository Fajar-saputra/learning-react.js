import { act, createContext, useReducer } from "react";
import { v4 } from "uuid";
import { InitialNotes } from "./InitialNotes";

export const NotesContext = createContext(null);

export const NotesReducer = (notes, action) => {
    switch (action.type) {
        // note (level 1)
        case "ADD_NOTE":
            return [...notes, { id: v4(), title: action.payload.title, tasks: [] }];

        case "DELETE_NOTE":
            return notes.filter((note) => note.id !== action.payload.noteId);

        case "DONE_NOTE":
            return notes.map((note) => (note.id === action.payload.noteId ? { ...note, done: !note.done } : note));

        // sub (level 2)
        case "DELETE_SUB1":
            return notes.map((note) =>
                note.id === action.payload.noteId
                    ? {
                          ...note,
                          tasks: note.tasks.filter((task) => task.id !== action.payload.taskId),
                      }
                    : note
            );

        case "DONE_SUB1":
            return notes.map((note) =>
                note.id === action.payload.noteId
                    ? {
                          ...note,
                          tasks: note.tasks.map((task) =>
                              task.id === action.payload.taskId
                                  ? {
                                        ...task,
                                        done: !task.done,
                                    }
                                  : task
                          ),
                      }
                    : note
            );

        // sub (level 3)
        case "DELETE_SUB2":
            return notes.map((note) =>
                note.id === action.payload.noteId
                    ? {
                          ...note,
                          tasks: note.tasks.map((task) =>
                              task.id === action.payload.taskId
                                  ? {
                                        ...task,
                                        sub: task.sub.filter((sub) => sub.id !== action.payload.subId),
                                    }
                                  : task
                          ),
                      }
                    : note
            );
        
        case "DONE_SUB2":
            return notes.map(note => note.id === action.payload.noteId ? {
                ...note, tasks: note.tasks.map(task => task.id === action.payload.taskId ? {
                    ...task, sub: task.sub.map(subItem => subItem.id === action.payload.subId ? {
                        ...subItem, done: !subItem.done
                    } :subItem)
                } : task)
            } : note)

        default:
            return notes;
    }
};

export const NotesProvider = ({ children }) => {
    const [notes, dispatch] = useReducer(NotesReducer, InitialNotes);
    return <NotesContext.Provider value={{ notes, dispatch }}>{children}</NotesContext.Provider>;
};
