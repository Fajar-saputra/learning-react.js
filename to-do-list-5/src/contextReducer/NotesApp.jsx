import React, { createContext, useContext, useReducer, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function notesReducer(state, action) {
    switch (action.type) {
        case "ADD_NOTE":
            return [...state, { id: uuidv4(), title: action.payload.title, tasks: [] }];

        case "DELETE_NOTE":
            return state.filter((n) => n.id !== action.payload.noteId);

        case "UPDATE_NOTE":
            return state.map((n) => (n.id === action.payload.noteId ? { ...n, title: action.payload.title } : n));

        case "ADD_TASK":
            return state.map((n) => (n.id === action.payload.noteId ? { ...n, tasks: [...n.tasks, { id: uuidv4(), task: action.payload.task, done: false }] } : n));

        case "DELETE_TASK":
            return state.map((n) => (n.id === action.payload.noteId ? { ...n, tasks: n.tasks.filter((t) => t.id !== action.payload.taskId) } : n));

        case "UPDATE_TASK":
            return state.map((n) => (n.id === action.payload.noteId ? { ...n, tasks: n.tasks.map((t) => (t.id === action.payload.taskId ? { ...t, task: action.payload.task } : t)) } : n));

        case "TOGGLE_TASK":
            return state.map((n) => (n.id === action.payload.noteId ? { ...n, tasks: n.tasks.map((t) => (t.id === action.payload.taskId ? { ...t, done: !t.done } : t)) } : n));

        default:
            return state;
    }
}

function useLocalStorageReducer(key, reducer, initialValue) {
    const initializer = () => {
        try {
            const raw = localStorage.getItem(key);
            return raw ? JSON.parse(raw) : initialValue;
        } catch (e) {
            console.error("Failed parse localStorage", e);
            return initialValue;
        }
    };

    const [state, dispatch] = useReducer(reducer, undefined, initializer);

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(state));
        } catch (e) {
            console.error("Failed write localStorage", e);
        }
    }, [key, state]);

    return [state, dispatch];
}



export default function NotesApp() {
    return (
        <NotesProvider>
            <div style={{ maxWidth: 760, margin: "24px auto", padding: 12 }}>
                <h2>Notes App — Context + Reducer (Final)</h2>
                <NoteForm />
                <NoteList />
            </div>
        </NotesProvider>
    );
}
