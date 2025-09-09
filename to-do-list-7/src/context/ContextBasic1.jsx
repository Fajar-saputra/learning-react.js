import { createContext, useContext } from "react";

// create context
const ProfileUser = createContext("");

// komponen anak
function ProfileName() {
    const nama = useContext(ProfileUser);
    return <p>Nama User : {nama}</p>;
}

export default function ContextBasic1() {

    return (
        <div>
            <h2>Contoh Context basic1</h2>
            <ProfileUser.Provider value="Elvira">
                <ProfileName />
            </ProfileUser.Provider>
        </div>
    );
}
