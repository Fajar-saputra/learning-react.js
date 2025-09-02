import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

export default function Profile() {
    const profile = useContext(ProfileContext);
    return (
        <>
            <h2>Address Profile</h2>
            <p>Address : {profile}</p>
        </>
    );
}
