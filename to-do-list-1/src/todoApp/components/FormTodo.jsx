export default function FormTodo({ handle, input, setInput }) {

    return (
        <form onSubmit={handle}>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}  placeholder="New todo..."/>
            <button type="submit">➕</button>
        </form>
    );
}
