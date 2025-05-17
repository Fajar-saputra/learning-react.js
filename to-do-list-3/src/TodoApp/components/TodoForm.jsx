export default function TodoForm({ input, setInput, handleAdd }) {
    return (
        <form onSubmit={handleAdd}>
            <input type="text" placeholder="Enter your todo..." onChange={(e) => setInput(e.target.value)} value={input} autoFocus />
            <button type="submit">Add</button>
        </form>
    );
}
