import { createContext, useContext, useState } from "react";
import { data } from "react-router-dom";

// create context
const DataWarga = createContext(null);

// komponen
function NamaWarga() {
    const { nama } = useContext(DataWarga);
    return <p>Nama : {nama}</p>;
}
function UmurWarga() {
    const { umur } = useContext(DataWarga);
    return <p>Umur : {umur}</p>;
}
function PekerjaantWarga() {
    const { pekerjaan } = useContext(DataWarga);
    return <p>Pekerjaan : {pekerjaan}</p>;
}
function AlamatWarga() {
    const { alamat } = useContext(DataWarga);
    return <p>Alamat : {alamat}</p>;
}

export default function ContextMedium3() {
    const [Data, setData] = useState({
        nama: "",
        umur: "",
        pekerjaan: "",
        alamat: " ",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setData((data) => ({ ...data, [name]: value }));
    }
    return (
        <div>
            <DataWarga.Provider value={Data}>
                <form>
                    <input type="text" value={Data.nama} placeholder="Nama..." name="nama" onChange={handleChange} />
                    <input type="text" value={Data.umur} placeholder="Umur..." name="umur" onChange={handleChange} />
                    <input type="text" value={Data.pekerjaan} placeholder="Nama..." name="pekerjaan" onChange={handleChange} />
                    <input type="text" value={Data.alamat} placeholder="Nama..." name="alamat" onChange={handleChange} />
                </form>
                <NamaWarga />
                <UmurWarga />
                <PekerjaantWarga />
                <AlamatWarga />
            </DataWarga.Provider>
        </div>
    );
}
