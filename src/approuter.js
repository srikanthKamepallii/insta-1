import { Route, Routes } from "react-router-dom";
import { Login } from "./components/login/login.component";
import { Register } from "./components/register/register.component";
import { Home } from "./components/home/home.component";
import { UserProfile } from "./components/userprofile/userprofile.component";
import { AddPost } from "./components/addpost/addpost.component";
import { AddProfile } from "./components/addprofile/addprofile";
import { NoPage } from "./components/nopage/nopage";
import { AddStory } from "./components/addstory/addstory";
import { UpdateProfilepic } from "./components/updateprofileimg/updatepp";
import { Profiles } from "./components/userprofiles/profiles";
import { Editprofile } from "./components/editprofile/editprofile";

export function AppRouter(){
return(
    <div>
        <Routes>
            <Route path="/" element = {<Login></Login>}></Route>
            <Route path="/login" element = {<Login></Login>}></Route>
            <Route path="/register" element = {<Register></Register>}></Route>
            <Route path="/home" element = {<Home></Home>}></Route>
            <Route path="/userprofile" element = {<UserProfile></UserProfile>}></Route>
            <Route path="/posts" element = {<AddPost></AddPost>}></Route>
            <Route path="/profilepic" element = {<AddProfile></AddProfile>}></Route>
            <Route path="/addstory" element = {<AddStory></AddStory>}></Route>
            <Route path="/update" element = {<UpdateProfilepic></UpdateProfilepic>}></Route>
            <Route path="/profiles/:id" element = {<Profiles></Profiles>}></Route>
            <Route path="/editprofile" element = {<Editprofile></Editprofile>}></Route>
            <Route path="*" element = {<NoPage></NoPage>}></Route>
        </Routes>
    </div>
)
}