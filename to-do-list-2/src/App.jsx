import Container from "./components/Container";
import "./Styling.css";
import React from "react";
import Todo from "./components/TodoApp/Todo";

function App() {
    return (
        <>
            <Container>
                <Todo />
            </Container>
        </>
    );
}

export default App;
