export default function Ternary({ text, isConditional }) {
    return (
        <>
            {isConditional ? (
                <li>
                    <del>{text}</del>
                </li>
            ) : (
                <li>{text}</li>
            )}
        </>
    );
}
