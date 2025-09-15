import React, { createContext, useContext, useState } from "react";
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