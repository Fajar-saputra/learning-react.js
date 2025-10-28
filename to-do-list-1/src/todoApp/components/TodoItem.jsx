import FormSubtodo from "./FormSubtodo";
import SubtodoItem from "./SubtodoItem";

export default function TodoItem({
    todo,
    editId,
    editTitle,
    setEditTitle,
    inpSub,
    setInpSub,
    handleUpdateTodo,
    handleDoneTodo,
    handleEditTodo,
    handleDeleteTodo,
    handleAddSubtodo,
    handleDeleteSubtodo,
    handleDoneSubtodo,
}) {
    return (
        <div key={todo.id}>
            {todo.id === editId ? (
                <form onSubmit={(e) => handleUpdateTodo(e, editId, editTitle)}>
                    <input value={editTitle} onChange={(e) => setEditTitle(e.target.value)} placeholder="Edit todo..." />
                    <button type="submit">✔</button>
                </form>
            ) : (
                <>
                    <span style={{ color: todo.isDone ? "green" : "white" }}>{todo.title}</span>
                    <button onClick={() => handleDoneTodo(todo.id)}>✔</button>
                    <button onClick={() => handleEditTodo(todo.id, todo.title)}>⚙</button>
                    <button onClick={() => handleDeleteTodo(todo.id)}>🗑</button>
                </>
            )}

            {/* Subtodo form */}
            <FormSubtodo handleAdd={handleAddSubtodo} todo={todo} inpSub={inpSub} setInpSub={setInpSub} />

            {/* Subtodo list */}
            <SubtodoItem todo={todo} handleDeleteSubtodo={handleDeleteSubtodo} handleDoneSubtodo={handleDoneSubtodo} />
        </div>
    );
}
