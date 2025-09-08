import "./App.css";
import ProductTable from "./components/FilterableProductTable";
import Basic from "./contextBasic/Basic";
import ProfileBasic from "./contextBasic/ProfileBasic";
import ProfileMedium from "./contextMedium/ProfileMedium";
import ProfileSiswaSMA from "./contextMedium/ProfileSiswaSMA";
import ProfileSiswaSMA2 from "./contextMedium/ProfileSiswaSMA2";

import Notes from "./notes/Notes";
import ReducerNotes from "./reducerNotes/ReducerNotes";

function App() {
    return (
        <>
            {/* <ProductTable /> */}
            {/* <Notes /> */}
            {/* <ReducerNotes /> */}
            {/* <Basic /> */}
            {/* <ProfileBasic /> */}
            <ProfileMedium />
            <ProfileSiswaSMA />
            <ProfileSiswaSMA2 />
            <h2>hahaha</h2>
        </>
    );
}

export default App;
