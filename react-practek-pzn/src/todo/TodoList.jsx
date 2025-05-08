import Todo from "./Todo";

export default function TodoList() {
    return (
        <ul>
            <Todo isCompleted={true} text={"Belajar C++"} />
            <Todo isCompleted={true} text={"Belajar Java"} />
            <Todo isCompleted={false} text={"Belajar PHP"} />
            <Todo isCompleted={false} text={"Belajar Pyton"} />
            <Todo isCompleted={true} text={"Belajar JavaScript"} />
            </ul>
    )
}