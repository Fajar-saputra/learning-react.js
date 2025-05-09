export default function AlertButton() {
    function handleAlert() {
        const name = prompt("Enter your name!!");
        if (name) {
            alert("Haiii " + name);
        } else {
            alert("Haii sobat!!");
        }
    }

    return (
        <button onClick={handleAlert}>Click Me!!!</button>
    );
}
