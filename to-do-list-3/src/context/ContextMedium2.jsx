import { createContext, useContext, useState } from "react";

// create context
const ProfileContext = createContext("");

// provider
function ProfileProvider({ children }) {
    <ProfileContext.Provider value="testing dulu">{children}</ProfileContext.Provider>;
}
function Address() {
    const address = useContext(ProfileContext);
    return <p>Address: {address}</p>;
}

function Name() {
    const name = useContext(ProfileContext);
    return <p>Name : {name}</p>;
}

function FormProfile({ name, setName }) {
    return (
        <>
            <input type="text" placeholder="Name..." value={name} onChange={(e) => setName(e.target.value)} />
        </>
    );
}

export default function ContextMedium2() {
    const [name, setName] = useState("");
    return (
        <div>
            <ProfileProvider>
                <h2>Contoh Context Medium 2</h2>
                {/* <FormProfile name={name} setName={setName} /> */}
                <Name />
                <Address />
            </ProfileProvider>
        </div>
    );
}
