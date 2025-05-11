export default function Display({name}) {
    return (
        // <p>Hello my name is {name ||"siapa"}</p>
        <p>{name ? `Hello ${name}` : "Hello siapa nama mu"}</p>
    )
}