import "./App.css";
import ProductTable from "./products/FilterableProductTable";
import Basic from "./contextBasic/Basic";
import ProfileBasic from "./contextBasic/ProfileBasic";
import ProfileMedium from "./contextMedium/ProfileMedium";
import ProfileSiswaSMA from "./contextMedium/ProfileSiswaSMA";

import Notes from "./notes/Notes";
import ListPahlawan from "./pahlawanNasional/ListPahlawan";
import NoteAppReducer from "./reducerNotes/NoteAppReducer";
import NoteForm from "./reducerNotes/NoteForm";
import TodoApp from "./TodoApp";
import FilterableProductTable from "./products/FilterableProductTable";
import ControlledComponent from "./formhandling/ControlledComponent";
import ControlledUncomponent from "./formhandling/ControlledUncomponent";
import FormComponent from "./formhandling/FormComponent";

function App() {

    const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

    return (
        <>
            {/* <ProductTable /> */}
            {/* <Notes /> */}
            {/* <ReducerNotes /> */}
            {/* <Basic /> */}
            {/* <ProfileBasic /> */}
            {/* <ProfileMedium /> */}
            {/* <ProfileSiswaSMA /> */}
            {/* <NoteAppReducer /> */}
            {/* <TodoApp/> */}
            {/* <NoteAppReducer /> */}
            {/* <ListPahlawan /> */}
            {/* <FilterableProductTable products={PRODUCTS} /> */}
            {/* <ControlledComponent /> */}
            {/* <ControlledUncomponent /> */}
            <FormComponent />
        </>
    );
}

export default App;
