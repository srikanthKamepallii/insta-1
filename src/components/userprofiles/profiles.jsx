// import { NavBar } from '../navbar/navbar.component';
// import './profiles.css';
// import nopost1 from '../../assets/images/nopost.png';
// import { Link, useParams } from 'react-router-dom';
// import { BsGrid3X3 } from 'react-icons/bs';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// export function Profiles() {
//     const { id } = useParams();
//     const [userProfile, setUserProfile] = useState({});
//     const [posts, setPosts] = useState([]);
//     const [loadingProfile, setLoadingProfile] = useState(true);
//     const [loadingPosts, setLoadingPosts] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchProfileData = axios.get(`http://localhost:4200/profilesdata/${id}`);
//         const fetchUserPosts = axios.get(`http://localhost:4200/getuserpostdata/${id}`);
//         console.log(fetchProfileData)
//         console.log(fetchUserPosts)

//         Promise.all([fetchProfileData, fetchUserPosts])
//             .then(([profileRes, postsRes]) => {
//                 setUserProfile(profileRes.data);
//                 setPosts(postsRes.data);
//                 setLoadingProfile(false);
//                 setLoadingPosts(false);
//             })
//             .catch((error) => {
//                 console.error('Error fetching data:', error);
//                 console.error('Error response:', error.response);
//                 setError('Failed to load data.');
//                 setLoadingProfile(false);
//                 setLoadingPosts(false);
//             });
//     }, [id]);


//     if (loadingProfile || loadingPosts) return <div>Loading...</div>;
//     if (error) return <div>{error}</div>;

//     return (
//         <div>
//             <NavBar />
//             <div className='upfront'>
//                 <div>
//                     <img src={userProfile.profilepic} alt="User profile" className='userprofileimg' />
//                     <button className='addprofile'>
//                         <Link to='/update' className='link'>+</Link>
//                     </button>
//                 </div>
//                 <div className='updetails'>
//                     <div>
//                         <h2 className='pname'>{userProfile.username}</h2>
//                     </div>
//                     <span className='upposts'>79 posts</span>
//                     <span className='upposts'> 379 followers</span>
//                     <span className='upposts'>179 following</span><br />
//                     <h6>{userProfile.userprofile}</h6>
//                     <p className='paragraph'>Natgeo Nature Photographer of the year 2016 (1st prize) Automobile Enthusiast Sony Alpha Ambassador OPPO </p>
//                 </div>
//             </div>

//             <div className='mobilefront'>
//                 <h2 className='pname'>{userProfile.username}</h2>
//                 <div style={{ display: 'flex' }}>
//                     <div>
//                         <img src={userProfile.profilepic} alt="User profile" className='userprofileimg' />
//                         <button className='addprofile'>
//                             <Link to='/update' className='link'>+</Link>
//                         </button>
//                     </div>
//                     <div style={{ display: 'flex', marginLeft: 10, marginTop: 30 }}>
//                         <div>
//                             <span className='upposts'>
//                                 <span style={{ marginLeft: 9 }}>79</span><br />
//                                 <span>posts</span>
//                             </span>
//                         </div>
//                         <div>
//                             <span className='upposts'>
//                                 <span style={{ marginLeft: 9 }}>379</span><br />
//                                 <span>followers</span>
//                             </span>
//                         </div>
//                         <div>
//                             <span className='upposts'>
//                                 <span style={{ marginLeft: 9 }}>179</span><br />
//                                 <span>following</span>
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//                 <h6 style={{ margin: 10 }}>{userProfile.userprofile}</h6>
//                 <p className='paragraph'>Natgeo Nature Photographer of the year 2016 (1st prize) Automobile Enthusiast Sony Alpha Ambassador OPPO </p>
//             </div>

//             <div style={{ display: 'flex' }}>
//                 <img src={userProfile.storyimg} className='varun1' alt="Story" />
//             </div>

//             <hr />
//             <BsGrid3X3 className='gridicon' />
//             <span className='up-posts'><b>Posts</b> </span><br />
//             <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//                 {posts.length > 0 ? (
//                     posts.map((item, index) => (
//                         <div key={index}>
//                             <img src={item.postimg} className='upostimg' alt="Post" />
//                         </div>
//                     ))
//                 ) : (
//                     <img src={nopost1} style={{ width: '100%', marginTop: 10 }} alt="No Posts" />
//                 )}
//             </div>
//         </div>
//     );
// }



//=======================================================
import { NavBar } from '../navbar/navbar.component';
import './profiles.css';
import nopost1 from '../../assets/images/nopost.png';
import { Link, useParams } from 'react-router-dom';
import { BsGrid3X3 } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import axios from 'axios';

export function Profiles() {
    const { id } = useParams();
    const [userProfile, setUserProfile] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchUserProfile() {
            try {
                const response = await axios.get(`http://localhost:4200/profilesdata/${id}`);
                console.log('Profile data:', response.data); // Log profile data
                if (response && response.data.id) {
                    const cid = response.data.id;
                    console.log('cid', cid);
                    // Fetch user posts using the cid
                    fetchUserPosts(cid);
                }
                setUserProfile(response.data);
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        }

        async function fetchUserPosts(cid) {
            try {
                console.log('Fetching posts for cid:', cid);
                const postdata = await axios.get(`http://localhost:4200/getuserpostdata/${cid}`);
                console.log('Post data:', postdata.data); // Log post data
                setPosts(postdata.data);
            } catch (error) {
                console.error('Error fetching user posts:', error);
            }
        }

        if (id) {
            fetchUserProfile();
        }
    }, [id]);

    return (
        <div>
            <NavBar />
            {userProfile && (
                <>
                    <div className='upfront'>
                        <div>
                            <img src={userProfile.profilepic} alt="User profile" className='userprofileimg' />
                            {/* <button className='addprofile'>
                                <Link to='/update' className='link'>+</Link>
                            </button> */}
                        </div>
                        <div className='updetails'>
                            <div>
                                <h2 className='pname'>{userProfile.username}</h2>
                            </div>
                            <span className='upposts'>70 posts</span>
                            <span className='upposts'> 379 followers</span>
                            <span className='upposts'>179 following</span><br />
                            <h6>{userProfile.userprofile}</h6>
                            <p className='paragraph'>Natgeo Nature Photographer of the year 2016 (1st prize) Automobile Enthusiast Sony Alpha Ambassador OPPO </p>
                        </div>
                    </div>

                    <div className='mobilefront'>
                        <h2 className='pname'>{userProfile.username}</h2>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <img src={userProfile.profilepic} alt="User profile" className='userprofileimg' />
                                <button className='addprofile'>
                                    <Link to='/update' className='link'>+</Link>
                                </button>
                            </div>
                            <div style={{ display: 'flex', marginLeft: 10, marginTop: 30 }}>
                                <div>
                                    <span className='upposts'>
                                        <span style={{ marginLeft: 9 }}>70</span><br />
                                        <span>posts</span>
                                    </span>
                                </div>
                                <div>
                                    <span className='upposts'>
                                        <span style={{ marginLeft: 9 }}>379</span><br />
                                        <span>followers</span>
                                    </span>
                                </div>
                                <div>
                                    <span className='upposts'>
                                        <span style={{ marginLeft: 9 }}>179</span><br />
                                        <span>following</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <h6 style={{ margin: 10 }}>{userProfile.userprofile}</h6>
                        <p className='paragraph'>Natgeo Nature Photographer of the year 2016 (1st prize) Automobile Enthusiast Sony Alpha Ambassador OPPO </p>
                    </div>

                    <div style={{ display: 'flex' }}>
                        {userProfile.storyimg && <img src={userProfile.storyimg} className='varun1' alt="Story" />}
                    </div>

                    <hr />
                    <BsGrid3X3 className='gridicon' />
                    <span className='up-posts'><b>Posts</b> </span><br />
                    <div style={{display:'flex',flexWrap:'wrap'}} >
                        <div className='upost'>
                        {posts && posts.length > 0 ? (
                            posts.map((post, index) => (
                                <div key={index} >
                                    <img src={post.postimg} className='upostimg' alt={`Post ${index + 1}`} />
                                </div>
                            ))
                        ) : (
                            <img src={nopost1} style={{ width: '100%', marginTop: 10 }} alt="No posts" />
                        )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
{/* <div style={{display:'flex',flexWrap:'wrap'}}>
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
 */}


//22=================================
// import { NavBar } from '../navbar/navbar.component';
// import './profiles.css';
// import nopost1 from '../../assets/images/nopost.png';
// import { Link, useParams } from 'react-router-dom';
// import { BsGrid3X3 } from 'react-icons/bs';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// export function Profiles() {
//     const { id } = useParams(); // Destructure id from useParams
//     const [userProfile, setUserProfile] = useState([]);
//     const [posts, setPosts] = useState([]);
//     const [nopost, setNopost] = useState(false);

//     useEffect(() => {
//         async function fetchUserProfile() {
//             try {
//                 const response = await axios.get(`http://localhost:4200/profilesdata/${id}`);
//                 console.log('data',response)
//                 setUserProfile(response.data);
//             } catch (error) {
//                 console.error('Error fetching user profile:', error);
//             }
//         }
        

    
//         if (id) {
//             fetchUserProfile();
//         }
//     }, [id]);


//     useEffect(()=>{
//         async function fetchUserPosts() {
//             try {
//                 const postdata = await axios.get(`http://localhost:4200/getuserpostdata/${id}`);
//                 console.log('postdata',postdata)
//                 setPosts(postdata.data);
//             } catch (error) {
//                 console.error('Error fetching user profile:', error);
//             }
//         }
//         if(id){
//             fetchUserPosts();
//         }

//     },[id]);

//     return (
//         <div>
//             <NavBar />

//                 <>
//                     <div className='upfront'>
//                         <div>
//                             <img src={userProfile.profilepic} alt="User profile" className='userprofileimg' />
//                             <button className='addprofile'>
//                                 <Link to='/update' className='link'>+</Link>
//                             </button>
//                         </div>
//                         <div className='updetails'>
//                             <div>
//                                 <h2 className='pname'>{userProfile.username}</h2>
//                             </div>
//                             <span className='upposts'>70 posts</span>
//                             <span className='upposts'> 379 followers</span>
//                             <span className='upposts'>179 following</span><br />
//                             <h6>{userProfile.userprofile}</h6>
//                             <p className='paragraph'>Natgeo Nature Photographer of the year 2016 (1st prize) Automobile Enthusiast Sony Alpha Ambassador OPPO </p>
//                         </div>
//                     </div>

//                     <div className='mobilefront'>
//                         <h2 className='pname'>{userProfile.username}</h2>
//                         <div style={{ display: 'flex' }}>
//                             <div>
//                                 <img src={userProfile.profilepic} alt="User profile" className='userprofileimg' />
//                                 <button className='addprofile'>
//                                     <Link to='/update' className='link'>+</Link>
//                                 </button>
//                             </div>
//                             <div style={{ display: 'flex', marginLeft: 10, marginTop: 30 }}>
//                                 <div>
//                                     <span className='upposts'>
//                                         <span style={{ marginLeft: 9 }}>70</span><br />
//                                         <span>posts</span>
//                                     </span>
//                                 </div>
//                                 <div>
//                                     <span className='upposts'>
//                                         <span style={{ marginLeft: 9 }}>379</span><br />
//                                         <span>followers</span>
//                                     </span>
//                                 </div>
//                                 <div>
//                                     <span className='upposts'>
//                                         <span style={{ marginLeft: 9 }}>179</span><br />
//                                         <span>following</span>
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                         <h6 style={{ margin: 10 }}>{userProfile.userprofile}</h6>
//                         <p className='paragraph'>Natgeo Nature Photographer of the year 2016 (1st prize) Automobile Enthusiast Sony Alpha Ambassador OPPO </p>
//                     </div>

//                     <div style={{ display: 'flex' }}>
//                         <img src={userProfile.storyimg} className='varun1' alt="Story" />
//                     </div>

//                     <hr />
//                     <BsGrid3X3 className='gridicon' />
//                     <span className='up-posts'><b>Posts</b> </span><br />
//                     <div >
//                     {userProfile.postimg && userProfile.postimg.length > 0 ? (
//             <div className='upost' >
//                 <img src={userProfile.postimg} className='upostimg'  />
//             </div>
//         )
//      : (
//         <img src={nopost1} style={{ width: '100%', marginTop: 10 }} alt="No posts" />
//     )}
// </div>                </>
        
//         </div>
//     );
// }

//===============================================================


// import { NavBar } from '../navbar/navbar.component';
// import './profiles.css';
// import nopost1 from '../../assets/images/nopost.png';
// import { Link, useParams, useNavigate } from 'react-router-dom';
// import { BsGrid3X3 } from 'react-icons/bs';
// import { useEffect, useState, useRef } from 'react';
// import axios from 'axios';
// import { Button, Container, Dropdown, Form, Nav, Navbar } from 'react-bootstrap';
// import logo from '../../assets/images/logo.png';
// import store from '../../services/redux.store';

// export function Profiles() {
//     const { id } = useParams();
//     const [userProfile, setUserProfile] = useState(null);
//     const [nopost, setNopost] = useState(false);
//     const [end, setEnd] = useState(null);
//     const navigate = useNavigate();
//     const searchproductsuseref = useRef();
//     const [searchTerm, setSearchTerm] = useState('');
//     const [profiles, setProfiles] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [userdatas, setuserdatas] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:4200/profilesdata/${id}`);
//                 setUserProfile(response.data);
//             } catch (error) {
//                 console.error("Error fetching profile data:", error);
//             }
//         };

//         fetchData();
//     }, [id]);

//     useEffect(() => {
//         if (userProfile && Array.isArray(userProfile.postimg) && userProfile.postimg.length === 0) {
//             setNopost(true);
//         } else {
//             setNopost(false);
//         }
//     }, [userProfile]);

//     useEffect(() => {
//         if (searchTerm) {
//             setLoading(true);
//             axios.get(`http://localhost:4200/searchprofile?query=${searchTerm}`)
//                 .then(response => {
//                     setProfiles(response.data);
//                     setLoading(false);
//                 })
//                 .catch(error => {
//                     console.error('Error fetching profiles:', error);
//                     setLoading(false);
//                 });
//         } else {
//             setProfiles([]);
//         }
//     }, [searchTerm]);

//     useEffect(() => {
//         const data = localStorage.getItem("userdata");
//         if (data) {
//             try {
//                 const userDataObject = JSON.parse(data);
//                 setuserdatas(userDataObject);
//             } catch (error) {
//                 console.error('Error parsing userdata:', error);
//             }
//         }
//     }, []);

//     async function searchforproducts() {
//         let farmdata = new FormData();
//         farmdata.append('username', searchproductsuseref.current.value);

//         const config = {
//             headers: { "Content-Type": "multipart/form-data" }
//         };
//         try {
//             const res = await axios.post('http://localhost:4200/searchproducts', farmdata, config);
//             store.dispatch({ type: "product", data: res.data });
//         } catch (error) {
//             console.error('Error searching for products:', error);
//         }
//     }

//     function logout() {
//         localStorage.removeItem("userdata");
//         setEnd(null);
//         navigate("/login");
//     }

//     if (!userProfile) {
//         return <p>Loading...</p>;
//     }

//     return (
//         <div>
//             <Navbar expand="lg">
//                 <Container fluid>
//                     <Navbar.Brand href="#">
//                        <Link to='/home'><img src={logo} className='navlogo' alt="Logo" /></Link> 
//                     </Navbar.Brand>
//                     <Navbar.Brand href="#">
//                         <h4 className='navtext'>Insta Share</h4>
//                     </Navbar.Brand>
//                     <Navbar.Toggle className='navmenu' />
//                     <Navbar.Collapse id="navbarScroll">
//                         <Form className="navsearch d-flex">
//                             {/* <Form.Control
//                                 type="search"
//                                 placeholder="Search Caption"
//                                 aria-label="Search"
//                                 onChange={e => setSearchTerm(e.target.value)}
//                                 ref={searchproductsuseref}
//                             />
//                             <Button variant="outline-success" onClick={searchforproducts}><BiSearch /></Button> */}
//                         </Form>
//                         <Nav className="navhome me-auto my-2 my-lg-0" style={{ maxHeight: '70px' }} navbarScroll>
//                             <Nav.Link as={Link} to='/home'>Home</Nav.Link>
//                             <Nav.Link as={Link} to='/userprofile'>Profile</Nav.Link>
//                             <Nav.Link>
//                                 {/* <Dropdown>
//                                     <Dropdown.Toggle>Upload</Dropdown.Toggle>
//                                     <Dropdown.Menu>
//                                         <Dropdown.Item as={Link} to='/profilepic'>Upload ProfilePic</Dropdown.Item>
//                                         <Dropdown.Item as={Link} to='/addstory'>Upload Story</Dropdown.Item>
//                                         <Dropdown.Item as={Link} to='/posts'>Upload Post</Dropdown.Item>
//                                     </Dropdown.Menu>
//                                 </Dropdown> */}
//                             </Nav.Link>
//                             <Nav.Link>
//                                 <Button onClick={logout}>Logout</Button>
//                             </Nav.Link>
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
            
//             <div className='upfront'>
//                 <div>
//                     <img src={userProfile.profilepic} alt="User profile" className='userprofileimg' />
//                     <button className='addprofile'>
//                         <Link to='/update' className='link'>+</Link>
//                     </button>
//                 </div>
//                 <div className='updetails'>
//                     <div>
//                         <h2 className='pname'>{userProfile.username}</h2>
//                     </div>
//                     <span className='upposts'>79 posts</span>
//                     <span className='upposts'> 379 followers</span>
//                     <span className='upposts'>179 following</span><br />
//                     <h6>{userProfile.userprofile}</h6>
//                     <p className='paragraph'>Natgeo Nature Photographer of the year 2016 (1st prize) Automobile Enthusiast Sony Alpha Ambassador OPPO </p>
//                 </div>
//             </div>

//             <div className='mobilefront'>
//                 <h2 className='pname'>{userProfile.username}</h2>
//                 <div style={{ display: 'flex' }}>
//                     <div>
//                         <img src={userProfile.profilepic} alt="User profile" className='userprofileimg' />
//                         <button className='addprofile'>
//                             <Link to='/update' className='link'>+</Link>
//                         </button>
//                     </div>
//                     <div style={{ display: 'flex', marginLeft: 10, marginTop: 30 }}>
//                         <div>
//                             <span className='upposts'>
//                                 <span style={{ marginLeft: 9 }}>79</span><br />
//                                 <span>posts</span>
//                             </span>
//                         </div>
//                         <div>
//                             <span className='upposts'>
//                                 <span style={{ marginLeft: 9 }}>379</span><br />
//                                 <span>followers</span>
//                             </span>
//                         </div>
//                         <div>
//                             <span className='upposts'>
//                                 <span style={{ marginLeft: 9 }}>179</span><br />
//                                 <span>following</span>
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//                 <h6 style={{ margin: 10 }}>{userProfile.userprofile}</h6>
//                 <p className='paragraph'>Natgeo Nature Photographer of the year 2016 (1st prize) Automobile Enthusiast Sony Alpha Ambassador OPPO </p>
//             </div>

//             <div style={{ display: 'flex' }}>
//                 <img src={userProfile.storyimg} className='varun1' alt="Story" />
//             </div>

//             <hr />
//             <BsGrid3X3 className='gridicon' />
//             <span className='up-posts'><b>Posts</b> </span><br />
//             <div className='upost'>
//                 {nopost ? (
//                     <img src={nopost1} style={{ width: '100%', marginTop: 10 }} alt="No posts" />
//                 ) : (
//                     <div>
//                         <img src={userProfile.postimg} className='upostimg' />
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }
