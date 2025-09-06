import { createContext, useContext, useState } from "react";

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
        <p>Name   : { name}</p>
    )
}

function FormProfile({name, setName}) {
    return (
        <>
        <input type="text" placeholder="Name..." value={name} onChange={(e) => setName(e.target.value)}/>
        </>
    )
}

export default function ContextMedium1() {
    const [name, setName] = useState("")
    return (
        <div>
            <ProfileContext.Provider value={name}>
                <h2>Contoh Context Medium 1</h2>
                <FormProfile name={name}  setName={setName }/>
                <Name />
                <Address />
            </ProfileContext.Provider>
        </div>
    )
}