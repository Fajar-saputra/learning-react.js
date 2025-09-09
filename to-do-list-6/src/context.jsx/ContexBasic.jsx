import { createContext, useContext, useState } from "react";

const DataWargaContext = createContext(null);

function NamaWarga() {
    const { nama } = useContext(DataWargaContext);
    return <p>Nama : {nama}</p>;
}
function UmurWarga() {
    const { umur } = useContext(DataWargaContext);
    return <p>Nama : {umur}</p>;
}
function AlamatWarga() {
    const { alamat } = useContext(DataWargaContext);
    return <p>Nama : {alamat}</p>;
}

export default function ContextBasic() {
    const dataWarga = {
        nama: "Elvira",
        umur: 20,
        alamat: "Batu kambing",
    };

    return (
        <div>
            <h2>testing dulu gak sih</h2>
            <DataWargaContext.Provider value={dataWarga}>

                <NamaWarga />
                <UmurWarga />
                <AlamatWarga />
            </DataWargaContext.Provider>
        </div>
    );
}
