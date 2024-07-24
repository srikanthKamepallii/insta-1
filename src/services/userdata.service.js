import axios from "axios";

const userdaraurl = "http://localhost:4200/getuserdata";

export function getuserdata(){
    return axios.get(userdaraurl)
};