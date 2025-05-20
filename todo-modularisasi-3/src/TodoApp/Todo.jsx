import ItemForm from "./components/ItemForm";
import ItemTodo from "./components/ItemTodo";
import UseLogic from "./hooks/useLogic";

export default function Todo() {

    const { todos, input, setInput, handleAddTodo, handleHapusTodo, handleEditTodo, handleStartEdit, editID, setEditTodo, editTodo  } = UseLogic();

    return (
        <div>
            <h1>Testing aja</h1>
            <ItemForm input={input} setInput={setInput} handleAddTodo={handleAddTodo}/>

            <ul>
                {
                    todos.map(todo => 
                        <ItemTodo
                            todo={todo}
                            editID={editID}
                            setEditTodo={setEditTodo}
                            editTodo={editTodo}
                            handleHapusTodo={handleHapusTodo}
                            handleStartEdit={handleStartEdit}
                            handleEditTodo={handleEditTodo}
                        />
                    )
                }
            </ul>
        </div>
    );
}
