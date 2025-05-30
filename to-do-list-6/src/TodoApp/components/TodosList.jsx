import TaskForm from "./TaskForm";
import Tasks from "./Tasks";

export default function TodoList({ todos, editId, handleClickEdit, handleSaveEdit, editTodo, setEditTodo, messageErr, handelAddSubtasks, tasks, setAddtasks }) {
    return (
        <ul>
            {todos.map((todo) => {
                const isEditingThisTodo = todo.id === editId;
                return (
                    <li key={todo.id} style={{ display: "flex", gap: ".3rem", alignItems: "center", width: "100%" }}>
                        {/* this is editing? */}
                        {isEditingThisTodo ? (
                            <>
                                <input
                                    type="text"
                                    onBlur={handleSaveEdit}
                                    value={editTodo}
                                    onChange={(e) => setEditTodo(e.target.value)}
                                    autoFocus
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            handleSaveEdit();
                                        }
                                    }}
                                />
                                {/* Tampilkan pesan error hanya untuk item yang sedang diedit */}
                                {isEditingThisTodo && messageErr && <span style={{ color: "red", fontSize: "0.8em", display: "block" }}>{messageErr}</span>}
                            </>
                        ) : (
                            // no editing
                            <div>
                                <span onDoubleClick={() => handleClickEdit(todo.id, todo.title)} style={{ width: "fit-content" }}>
                                    {todo.title}
                                    <TaskForm handelAddSubtasks={() => handelAddSubtasks(todo.id)} task={tasks} setAddtasks={setAddtasks} />
                                </span>

                                <Tasks todo={todo}/>
                                {/* <ul>
                                    {todo.subtasks.map((task) => (
                                        <li key={task.id}>{task.task}</li>
                                    ))}
                                </ul> */}
                            </div>
                        )}
                    </li>
                );
            })}
        </ul>
    );
}
