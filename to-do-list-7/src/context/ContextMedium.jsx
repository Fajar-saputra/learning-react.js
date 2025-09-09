import { createContext, useContext, useState } from "react"

const DataContext = createContext(null);

function NamaSiswa() {
    const {nama} = useContext(DataContext)
    return (
        <p>Nama : { nama }</p>
    )
}
function KelasSiswa() {
    const {kelas} = useContext(DataContext)
    return (
        <p>Kelas : { kelas }</p>
    )
}
function NilaiSiswa() {
    const {nilai} = useContext(DataContext)
    return (
        <p>Nilai : { nilai }</p>
    )
}

export default function ContextMedium() {

    const [DataSiswa, setDataSiswa] = useState({
        nama: "",
        kelas: "",
        nilai: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setDataSiswa(data => ({...data, [name] : value}))
    }

    return (
        <div>
            <h2>testing context ContextMedium </h2>
            <DataContext.Provider value={DataSiswa}>
                <form >
                    <input
                        type="text"
                        name="nama"
                        placeholder="Nama.."
                        value={DataSiswa.nama}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="kelas"
                        placeholder="Kelas.."
                        value={DataSiswa.kelas}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="nilai"
                        placeholder="Nilai.."
                        value={DataSiswa.nilai}
                        onChange={handleChange}
                    />
                </form>
                <NamaSiswa />
                <KelasSiswa />
                <NilaiSiswa/>
            </DataContext.Provider>
        </div>
    )
}