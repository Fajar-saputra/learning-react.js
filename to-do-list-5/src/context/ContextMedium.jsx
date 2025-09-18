import { createContext, useContext, useState } from "react";

// create
const ProfileContext = createContext(null);

// const initialData = {
//     nama: "",
//     umur: ""
// }

// komponen
function ProfileName() {
    const { nama } = useContext(ProfileContext);
    return <p>Nama : {nama}</p>;
}

function ProfileUmur() {
    const { umur } = useContext(ProfileContext);
    return <p>Umur : {umur}</p>;
}

function ProfileForm() {
    const { nama, setValue } = useContext(ProfileContext);

    return (
        <>
            <input type="text" placeholder="Name..." value={nama} onChange={(e) => setValue({ ...nama, nama: e.target.value })} />
            <input type="text" placeholder="Umur..." value={umur} onChange={(e) => setValue({...umur, umur: e.target.value})} />
        </>
    );
}

const ProfileProvider = ({ children }) => {
    const [value, setValue] = useState({
        nama: "",
        umur: "",
    });

    return <ProfileContext.Provider value={{ value, setValue }}>{children}</ProfileContext.Provider>;
};

export default function ContextMedium() {
    return (
        <>
            <ProfileProvider>
                <h2>Belajar Context Medium</h2>
                <ProfileForm />
                <ProfileName />
                <ProfileUmur />
            </ProfileProvider>
        </>
    );
}
