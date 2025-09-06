import { createContext } from "react";

// create
const ProfileContext = createContext("");

// komponen
function ProfileName() {
    return <p>Nama : {ProfileContext}</p>;
}

function ProfileUmur() {
    return <p>Umur : {ProfileContext}</p>;
}

export default function ContextBasic() {
    return (
        <>
            <ProfileContext.Provider value="Ucup">
                <h2>Basic</h2>
                <ProfileName />
                <ProfileUmur />
            </ProfileContext.Provider>
        </>
    );
}
