import { useEffect, useState } from 'react';
import './editprofile.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { NavBar } from '../navbar/navbar.component';
import axios from 'axios';

export function Editprofile() {
    const navigate = useNavigate();
    const userdataString = localStorage.getItem("userdata");

    // Parse the string into an object
    const userdata = userdataString ? JSON.parse(userdataString) : {};

    // Log the retrieved userdata
    console.log('Userdata:', userdata);

    // Access the id property directly
    const userid = userdata.id || null;

    console.log('UserID:', userid);

    const {
        register,
        handleSubmit
    } = useForm();

    //funtion for saving data
    async function saveessentialdata(data) {
        let formdata = new FormData();
        formdata.append("id", userid);
        formdata.append("username", data.username);
        formdata.append("email", data.email);
        formdata.append("userprofile", data.userprofile)

        const config = {
            headers: { "content-type": "multipart/form data" }
        }
        const res = await axios.post("http://localhost:4200/updateuser", formdata, config)
        navigate("/userprofile")

    }



    return (
        <div>
            <NavBar></NavBar>
            <h1>Update user profile</h1>
            <form onSubmit={handleSubmit((data) => { saveessentialdata(data) })}>
                <div style={{ padding: 10 }}>
                    <div className='log-text'>
                        <input type='hidden' className='form-control'
                         {...register("id")} ></input>
                    </div>
                    <div className='log-text'>
                        <input type='text' className='form-control' 
                        {...register("username")} defaultValue={userdata.username}></input>
                    </div>
                    <div className='log-text'>
                        <input type='email' className='form-control'
                        {...register("email")} defaultValue={userdata.email}></input>
                    </div>
                    <div className='log-text'>
                        <input type='text' className='form-control'
                            {...register("userprofile")}defaultValue={userdata.userprofile} />
                    </div>
                </div>

                <input type='submit' value='Update' className='btn btn-primary m-4 p-2 w-30' />
            </form>
        </div>
    );
}
