export default function TodoForm({handleAddTodo, setInputTodos, InputTodos}) {
    return (
        <form onSubmit={handleAddTodo}>
            <input
                type="text"
                value={InputTodos}
                onChange={(e) => setInputTodos(e.target.value)}
                placeholder="Enter todo..."
            />
            <button type="submit">Add Todo</button>
        </form>
    )
}