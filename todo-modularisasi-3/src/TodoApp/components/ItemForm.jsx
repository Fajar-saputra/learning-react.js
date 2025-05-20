export default function ItemForm({ setInput, input, handleAddTodo }) {
    return (
        <form onSubmit={handleAddTodo}>
            <input type="text" placeholder="Enter your todo..." onChange={(e) => setInput(e.target.value)} value={input} autoFocus />

            <button type="submit">Add Todo</button>
        </form>
    );
}
