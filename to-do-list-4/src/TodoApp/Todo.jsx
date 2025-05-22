import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { UseLogic } from "./hooks/UseLogic";

export default function Todo() {
    // Ambil semua state dan fungsi dari UseLogic hook
    const {
        todos,
        inputTodo,
        setInputTodo,
        handleAddTodo,
        subtaskInput,
        setSubtaskInput,
        handleAddSubtask,
        handleDeleteTodo,
        handleDeleteSubtask,
        handleEditTodo,
        handleSaveEditTodo,
        handleCancelEditTodo,
        editingTodoId,
        editingTodoText,
        setEditingTodoText,
        handleEditSubtask,
        handleSaveEditSubtask,
        handleCancelEditSubtask,
        editingSubtaskId,
        editingSubtaskText,
        setEditingSubtaskText,
    } = UseLogic();

    return (
        <div>
            <h1>Testing Todo</h1>
            <TodoForm
                inputTodo={inputTodo}
                setInputTodo={setInputTodo}
                handleAddTodo={handleAddTodo}
            />

            <TodoItem
                todos={todos}
                handleAddSubtask={handleAddSubtask}
                subtaskInput={subtaskInput}
                setSubtaskInput={setSubtaskInput}
                // Props baru untuk fungsionalitas hapus dan edit todo
                handleDeleteTodo={handleDeleteTodo}
                handleEditTodo={handleEditTodo}
                handleSaveEditTodo={handleSaveEditTodo}
                handleCancelEditTodo={handleCancelEditTodo}
                editingTodoId={editingTodoId}
                editingTodoText={editingTodoText}
                setEditingTodoText={setEditingTodoText}
                // Props baru untuk fungsionalitas hapus dan edit subtask
                handleDeleteSubtask={handleDeleteSubtask}
                handleEditSubtask={handleEditSubtask}
                handleSaveEditSubtask={handleSaveEditSubtask}
                handleCancelEditSubtask={handleCancelEditSubtask}
                editingSubtaskId={editingSubtaskId}
                editingSubtaskText={editingSubtaskText}
                setEditingSubtaskText={setEditingSubtaskText}
            />
        </div>
    );
}