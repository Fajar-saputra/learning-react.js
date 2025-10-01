import { useContext, useState } from "react";
import { TodosContext } from "./TodoContext";

export default function TodoItem() {
    const { todos, dispatch } = useContext(TodosContext);
    const [updateTodo, setUpdateTodo] = useState(""); 

    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id}>
                        {todo.done? <span style={{color: "red"}}>{todo.title}</span> : <span>{todo.title}</span> }
                    
                    <span>
                        <button type="button" onClick={() => dispatch({type: "DONE_TODO", payload: {todoId: todo.id}})}>✔</button>
                        <button type="button" onClick={() => dispatch({type: "UPDATE_TODO", payload: {todoId: todo.id, text: updateTodo}})}>⚙</button>
                        <button type="button" onClick={() => dispatch({type: "DELETE_TODO", payload: {todoId: todo.id}})}>🗑</button>
                    </span>
                </div>
            ))}
        </div>
    );
}
