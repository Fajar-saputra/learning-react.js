export default function TodoForm({handleAddTodo, input, setInput}) {
    return (
        <form onSubmit={handleAddTodo}>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Tambah todo baru" />
            <button type="submit">Tambah</button>
        </form>
    );
}
