import Profile from "./Profile";
import ProfileAddress from "./ProfileAddress";
import { ProfileContext } from "./ProfileContext";

export default function ProfileBasic() {
    return (
        <>
            <ProfileContext.Provider value="testing">
                <h2>Basic Context</h2>
                <Profile />
                <ProfileAddress />
            </ProfileContext.Provider>
        </>
    )
}