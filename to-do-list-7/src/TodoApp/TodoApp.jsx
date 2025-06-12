import React from 'react';
import LogicTodo from './hooks/LogicTodo';
import TodoItem from './components/TodoItem';

function App() {
  const {
    todos,
    inputTodo,
    setInputTodo,
    handleAddTodos,
    handleDeleteTodos,
    todoErr,
    editId,
    setEditTodo,
    editTodo,
    handleClickEdit,
    handleSaveEdit,
    addSubtask, // Teruskan fungsi ini
    deleteSubtask, // Teruskan fungsi ini
    editSubtask, // Teruskan fungsi ini
  } = LogicTodo(); // Panggil hook kustom Anda

  return (
    <div>
      <h1>My Todo List</h1>
      <form onSubmit={handleAddTodos}>
        <input
          type="text"
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
          placeholder="Add new main todo..."
        />
        <button type="submit">Add Todo</button>
        {todoErr && <p style={{ color: "red" }}>{todoErr}</p>}
      </form>

      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={handleDeleteTodos}
            onEdit={handleClickEdit}
            onSaveEdit={handleSaveEdit}
            currentEditId={editId} // Teruskan state edit dari LogicTodo
            currentEditTodo={editTodo}
            setEditTodo={setEditTodo}
            todoError={todoErr} // Teruskan error dari todo utama
            addSubtask={addSubtask} // Teruskan fungsi addSubtask
            deleteSubtask={deleteSubtask} // Teruskan fungsi deleteSubtask
            editSubtask={editSubtask} // Teruskan fungsi editSubtask
          />
        ))}
      </div>
    </div>
  );
}

export default App;