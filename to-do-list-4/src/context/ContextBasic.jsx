import { createContext, useContext, useState } from "react";

// create context
const BarangContext = createContext(null);
// provider
function BarangProvider({ children }) {
    const [nama, setNama] = useState("");
    return <BarangContext.Provider value={{ nama, setNama }}>{children}</BarangContext.Provider>;
}
// children
function NamaBarang() {
    const { nama } = useContext(BarangContext);
    return <p>Nama Barang : {nama}</p>;
}

function FormNamaBarang() {
    const { nama, setNama } = useContext(BarangContext);

    return <input type="text" value={nama} placeholder="Nama..." onChange={(e) => setNama(e.target.value)} />;
}

export default function ContextBasic() {
    return (
        <div>
            <h2>Testing dulu gak sih</h2>
            <BarangProvider>
                <FormNamaBarang />
                <NamaBarang />
            </BarangProvider>
        </div>
    );
}
