import { createContext, useContext } from "react";

// create
const NotesCreacte = createContext();

// provider
function NotesProvider({ children }) {
    return <NotesCreacte.Provider value="Basic 1">{children}</NotesCreacte.Provider>;
}

// children
function Notes() {
    const note = useContext(NotesCreacte);
    return <p>Nama : {note}</p>;
}

export default function ContextBasic1() {
    return (
        <NotesProvider>
            <Notes />
        </NotesProvider>
    );
}
