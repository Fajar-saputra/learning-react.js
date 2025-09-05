import { createContext, useContext, useState } from "react";

const ProfileContext = createContext("");

function ProfileAddress() {
    const address = useContext(ProfileContext);
    return (
        <>
            <p>Address : {address}</p>
        </>
    );
}

function ProfileName() {
    const name = useContext(ProfileContext);
    return <p>Nama : {name}</p>;
}

function FormProfile({ name, setName }) {
    return (
        <>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </>
    );
}

export default function ProfileMedium() {
    const [name, setName] = useState("")
    return (
        <>
            <ProfileContext.Provider value={name}>
                <h2>Medium Context</h2>
                <FormProfile name={name} setName={setName} />
                <ProfileAddress />
                <ProfileName />
            </ProfileContext.Provider>
        </>
    );
}
