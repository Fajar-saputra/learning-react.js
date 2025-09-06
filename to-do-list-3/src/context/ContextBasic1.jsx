import { createContext, useContext } from "react";

// create context
const ProfileContext = createContext("")

function Address() {
    const address = useContext(ProfileContext)
    return (
        <p>Address: { address}</p>
    )
}

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
                <Address />
            </ProfileContext.Provider>
        </div>
    )
}