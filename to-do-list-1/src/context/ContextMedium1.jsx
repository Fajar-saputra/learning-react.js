import { createContext, useContext, useState } from "react";

const NamaContext = createContext();

function NamaSiswaSMP() {
    const {nama} = useContext(NamaContext);
    return <p>Nama : {nama}</p>;
}

function FormNama() {
    const { nama, setName } = useContext(NamaContext);

    return (
        <input
            type="text"
            value={nama}
            placeholder="Name..."
            onChange={(e) => setName(e.target.value)}
        />
    )
}

export default function ContextMedium1() {
    const [nama, setName] = useState("")
    return (
        <div>
            <NamaContext.Provider value={{nama, setName}}>
                <h2>Medium 1</h2>
                <FormNama/>
                <NamaSiswaSMP />
            </NamaContext.Provider>
        </div>
    );
}
