import "./App.css";
import ProductTable from "./components/FilterableProductTable";
import Basic from "./contextBasic/Basic";
import ProfileBasic from "./contextBasic/ProfileBasic";
import ProfileMedium from "./contextMedium/ProfileMedium";

import Notes from "./notes/Notes";
import ReducerNotes from "./reducerNotes/ReducerNotes";

function App() {
    return (
        <>
            {/* <ProductTable /> */}
            {/* <Notes /> */}
            <ReducerNotes />
            {/* <Basic />
            <ProfileBasic />
            <ProfileMedium /> */}
        </>
    );
}

export default App;
