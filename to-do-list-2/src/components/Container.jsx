export default function Container({ children }) {
    return (
        <div className="container">
            <h1>INI CONTAINER</h1>
            {children}
            <footer>ini footer</footer>
        </div>
    );
}
