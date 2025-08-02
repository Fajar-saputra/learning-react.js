import TodoList from "./components/TodoList";
import Container from "./components/Container";
import "./Styling.css";
import React from "react";


function App() {
    return (
        <>
            <Container>
                <TodoList />
            </Container>
        </>
    )
}

export default App;
