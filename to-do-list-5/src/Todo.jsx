import React, { useState } from 'react'; // Don't forget to import useState!

function TodoList() {
  // 1. State untuk menyimpan daftar tugas. Awalnya kosong.
  // Each todo will be a simple string for now.
  const [todos, setTodos] = useState([]);

  // 2. State untuk menyimpan nilai input tugas baru
  // This will control our input field.
  const [newTodo, setNewTodo] = useState('');

  // 3. Event Handler untuk menangani perubahan pada input field
  // This updates the 'newTodo' state as the user types.
  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  // 4. Event Handler untuk menambahkan tugas baru
  // This runs when the form is submitted.
  const handleAddTodo = (event) => {
    event.preventDefault(); // Prevents the page from reloading on form submission

    // Only add if the input is not empty or just spaces
    if (newTodo.trim() !== '') {
      // Add the new todo to the 'todos' array
      // We use the spread operator (...) to create a new array,
      // because we should never directly modify state arrays/objects.
      setTodos([...todos, newTodo]);
      setNewTodo(''); // Clear the input field after adding the todo
    }
  };

  // 5. Event Handler untuk menghapus tugas
  // This runs when the "Hapus" button next to a todo is clicked.
  const handleDeleteTodo = (indexToDelete) => {
    // Filter the 'todos' array: keep all todos except the one at 'indexToDelete'
    const updatedTodos = todos.filter((_, index) => index !== indexToDelete);
    setTodos(updatedTodos); // Update the state with the new array
  };

  return (
    <div style={{ textAlign: 'center', margin: '50px', border: '1px solid #ccc', padding: '20px', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
      <h2>My Simple Todo List</h2>

      {/* Form for adding new tasks */}
      <form onSubmit={handleAddTodo} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={newTodo} // The input value is controlled by the 'newTodo' state
          onChange={handleInputChange} // Update 'newTodo' as input changes
          placeholder="Tambahkan tugas baru..."
          style={{ padding: '8px', marginRight: '10px', width: '250px', borderRadius: '5px', border: '1px solid #ddd' }}
        />
        <button type="submit" style={{ padding: '8px 15px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Add Task
        </button>
      </form>

      {/* List of tasks */}
      <ul style={{ listStyleType: 'none', padding: 0, marginTop: '20px' }}>
        {todos.length === 0 ? ( // Conditional rendering: show message if no todos
          <p style={{ color: '#888' }}>Tidak ada tugas hari ini. Ayo tambahkan!</p>
        ) : (
          // Map over the 'todos' array to render each todo item
          todos.map((todo, index) => (
            <li
              key={index} // 'key' is crucial for list rendering in React (helps React identify unique items)
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px',
                borderBottom: '1px solid #eee',
                maxWidth: '400px',
                margin: '0 auto',
                textAlign: 'left',
                backgroundColor: 'white',
                marginBottom: '5px',
                borderRadius: '5px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
              }}
            >
              <span>{todo}</span>
              <button
                onClick={() => handleDeleteTodo(index)} // Call handleDeleteTodo with the item's index
                style={{
                  background: '#dc3545',
                  color: 'white',
                  border: 'none',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Hapus
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TodoList;