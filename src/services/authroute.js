import { Navigate } from "react-router-dom";
import { getlocalstorageitem } from "./storages/localstorage";



export function AuthRoute(props){
    let uservaild = getlocalstorageitem("userdata")
    if(uservaild){
        return props.children
    }
    else{
        return <Navigate to='/login'></Navigate>
    }

}
