import React, { useState } from 'react';

function TambahBuah() {
  // State untuk menyimpan daftar buah
  const [daftarBuah, setDaftarBuah] = useState([]);
  // State untuk menyimpan nilai input buah baru
  const [inputBuah, setInputBuah] = useState('');

  // Event handler untuk memperbarui state inputBuah saat input berubah
  const handleInputChange = (event) => {
    setInputBuah(event.target.value);
  };

  // Event handler untuk menambahkan buah ke daftar saat tombol diklik
  const handleTambahBuah = () => {
    if (inputBuah.trim() !== '') {
      // Membuat array baru berdasarkan state sebelumnya dan menambahkan buah baru
      setDaftarBuah([...daftarBuah, inputBuah]);
      // Mereset nilai input setelah ditambahkan
      setInputBuah('');
    }
  };

  return (
    <div>
      <h2>Tambah Buah</h2>
      <label>
        Nama Buah:
        <input
          type="text"
          value={inputBuah}
          onChange={handleInputChange}
        />
      </label>
      <button onClick={handleTambahBuah}>Tambah</button>

      {daftarBuah.length > 0 && (
        <div>
          <h3>Daftar Buah:</h3>
          <ul>
            {daftarBuah.map((buah, index) => (
              <li key={index}>{buah}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TambahBuah;