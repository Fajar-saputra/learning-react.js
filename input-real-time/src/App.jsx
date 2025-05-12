import "./App.css";
import Counter from "./componets/Counter";
import FormEmail from "./componets/form/FormEmail";
import InputName from "./componets/form/inputName";
import FormValidation from "./componets/form/FormValidation";
import If from "./componets/conditional/If";
import TernaryOperator from "./componets/conditional/TernaryOperator";
import LogikaPendek from "./componets/conditional/LogikaPendek";
import Login from "./componets/Login";
import Greeting from "./componets/conditional/Greeting";
import Lulus from "./componets/conditional/Lulus";
import Admin from "./componets/conditional/Admin";
import Status from "./componets/conditional/Status";
import InputChecker from "./componets/conditional/InputChecker";
import Isback from "./componets/conditional/Isback";
import InputNames from "./componets/conditional/InputNames";
import Grade from "./componets/conditional/Grade";

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
            <Greeting isLoggedIn={true} />
            <Lulus nilai={79} />
            <Admin isAdmin={false} />
            <Status isStatus={"success"} />
            <InputChecker />
            <Isback />
            <InputNames />
            <Grade nilaiLuu={74} />
        </>
    );
}

export default App;
