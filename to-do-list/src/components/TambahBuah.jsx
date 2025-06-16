import React, { useEffect, useState } from 'react';

function TambahBuah() {
  // State untuk menyimpan daftar buah
  const [daftarBuah, setDaftarBuah] = useState(() => {
    const stored = localStorage.getItem("buah");
    return stored ? JSON.parse(stored) : [];
  });
  // State untuk menyimpan nilai input buah baru
  const [inputBuah, setInputBuah] = useState('');

  useEffect(() => {
    localStorage.setItem("buah", JSON.stringify(daftarBuah));
  }, [daftarBuah])

  // Event handler untuk memperbarui state inputBuah saat input berubah
  const handleInputChange = (event) => {
    setInputBuah(event.target.value);
  };

  // Event handler untuk menambahkan buah ke daftar saat tombol diklik
  const handleTambahBuah = () => {
    if (inputBuah.trim() !== '') {
      // Membuat array baru berdasarkan state sebelumnya dan menambahkan buah baru
      // setDaftarBuah([...daftarBuah, inputBuah]);

      const newBuah = { id: Date.now(), name: inputBuah.trim() };

      setDaftarBuah(prevDaftar => [...prevDaftar, newBuah])
      
      // Mereset nilai input setelah ditambahkan
      setInputBuah('');
    }
  };

  return (
    <div>
      <h2>Tambah Buah</h2>
      <label>
        Nama Buah 
        <input
          style={{padding: ".3rem 0", marginInline: "1rem"}}
          type="text"
          value={inputBuah}
          onChange={handleInputChange}
          placeholder='Enter fruit...'
        />
      </label>
      <button onClick={handleTambahBuah}>Tambah</button>

      {daftarBuah.length > 0 && (
        <div>
          <h3>Daftar Buah:</h3>
          <ul>
            {daftarBuah.map((buah) => (
              <li key={buah.id}>{buah.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TambahBuah;