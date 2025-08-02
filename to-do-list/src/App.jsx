import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import Container from "./components/Container";
import Ternary from "./components/Ternary";
import And from "./components/And";
import Collection from "./components/Collection";
import AlertButton from "./components/AlertButton";
import EventForm from "./components/EventForm";
import Toolbar from "./components/Toolbar";
import EventDefault from "./components/EventDefault";
import Todo from "./components/Todo";
import ContactForm from "./components/ContactForm";

function App() {
    const text = "hello world";

    return (
        <>
            <Container>
                <h1>Ini testing ulang</h1>
                <Counter props={text} />
                <Counter props={"testing counter"} />
                <Ternary text={"testing conditional"} isConditional={true} />
                <Ternary text={text} isConditional={false} />
                <Ternary text={"belajar dengan sungguh sungguh"} isConditional={false} />
                <And text={"Ini contoh penggunaan and jika true"} isDeleted={true} />
                <And text={"Ini contoh penggunaan and jika false"} isDeleted={false} />
                <Collection />
                <AlertButton text={"testing button"} message={"i'm fine"} />
                <EventForm />
                <Toolbar
                    onClick={(e) => {
                        e.stopPropagation();
                        alert("testing propagation");
                    }}
                />
                <EventDefault
                    onClick={(e) => {
                        e.preventDefault();
                        alert("Searching start...");
                    }}
                />

                <Todo />

                <ContactForm />
            </Container>
        </>
    );
}

export default App;
