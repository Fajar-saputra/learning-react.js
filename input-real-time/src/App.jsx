import "./App.css";
import Counter from "./componets/Counter";
import FormEmail from "./componets/form/FormEmail";
import InputName from "./componets/form/inputName";
import FormValidation from "./componets/form/FormValidation";
import If from "./componets/conditional/If";
import TernaryOperator from "./componets/conditional/TernaryOperator";
import LogikaPendek from "./componets/conditional/LogikaPendek";
import Login from "./componets/Login";

function App() {
    return (
        <>
            <InputName />
            <Counter />
            <FormEmail />
            <FormValidation />
            <If isLoggedIn={true} />
            <hr />
            <TernaryOperator isLoggedIn={false} />
            <hr />
            <LogikaPendek isLoggedIn={true} />
            <hr />
            <Login />
        </>
    );
}

export default App;
