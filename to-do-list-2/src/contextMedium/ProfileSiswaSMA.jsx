import { createContext, useContext, useState } from "react";

// create context
const ProfileContext = createContext({
    name: " ",
    address: " "
});

// provider
const ProfileProvier = ({children}) => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("")

    return (
        <ProfileContext.Provider value={{ name, setName, address, setAddress }}>
            {children}
        </ProfileContext.Provider>
    )
}

// children
const ProfileName = () => {
    const { name } = useContext(ProfileContext);

    return ( 
        <p>Name : { name }</p>
    )
}

const ProfileAddress = () => {
    const { address } = useContext(ProfileContext);

    return ( 
        <p>Address : { address }</p>
    )
}

// form name
const FormName = () => {
    const {name, setName} = useContext(ProfileContext)

    return (
        <input
            type="text"
            value={name}
            placeholder="Name..."
            onChange={(e) => setName(e.target.value)}
        />
    )
}
// form adddress
const FormAddress = () => {
    const {address, setAddress} = useContext(ProfileContext)

    return (
        <input
            type="text"
            value={address}
            placeholder="Name..."
            onChange={(e) => setAddress(e.target.value)}
        />
    )
}

export default function ProfileSiswaSMA() {
    return (
        <div>
            <h2>Testing dulu gak sih</h2>

            <ProfileProvier>

                <FormName />
                <FormAddress />
                <ProfileName />
                <ProfileAddress />
            </ProfileProvier>
        </div>
    )
}
