import { createContext, useContext, useState } from "react"

const ProfileContext = createContext(null);

function NamaSiswa() {
    const { nama } = useContext(ProfileContext);
    return <p>Nama : { nama }</p>
}
function KelasSiswa() {
    const { kelas } = useContext(ProfileContext);
    return <p>Kelas : { kelas }</p>
}
function NilaiSiswa() {
    const { nilai } = useContext(ProfileContext);
    return <p>Nilai : { nilai }</p>
}
function NimSiswa() {
    const { nim } = useContext(ProfileContext);
    return <p>NIM : { nim }</p>
}

export default function ProfileSiswaSMA() {
    const [data, setData] = useState({ nama: "", kelas: "", nilai: "", nim: "" })

    function handleChange(e) {
        const { name, value } = e.target;
        setData(data => ({...data, [name] : value}))
    }
 
    return (
        <div>
            <ProfileContext.Provider value={data} >
                <form >
                    <input type="text" value={data.nama} placeholder="nama..." name="nama" onChange={handleChange}/>
                    <input type="text" value={data.kelas} placeholder="kelas..." name="kelas" onChange={handleChange}/>
                    <input type="text" value={data.nilai} placeholder="nilai..." name="nilai" onChange={handleChange}/>
                    <input type="text" value={data.nim} placeholder="nim..." name="nim" onChange={handleChange}/>
                </form>
                <NamaSiswa />
                <KelasSiswa />
                <NilaiSiswa />
                <NimSiswa/>
            </ProfileContext.Provider>
        </div>
    )
}