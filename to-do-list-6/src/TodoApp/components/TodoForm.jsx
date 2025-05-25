export default function TodoForm({inputTodos, setInputTodos, handleAddTodos}) {
    return (
        // <form onSubmit={(e) => {
        //     e.preventDefault();
        //     handleAddTodos(inputTodos)
        // }}>
        <form onSubmit={
            handleAddTodos}>
            <input type="text" placeholder="Enter todo..." value={inputTodos} onChange={(e) => setInputTodos(e.target.value)}/>
            <button type="submit">Add</button>
        </form>
    )
}