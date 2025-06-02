export default function FormTodo({ handleAddTodo, setInputTodo, inputTodo }) {
    return (
        <form onSubmit={handleAddTodo}>
            <input
                type="text"
                placeholder="Enter todo..."
                onChange={(e) => setInputTodo(e.target.value)}
                value={inputTodo}
            />
            <button type="button">Add</button>
        </form>
    );
}
