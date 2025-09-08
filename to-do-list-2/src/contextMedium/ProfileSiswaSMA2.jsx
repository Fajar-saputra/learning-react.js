import { createContext, useContext, useState } from "react";

// create context
const ProfileContext = createContext({
    name: " ",
    address: " ",
});

// provider
const ProfileProvier = ({ children }) => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

    return <ProfileContext.Provider value={{ name, setName, address, setAddress }}>{children}</ProfileContext.Provider>;
};

// children
const ProfileName = () => {
    const { name } = useContext(ProfileContext);

    return <p>Name : {name}</p>;
};

const ProfileAddress = () => {
    const { address } = useContext(ProfileContext);

    return <p>Address : {address}</p>;
};

// form name
const FormProfile = () => {
    const { name, setName, address, setAddress } = useContext(ProfileContext);

    return (
        <div>
            <input type="text" value={name} placeholder="Name..." onChange={(e) => setName(e.target.value)} />
            <input type="text" value={address} placeholder="Name..." onChange={(e) => setAddress(e.target.value)} />
        </div>
    );
};

export default function ProfileSiswaSMA2() {
    return (
        <div>
            <h2>Testing dulu gak sih</h2>

            <ProfileProvier>
                <FormProfile />
                <ProfileName />
                <ProfileAddress />
            </ProfileProvier>
        </div>
    );
}
