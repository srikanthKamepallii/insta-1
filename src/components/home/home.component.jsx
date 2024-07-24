import { AuthRoute } from "../../services/authroute";
import { NavBar } from "../navbar/navbar.component";
import { ProfileSlide } from "../profileslide/profileslide.component";
import { UserProfilePost } from "../userprofilepost/userprofilepost.component";

export function Home() {
    return (
        <AuthRoute>
            <div>
                <NavBar></NavBar>
                <ProfileSlide></ProfileSlide>
                <UserProfilePost></UserProfilePost>
            </div>
        </AuthRoute>
    )
}