import "./App.css";
import ProductTable from "./components/FilterableProductTable";
import Basic from "./contextBasic/Basic";
import ProfileBasic from "./contextBasic/ProfileBasic";
import ProfileMedium from "./contextMedium/ProfileMedium";

import Notes from "./Notes";

function App() {
    return (
        <>
            {/* <ProductTable /> */}
            <Notes />
            <Basic />
            <ProfileBasic />
            <ProfileMedium />
        </>
    );
}

export default App;
