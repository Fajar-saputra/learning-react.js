import Profile from "./Profile";
import ProfileAddress from "./ProfileAddress";
import { ProfileContext } from "./ProfileContext";

export default function ProfileApp() {
    return (
        <>
            <ProfileContext.Provider value="testing">
                <Profile />
                <ProfileAddress />
            </ProfileContext>
        </>
    )
}