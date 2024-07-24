import { useState } from 'react';
import './addpost.component.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { NavBar } from '../navbar/navbar.component';
import { useNavigate } from 'react-router-dom';

export function AddPost() {
    const navigate = useNavigate();
    const userdataString = localStorage.getItem("userdata");

    // Parse the string into an object
    const userdata = userdataString ? JSON.parse(userdataString) : {};

    // Log the retrieved userdata
    console.log('Userdata:', userdata);

    // Access the id property directly
    const userid = userdata.id || null;

    console.log('UserID:', userid);



    const [eproductimage, seteproductimage] = useState();
    const {
        register,
        handleSubmit
    } = useForm();

    //funtion for saving data
    async function saveessentialdata() {
        let formdata = new FormData();
        formdata.append("cid", userid);
        formdata.append("postimg", eproductimage);

        const config = {
            headers: { "content-type": "multipart/form data" }
        }
        const res = await axios.post("http://localhost:4200/savepostdata", formdata, config)
        navigate("/userprofile")
       
    }


    //function for save image
    function loadeimage(event) {
        var reader = new FileReader();
        reader.onload = function () {
            seteproductimage(reader.result)
        }
        reader.readAsDataURL(event.target.files[0]);
    }
    return (
        <div>
            <NavBar></NavBar>
            <h1>Add Post</h1>
            <form onSubmit={handleSubmit((data) => { saveessentialdata(data) })}>
                <div style={{padding:10}}>
                    <input type='file' placeholder='productimage' className='form-control'
                        {...register("postimg")} onChange={(event) => { loadeimage(event) }} />
                </div>

                <input type='submit' value='Add Post' className='btn btn-primary m-4 p-2 w-30' />
            </form>
        </div>
    )
}