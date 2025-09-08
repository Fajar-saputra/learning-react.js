import { createContext, useContext } from "react";

const NamaSiswa = createContext("");

function NamaSiswaSMP() {
    const nama = useContext(NamaSiswa);
    return <p>Nama : {nama}</p>;
}

export default function ContextBasic2() {
    return (
        <div>
            <NamaSiswa.Provider value="Basic 2">
                <NamaSiswaSMP />
            </NamaSiswa.Provider>
        </div>
    );
}
