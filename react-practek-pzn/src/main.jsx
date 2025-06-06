import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./cubaStyling.css";

import HelloWord from "./compenents/HelloWord.jsx";
import Button from "./compenents/Button.jsx";
import HelloNgab from "./compenents/HelloNgab.jsx";
import Container from "./compenents/Container.jsx";
import Cards from "./compenents/Cards.jsx";
import TodoList from "./props/TodoList.jsx";
import DataMahasiswa from "./compenents/DataMahasiswa.jsx";
import AlertButton from "./compenents/AlertButton.jsx";
import TestProps from "./props/TestProps.jsx";
import TodoApp from "./TodoApp/TodoApp.jsx";


createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Container>
            <HelloWord />
            <Button />
            <HelloNgab text="test aja" />
            <Cards />
            <TodoList />
            <DataMahasiswa />
            <AlertButton />
            <TestProps />
            <TodoApp />
        </Container>
    </StrictMode>
);
