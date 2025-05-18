export default function TodoForm({ setInput, handleAddTodo, input }) {
    return (
        <form style={{ displayf: "flex", alignItems: "center" }} onSubmit={handleAddTodo}>
            <input
                type="text"
                placeholder="Enter your todo..."
                onChange={(e) => setInput(e.target.value)}
                value={input}
                autoFocus
                />
            <button type="submit">Add Todo</button>
        </form>
    );
}
