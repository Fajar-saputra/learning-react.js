import "./App.css";
import ContextBasic from "./context/ContextBasic";
import ContextMedium from "./context/ContextMedium";
import Todo from "./TodoApp/Todo";
import TodoReducer from "./TodoReducer";

function App() {
    return (
        <div>
            <ContextBasic />
            <ContextMedium />
        </div>
    );
}

export default App;
