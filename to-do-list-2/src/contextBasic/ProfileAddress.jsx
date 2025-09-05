import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

export default function ProfileAddress() {
    const profile = useContext(ProfileContext);
    return (
        <>
            <p>Alamat { profile}</p>
        </>
    )
}