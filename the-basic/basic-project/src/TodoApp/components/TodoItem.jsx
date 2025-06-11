import React, { useState } from "react";
// Import FormTasks jika Anda menggunakannya di sini
import FormTasks from './FormTasks'; // Sesuaikan path jika berbeda

export default function TodoItem({ todo, onDelete, onEdit, onSaveEdit, addSubtask, deleteSubtask, editSubtask, currentEditId, currentEditTodo, setEditTodo, todoError }) {
  // State lokal untuk manajemen input subtask
  const [showInputSubtask, setShowInputSubtask] = useState(false);
  const [inputSubtask, setInputSubtask] = useState("");
  const [subtaskError, setSubtaskError] = useState("");
  const [editSubtaskId, setEditSubtaskId] = useState(null);
  const [editSubtaskText, setEditSubtaskText] = useState("");


  const handleShowInputSubtask = () => {
    setShowInputSubtask(!showInputSubtask);
    setInputSubtask(""); // Reset input saat menutup/membuka
    setSubtaskError(""); // Reset error saat menutup/membuka
    setEditSubtaskId(null); // Pastikan mode edit subtask mati
  };

  const handleErrorSubtask = (input, currentSubtasks, isEditingSubtask = false, existingSubtaskId = null) => {
    if (input.trim() === "") {
      return "Input subtask tidak boleh kosong";
    }
    if (input.length < 3) { // Contoh: minimal 3 karakter untuk subtask
      return "Subtask minimal 3 karakter!";
    }
    // Cek duplikasi di antara subtask untuk todo ini
    const duplicated = currentSubtasks.some(
      (sub) =>
        (!isEditingSubtask || sub.id !== existingSubtaskId) && // Abaikan subtask saat ini jika sedang diedit
        sub.task.toLowerCase() === input.toLowerCase()
    );

    if (duplicated) {
      return "Subtask sudah ada!";
    }
    return null;
  };


  const handleAddSubtask = () => {
    const trimmed = inputSubtask.trim();
    const error = handleErrorSubtask(trimmed, todo.subtask);
    if (error) {
      setSubtaskError(error);
      return;
    }
    addSubtask(todo.id, trimmed); // Panggil fungsi dari prop
    setInputSubtask("");
    setSubtaskError("");
    setShowInputSubtask(false); // Sembunyikan input setelah menambah
  };

  const handleClickEditSubtask = (subtaskId, subtaskText) => {
    setEditSubtaskId(subtaskId);
    setEditSubtaskText(subtaskText);
    setSubtaskError("");
    setShowInputSubtask(false); // Pastikan form tambah subtask tidak muncul saat edit
  };

  const handleSaveEditSubtask = () => {
    const trimmed = editSubtaskText.trim();
    const error = handleErrorSubtask(trimmed, todo.subtask, true, editSubtaskId);
    if (error) {
      setSubtaskError(error);
      return;
    }
    editSubtask(todo.id, editSubtaskId, trimmed); // Panggil fungsi dari prop
    setEditSubtaskId(null);
    setEditSubtaskText("");
    setSubtaskError("");
  };

  const handleDeleteSubtask = (subtaskId) => {
    deleteSubtask(todo.id, subtaskId); // Panggil fungsi dari prop
  };


  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      {currentEditId === todo.id ? (
        <div>
          <input
            type="text"
            value={currentEditTodo}
            onChange={(e) => setEditTodo(e.target.value)}
          />
          <button onClick={onSaveEdit}>Save</button>
          <button onClick={() => { onEdit(null, null); setEditTodo(""); }}>Cancel</button> {/* Batalkan edit todo utama */}
          {todoError && <p style={{ color: "red" }}>{todoError}</p>}
        </div>
      ) : (
        <div>
          <h3>{todo.title}</h3>
          <button onClick={() => onEdit(todo.id, todo.title)}>Edit Todo</button>
          <button onClick={() => onDelete(todo.id)}>Delete Todo</button>
          <button onClick={handleShowInputSubtask}>
            {showInputSubtask ? "Cancel Add Subtask" : "Add Subtask"}
          </button>
        </div>
      )}

      {showInputSubtask && (
        <div>
          <input
            type="text"
            value={inputSubtask}
            onChange={(e) => setInputSubtask(e.target.value)}
            placeholder="Enter new subtask..."
          />
          <button onClick={handleAddSubtask}>Add Subtask</button>
          {subtaskError && <p style={{ color: "red" }}>{subtaskError}</p>}
        </div>
      )}

      {/* Daftar subtask */}
      <ul>
        {todo.subtask.map((sub) => (
          <li key={sub.id}>
            {editSubtaskId === sub.id ? (
              <div>
                <input
                  type="text"
                  value={editSubtaskText}
                  onChange={(e) => setEditSubtaskText(e.target.value)}
                />
                <button onClick={handleSaveEditSubtask}>Save</button>
                <button onClick={() => {setEditSubtaskId(null); setEditSubtaskText("")}}>Cancel</button>
                {subtaskError && <p style={{ color: "red" }}>{subtaskError}</p>}
              </div>
            ) : (
              <div>
                {sub.task}
                <button onClick={() => handleClickEditSubtask(sub.id, sub.task)}>Edit</button>
                <button onClick={() => handleDeleteSubtask(sub.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}