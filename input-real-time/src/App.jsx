import "./App.css";
import Counter from "./componets/Counter";
import FormEmail from "./componets/form/FormEmail";
import InputName from "./componets/form/inputName";
import FormValidation from "./componets/form/FormValidation";

function App() {
    return (
        <>
            <InputName />
            <Counter />
            <FormEmail />
            <FormValidation />
        </>
    );
}

export default App;
