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

export default function ContextMedium() {
    const [dataWarga, setDataWarga] = useState({
        nama: "",
        umur: "",
        alamat: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setDataWarga((data) => ({ ...data, [name]: value }));
    }

    return (
        <div>
            <h2>testing dulu gak sih</h2>
            <DataWargaContext.Provider value={dataWarga}>
                <form  style={{display: "flex", flexDirection: "column", gap: "10px", width: "200px", marginBottom: "20px"}}>
                    <input
                        type="text"
                        value={dataWarga.nama}
                        placeholder="Nama..."
                        onChange={handleChange}
                        name="nama"
                    />
                    <input
                        type="text"
                        value={dataWarga.umur}
                        placeholder="Umur..."
                        onChange={handleChange}
                        name="umur"
                    />
                    <input
                        type="text"
                        value={dataWarga.alamat}
                        placeholder="Aalamat..."
                        onChange={handleChange}
                        name="alamat"
                    />
                    
                </form>
                <NamaWarga />
                <UmurWarga />
                <AlamatWarga />
            </DataWargaContext.Provider>
        </div>
    );
}
