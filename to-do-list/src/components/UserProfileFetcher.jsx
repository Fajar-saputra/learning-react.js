// src/UserProfileFetcher.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams

function UserProfileFetcher() { // Hapus { userId } dari props karena kita akan ambil dari URL
  // Ambil userId dari parameter URL
  const { userId: routeUserId } = useParams(); // Rename userId dari params agar tidak bentrok
  // Convert string ke number, karena parameter URL selalu string
  const userId = parseInt(routeUserId, 10);

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setUser(null);
    setIsLoading(true);
    setError(null);

    const fetchUserData = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (userId === 1) {
            resolve({ id: 1, name: 'Budi Santoso', email: 'budi@example.com', bio: 'Seorang pengembang React yang antusias.' });
          } else if (userId === 2) {
            resolve({ id: 2, name: 'Siti Aminah', email: 'siti@example.com', bio: 'Desainer UI/UX dengan passion terhadap detail.' });
          } else {
            reject(new Error(`Pengguna dengan ID ${userId} tidak ditemukan.`));
          }
        }, 1500);
      });
    };

    fetchUserData()
      .then(data => {
        setUser(data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err);
        setIsLoading(false);
      });

  }, [userId]); // Dependensi: effect akan dijalankan ulang jika userId (yang diambil dari URL) berubah

  // ... (Bagian return untuk isLoading, error, dan menampilkan user sama seperti sebelumnya)
  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', padding: '20px', fontSize: '1.2em', color: '#007bff' }}>
        Loading user profile...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '20px', color: 'red' }}>
        Error: {error.message}
      </div>
    );
  }

  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '20px',
      margin: '20px auto',
      maxWidth: '500px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: '#333' }}>Profil Pengguna</h2>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Nama:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Bio:</strong> {user.bio}</p>
    </div>
  );
}

export default UserProfileFetcher;