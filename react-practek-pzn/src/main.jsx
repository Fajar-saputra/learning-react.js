import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./cubaStyling.css";

import HelloWord from "./compenent/HelloWord.jsx";
import Button from "./compenent/Button.jsx";
import HelloNgab from "./compenent/HelloNgab.jsx";
import Container from "./compenent/Container.jsx";
import Cards from "./compenent/Cards.jsx";
import TodoList from "./todo/TodoList.jsx";
import DataMahasiswa from "./compenent/DataMahasiswa.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Container>
            <HelloWord />
            <Button />
            <HelloNgab text="test aja" />
            <Cards />
      <TodoList />
      <DataMahasiswa />
        </Container>
    </StrictMode>
);
