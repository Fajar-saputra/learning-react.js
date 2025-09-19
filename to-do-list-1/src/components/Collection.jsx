export default function Collection() {
    const data = [
        { id: Date.now(), task: "belajar react dasar", isCompeled: false },
        { id: Date.now(), task: "belajar python dasar", isCompeled: true },
        { id: Date.now(), task: "belajar css dasar", isCompeled: false },
        { id: Date.now(), task: "belajar javascript dasar", isCompeled: false },
        { id: Date.now(), task: "membaca", isCompeled: true },
        { id: Date.now(), task: "mengaji", isCompeled: false },
    ];

    return (
        <>
            <ul>
                {data.map((task) => (
                    <li key={task.id}>{task.isCompeled ? <span>{task.task}</span> : <span>{task.task}✔</span>}</li>
                ))}
            </ul>
        </>
    );
}
