import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import Container from "./components/Container";
import Ternary from "./components/Ternary";

function App() {
    const text = "hello world";

    return (
        <>
            {/* <Container> */}
                <h1>Ini testing ulang</h1>
                <Counter props={text} />
                <Counter props={"testing counter"} />
            {/* </Container> */}

            <Ternary text={"testing conditional"} isConditional={true}/>
            <Ternary text={text} isConditional={false}/>
            <Ternary text={"belajar dengan sungguh sungguh"} isConditional={false}/>
        </>
    );
}

export default App;
