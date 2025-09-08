import { createContext, useContext, useState } from "react";

const NamaContext = createContext();

function NamaContextProvier({ children }) {
    const [nama, setName] = useState("");

    return <NamaContext.Provider value={{ nama, setName }}>{children}</NamaContext.Provider>;
}

function NamaSiswaSMP() {
    const { nama } = useContext(NamaContext);
    return <p>Nama : {nama}</p>;
}

function FormNama() {
    const { nama, setName } = useContext(NamaContext);

    return <input type="text" value={nama} placeholder="Nama..." onChange={(e) => setName(e.target.value)} />;
}

export default function ContextMedium2() {
    return (
        <div>
            <NamaContextProvier>
                <h2>Medium 2</h2>
                <FormNama />
                <NamaSiswaSMP />
            </NamaContextProvier>
        </div>
    );
}
