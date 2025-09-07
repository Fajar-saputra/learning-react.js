// import './App.css'

import ContextMedium1 from "./context/ContextMedium1";
import ContextBasic1 from "./context/ContextBasic1";
import ContextBasic2 from "./context/ContextBasic2";
import TodoApp from "./Todos/TodoApp";

function App() {
    return (
        <>
            {/* <TodoApp /> */}
            <ContextBasic1 />
            <ContextBasic2 />
            <ContextMedium1 />
            {/* <ContextMedium2 /> */}
        </>
    );
}

export default App;
