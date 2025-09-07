import { createContext, useContext } from "react";

// create context
const ProfileContext = createContext("");

// provider
function ProfileProvider({ children }) {
    return <ProfileContext.Provider value="Martabak">{children}</ProfileContext.Provider>;
}

// component anak
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

export default function ContextBasic2() {
    return (
        <div>
            <ProfileProvider>
                <h2>Contoh Context Dasar 2</h2>
                <Name />
            </ProfileProvider>
        </div>
    );
}
