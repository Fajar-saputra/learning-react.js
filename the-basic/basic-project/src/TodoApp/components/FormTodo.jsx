export default function FormTodo({setInputTodo, inputTodo, handleAddTodos}) {
    return (
        <>
            <form action="" onSubmit={handleAddTodos}>
                <input type="text" value={inputTodo} placeholder="Enter todo..." onChange={(e) => setInputTodo(e.target.value)}/>
                <button type="button">Add Todo</button>
        </form>
        </>
    )
}