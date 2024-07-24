import './userprofile.component.css';
import up1 from '../../assets/images/upvarun.png';
import v1 from '../../assets/images/varun1.png';
import v2 from '../../assets/images/varun2.png';
import v3 from '../../assets/images/varun3.png';
import nopost1 from '../../assets/images/nopost.png';
import { BsGrid3X3 } from 'react-icons/bs';
import { NavBar } from '../navbar/navbar.component';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getlocalstorageitem } from '../../services/storages/localstorage';
import { AuthRoute } from '../../services/authroute';
import { Link } from 'react-router-dom';
import nopic from '../../assets/images/noimg.jpg';
import { Navbar } from 'react-bootstrap';
import { Button, Container, Dropdown, Form, Nav } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';
import { BiSearch } from 'react-icons/bi';
import {  useNavigate } from 'react-router-dom';
import {  useRef } from 'react';
import store from '../../services/redux.store';

export function UserProfile() {
    const [posts, setposts] = useState([]);
    const [nopost, setnopost] = useState(false);
    const [userdata, setuserdata] = useState(null);
    const [profile, setprofile] = useState(null);
    const [profilepic, setprofilepic] = useState([]);
    const [story, setstory] = useState([]);

    useEffect(() => {
        console.log('Fetching userdata from local storage...');
        const data = getlocalstorageitem("userdata");
        console.log('Data from local storage:', data);
        if (data) {
            try {
                const userDataObject = JSON.parse(data);
                console.log('Parsed userdata:', userDataObject);
                setuserdata(userDataObject);
            } catch (error) {
                console.error('Error parsing userdata:', error);
            }
        }
    }, []);

    useEffect(() => {
        console.log('Userdata in state:', userdata);
        if (userdata && userdata.id) {
            const cid = userdata.id;
            console.log('CID:', cid);
            // Ensure that userdata contains the expected properties including id
            axios.get(`http://localhost:4200/getpostdata/${cid}`)
                .then((res) => {
                    setposts(res.data);
                    if (res.data.length > 0) {
                        setnopost(true);
                    } else {
                        setnopost(false);
                    }
                })
                .catch((error) => {
                    console.error('Error fetching post data:', error);
                });
            // Fetch profile picture data
            // axios.get(`http://localhost:4200/getprofilepicdata/${cid}`)
            //     .then((res) => {
            //         setprofilepic(res.data);
            //     })
            //     .catch((error) => {
            //         console.error('Error fetching profile picture data:', error);
            //     });
        }
    }, [userdata]);

    function getUser() {
        const data = localStorage.getItem("userdata");
        if (data) {
            const parsedData = JSON.parse(data);
            if (parsedData.length > 0) {
                setprofile(parsedData); // Set the user data
            } else {
                console.error("User data array is empty");
            }
        } else {
            console.error("User data not found in local storage");
        }
    }

    useEffect(() => {
        getUser();
    }, [])


    useEffect(() => {
        console.log('Userdata in state:', userdata);
        if (userdata && userdata.id) {
            const cid = userdata.id;
            console.log('prfileid:', cid);
            // Ensure that userdata contains the expected properties including id

            // Fetch profile picture data
            axios.get(`http://localhost:4200/getprofilepicdata/${cid}`)
                .then((res) => {
                    setprofilepic(res.data);
                })
                .catch((error) => {
                    console.error('Error fetching profile picture data:', error);
                });
            axios.get(`http://localhost:4200/getstorydata/${cid}`)
                .then((res) => {
                    setstory(res.data);
                })
        }
    }, [userdata]);


    //===  For Navbar  =======
    

    const [end, setEnd] = useState(null);
    const navigate = useNavigate();
    const searchproductsuseref = useRef();

    async function searchforproducts() {
        let farmdata = new FormData();
        farmdata.append('username', searchproductsuseref.current.value);

        const config = {
            headers: { "Content-Type": "multipart/form-data" }
        };
        try {
            const res = await axios.post('http://localhost:4200/searchproducts', farmdata, config);
            store.dispatch({ type: "product", data: res.data });
        } catch (error) {
            console.error('Error searching for products:', error);
        }
    }

    function logout() {
        localStorage.removeItem("userdata");
        setEnd(null);
        navigate("/login");
    }

    const [searchTerm, setSearchTerm] = useState('');
    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (searchTerm) {
            setLoading(true);
            axios.get(`http://localhost:4200/searchprofile?query=${searchTerm}`)
                .then(response => {
                    setProfiles(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching profiles:', error);
                    setLoading(false);
                });
        } else {
            setProfiles([]);
        }
    }, [searchTerm]);

    const [userdatas, setuserdatas] = useState(null);

    useEffect(() => {
        const data = localStorage.getItem("userdata");
        if (data) {
            try {
                const userDataObject = JSON.parse(data);
                setuserdatas(userDataObject);
            } catch (error) {
                console.error('Error parsing userdata:', error);
            }
        }
    }, []);




    return (
        <AuthRoute>
            <div>
                
            <NavBar></NavBar>
            {loading && <div className="loader">Loading...</div>}
            <div className="search-results">
                {profiles && profiles.map((item) => (
                    <div key={item.id} style={{ display: 'flex', padding: 10 }}>
                        <div>
                            <img src={item.profilepic} className='user1' alt="User" />
                        </div>
                        <div className='uname'>
                            <b><Link to={`/profiles/${item.id}`} className='link'>{item.username}</Link></b>
                        </div>
                    </div>
                ))}
            </div>



                {userdata && (
                    <>
                        <div className='upfront'>
                            <div>
                                {
                                    profilepic && profilepic.map((item) =>
                                        <img src={item.profilepic} alt="User profile" className='userprofileimg' />
                                    )
                                }
                                {/* {
                                    profilepic && profilepic.profilepic
                                        ? <img src={profilepic.profilepic} className='userprofileimg' alt="User Profile" />
                                        : <img src={nopic} className='userprofileimg' alt="No Profile" />
                                } */}



                                <button className='addprofile'><Link to='/update' className='link'>+</Link></button>
                            </div>
                            <div className='updetails'>
                                <div>
                                    {
                                        profilepic && profilepic.map((item) =>
                                            <h2 className='pname'>{item.username}</h2>
                                        )
                                    }

                                    {/* Render other profile data as needed */}
                                </div>
                                <span className='upposts'>79 posts</span>
                                <span className='upposts'> 379 followers</span>
                                <span className='upposts'>179 following</span><br></br>
                                {
                                    profilepic && profilepic.map((item) =>
                                        <h6>{item.userprofile}</h6>
                                    )
                                }

                                <p className='paragraph'>Natgeo Nature Photographer of the year 2016 (1st prize) Automobile Enthusiast Sony Alpha Ambassador OPPO </p>
                            </div>
                        </div>
                        <div className='editprofile'>
                            <button className='editbtn'><Link to='/editprofile' className='link'>Edit Profile</Link> </button>
                        </div>
                        <div>

                        </div>
                        <div className='mobilefront'>{
                            profilepic && profilepic.map((item) =>
                                <h2 className='pname'>{item.username}</h2>
                            )
                        }
                            <div style={{ display: 'flex' }}>
                                <div>
                                    {
                                        profilepic && profilepic.map((item) =>
                                            <img src={item.profilepic} alt="User profile" className='userprofileimg' />
                                        )
                                    }
                                    <button className='addprofile'><Link to='/update' className='link'>+</Link></button>
                                </div>
                                <div style={{ display: 'flex', marginLeft: 10, marginTop: 30 }}>
                                    <div >
                                        <span className='upposts'>
                                            <span style={{ marginLeft: 9 }}>79</span><br></br>
                                            <span>posts</span>
                                        </span>
                                    </div>
                                    <div>
                                        <span className='upposts'>
                                            <span style={{ marginLeft: 9 }}>379</span><br></br>
                                            <span>followers</span>
                                        </span>
                                    </div>
                                    <div>
                                        <span className='upposts'>
                                            <span style={{ marginLeft: 9 }}>179</span><br></br>
                                            <span>following</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {
                                profilepic && profilepic.map((item) =>
                                    <h6 style={{ margin: 10 }}>{item.userprofile}</h6>)
                            }

                            <button className='editbtn' ><Link to='/editprofile' className='link'></Link>Edit Profile</button>
                            <p className='paragraph'>Natgeo Nature Photographer of the year 2016 (1st prize) Automobile Enthusiast Sony Alpha Ambassador OPPO </p>
                        </div>
                        <div style={{ display: 'flex' }}>
                            {
                                story && story.map((item) =>

                                    <img src={item.storyimg} className='varun1' />

                                )
                            }
                        </div>


                        {/* <img src={v2} className='varun1' ></img>
                        <img src={v3} className='varun1' /> &nbsp; */}
                        <hr></hr>
                        <BsGrid3X3 className='gridicon' />
                        <span className='up-posts'><b>Posts</b> </span><br></br>
                        <div style={{display:'flex',flexWrap:'wrap'}}>
                            <div className='upost'>
                            {nopost === true &&
                                posts && posts.map((item) =>
                                    <div key={item.id} >
                                        <img src={item.postimg} className='upostimg' />
                                    </div>
                                )
                            }
                            </div>
                            {
                                nopost === false && (
                                    <img src={nopost1} style={{ width: '100%', marginTop: 10 }} />
                                )
                            }
                        </div>
                    </>
                )}
            </div>
        </AuthRoute>
    );
}
