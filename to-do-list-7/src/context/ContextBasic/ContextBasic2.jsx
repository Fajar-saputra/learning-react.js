import { createContext, useContext } from "react";
// create context
const ProfileUser = createContext("");

// komponen anak
function ProfileName() {
    const nama = useContext(ProfileUser);
    return <p>Nama User : {nama}</p>;
}

// provier
function ProfileProvider({ children }) {
    return <ProfileUser.Provider value="Elvita">{children}</ProfileUser.Provider>;
}

export default function ContextBasic2() {
    return (
        <div>
            <h2>Contoh Context basic2</h2>
            <ProfileProvider>
                <ProfileName />
            </ProfileProvider>
        </div>
    );
}
