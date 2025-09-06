import { createContext, useState } from "react";

// create
const ProfileName = createContext("");
const ProfileAddress = createContext("");

// komponen
function ProfileName() {
    return <p>Nama : {ProfileName}</p>;
}

function ProfileUmur() {
    return <p>Umur : {ProfileAddress}</p>;
}

function ProfileForm({ value, setValue }) {
    return (
        <>
            <input type="text" placeholder="Name..." value={value} onChange={(e) => setValue(e.target.value)} />
        </>
    );
}

export default function ContextMedium() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    return (
        <>
            <ProfileContext.Provider value={name}>
                <h2>Medium</h2>
                <ProfileForm value={name} setValue={setName}/>
                <ProfileForm value={address} setValue={setAddress}/>
                <ProfileName />
                <ProfileUmur />
            </ProfileContext.Provider>
        </>
    );
}
