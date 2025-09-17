import "./App.css";
import ContextBasic from "./context/ContextBasic";
import NotesApp from "./NotesApp/NotesApp";
import Todo from "./TodoApp/Todo";
import TodoReducer from "./TodoReducer";

function App() {
    return (
        <div>
            {/* <ContextBasic /> */}
            {/* <Todo />  */}
            <NotesApp />
        </div>
    );
}

export default App;
