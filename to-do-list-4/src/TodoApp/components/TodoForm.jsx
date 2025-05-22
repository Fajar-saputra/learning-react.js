export default function TodoForm({ handleAddTodo, setInputTodo, inputTodo }) {
    return (
        <form onSubmit={handleAddTodo}>
            <input type="text" placeholder="Tambahkan todo..." value={inputTodo} onChange={(e) => setInputTodo(e.target.value)} />
            <button type="submit">Tambah Todo</button>
        </form>
    );
}
