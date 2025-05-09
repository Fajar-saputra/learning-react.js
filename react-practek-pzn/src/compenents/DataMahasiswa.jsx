import Mahasiswa from "../data/Mahasiswa"

export default function DataMahasiswa() {
    return (
        <ul className="cards">
            {Mahasiswa.map((m, i) => (
                <li key={i} className="card">
                    <h3>{ m.nama }</h3>
                    <p>{ m.nim }</p>
                    <p>{ m.jurusan }</p>
                    <p>{ m.angkatan }</p>
                    <p>{ m.ipk }</p>
                    <p>{ m.aktif }</p>
                </li>
            ))}
        </ul>
    )
}