export default function TodoForm({ handleAddTodo, setInputTodo, inputTodo }) {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleAddTodo(inputTodo);
                setInputTodo("");
            }}
        >
            <input
                type="text"
                placeholder="Tambahkan todo..."
                value={inputTodo} onChange={(e) => setInputTodo(e.target.value)} />
            <button type="submit">Tambah Todo</button>
        </form>
    );
}
