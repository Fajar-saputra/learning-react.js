import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

export default function Profile() {
    const profile = useContext(ProfileContext);
    return (
        <>
            <p>Address : {profile}</p>
        </>
    );
}
