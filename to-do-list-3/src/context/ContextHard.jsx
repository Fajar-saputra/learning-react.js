import { createContext, useContext } from "react"

// create context
const NotesContext = createContext(null)
// provider
function NotesProvider({ children }) {
    const {notes, dispatch} = useContext(NotesContext)
    return (
        <NotesContext.Provider value={{ notes, dispatch }}>
            {children}
        </NotesContext.Provider>
    )
}


export default function ContextHard() {
    return (
        <h2> testing dulu gak sih</h2>
    )
}