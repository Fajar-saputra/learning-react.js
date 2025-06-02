export default function TestProps({ text, isCompleted, isDeleted = false }) {
    // if (isCompleted) {
    //     return (
    //         <li>
    //             <del>{text}</del>
    //         </li>
    //     );
    // } else {
    //     return <li>{text}</li>;
    // }

    if (isDeleted) {
        return null;
    } else {
        return (
            <li>
                {isCompleted ? <del> {text}</del> : text }
            </li>
        );
    }
}
