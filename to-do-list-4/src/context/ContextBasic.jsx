import { createContext, useContext } from "react";

// create context
const DataUser = createContext();

// provider
function DataUserProvider({ children }) {
    return <DataUser.Provider value="Elvira">{children}</DataUser.Provider>;
}

// children
function Nama() {
    const name = useContext(DataUser)
    return (
        < p > Name : { name} </p>
    )
}

export default function ContextBasic() {
    return (
        <div>
            <h2>Testing dulu gak sih</h2>
            <DataUserProvider>
                <Nama/>
            </DataUserProvider>
        </div>
    )
}
