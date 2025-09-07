import { createContext, useContext } from "react";

// create context
const ProfileContext = createContext("")

// komponen
function Name() {
    const name = useContext(ProfileContext)
    return (
        <p>Name: { name}</p>
    )
}

export default function ContextBasic1() {
    return (
        <div>
            <ProfileContext.Provider value="Elvira">
            <h2>Contoh Context Dasar 1</h2>
                <Name />
            </ProfileContext.Provider>
        </div>
    )
}