// import { Button, Container, Dropdown, Form, Nav, Navbar } from 'react-bootstrap';
// import './navbar.component.css';
// import logo from '../../assets/images/logo.png';
// import { BiSearch } from 'react-icons/bi';
// import { Link, useNavigate } from 'react-router-dom';
// import { useEffect, useRef, useState } from 'react';
// import store from '../../services/redux.store';
// import axios from 'axios';
// import u1 from '../../assets/images/u1.jpg';


// //from userprofile
// import up1 from '../../assets/images/upvarun.png';
// import v1 from '../../assets/images/varun1.png';
// import v2 from '../../assets/images/varun2.png';
// import v3 from '../../assets/images/varun3.png';
// import nopost1 from '../../assets/images/nopost.png';
// import { BsGrid3X3 } from 'react-icons/bs';
// // import { NavBar } from '../navbar/navbar.component';
// // import { useEffect, useState } from 'react';
// // import axios from 'axios';
// import { getlocalstorageitem } from '../../services/storages/localstorage';
// import { AuthRoute } from '../../services/authroute';

// export function NavBar() {
//     const [end, setEnd] = useState(null);
//     const navigate = useNavigate();
//     const searchproductsuseref = useRef();

//     //function for search for products
//     async function searchforproducts() {
//         let farmdata = new FormData();
//         farmdata.append('username', searchproductsuseref.current.value);

//         let config = {
//             headers: { "content-type": "multipart / form data" }
//         }
//         const res = await axios.post('http://localhost:4200/searchproducts', farmdata, config)
//         console.log(res)
//         // onSearch(searchproductsuseref.current.value);
//         store.dispatch({ type: "product", data: res.data })

//     }

//     function logout() {
//         localStorage.removeItem("userdata"); // Remove the user data from local storage
//         setEnd(null); // Clear the profile state
//         navigate("/login"); // Redirect to the login page, assuming you have a route set up for login
//     }


//     //search for profiles
//     const [searchTerm, setSearchTerm] = useState('');
//     const [profiles, setProfiles] = useState([]);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         if (searchTerm) {
//             setLoading(true);
//             axios.get(`http://localhost:4200/searchprofile?query=${searchTerm}`)
//                 .then(response => {
//                     setProfiles(response.data);
//                     setLoading(false);
//                 })
//                 .catch(error => {
//                     console.error('There was an error fetching the profiles!', error);
//                     setLoading(false);
//                 });
//         } else {
//             setProfiles([]);
//         }
//     }, [searchTerm]);

//     //from userprofile 

//     const [posts, setposts] = useState([]);
//     const [nopost, setnopost] = useState(false);
//     const [userdata, setuserdata] = useState(null);
//     const [profile, setprofile] = useState(null);

//     useEffect(() => {
//         console.log('Fetching userdata from local storage...');
//         const data = getlocalstorageitem("userdata");
//         console.log('Data from local storage:', data);
//         if (data) {
//             try {
//                 const userDataObject = JSON.parse(data);
//                 console.log('Parsed userdata:', userDataObject);
//                 setuserdata(userDataObject);
//             } catch (error) {
//                 console.error('Error parsing userdata:', error);
//             }
//         }
//     }, []);

//     // useEffect(() => {
//     //     console.log('Userdata in state:', userdata);
//     //     if (userdata && userdata.id) {
//     //         const cid = userdata.id;
//     //         console.log('CID:', cid);
//     //         // Ensure that userdata contains the expected properties including id
//     //         axios.get(`http://localhost:4200/getpostdata/${cid}`)
//     //             .then((res) => {
//     //                 setposts(res.data);
//     //                 if (res.data.length > 0) {
//     //                     setnopost(true);
//     //                 } else {
//     //                     setnopost(false);
//     //                 }
//     //             })
//     //             .catch((error) => {
//     //                 console.error('Error fetching post data:', error);
//     //             });
//     //     }
//     // }, [userdata]);

//     function getUser() {
//         const data = localStorage.getItem("userdata");
//         if (data) {
//             const parsedData = JSON.parse(data);
//             if (parsedData.length > 0) {
//                 setprofile(parsedData); // Set the user data
//             } else {
//                 console.error("User data array is empty");
//             }
//         } else {
//             console.error("User data not found in local storage");
//         }
//     }

//     useEffect(() => {
//         getUser();
//     }, [])



//     return (
//         <div>
//             <Navbar expand="lg">
//                 <Container fluid>
//                     <Navbar.Brand href="#">
//                         <img src={logo} className='navlogo' alt="Logo" />
//                     </Navbar.Brand>
//                     <Navbar.Brand href="#">
//                         <h4 className='navtext'>Insta Share</h4>
//                     </Navbar.Brand>
//                     <Navbar.Toggle className='navmenu' />
//                     <Navbar.Collapse id="navbarScroll">
//                         <Form className="navsearch d-flex">
//                             <Form.Control
//                                 type="search"
//                                 placeholder="Search Caption"
//                                 aria-label="Search"
//                                 onChange={e => setSearchTerm(e.target.value)}
//                                 ref={searchproductsuseref}
//                             />
//                             <Button variant="outline-success" onClick={() => { searchforproducts() }}><BiSearch /></Button>
//                         </Form>
//                         <Nav
//                             className="navhome me-auto my-2 my-lg-0"
//                             style={{ maxHeight: '70px' }}
//                             navbarScroll
//                         >
//                             <Nav.Link as={Link} to='/home'>Home</Nav.Link>
//                             <Nav.Link as={Link} to='/userprofile'>Profile</Nav.Link>
//                             <Nav.Link >
//                                 <Dropdown >
//                                     <Dropdown.Toggle  >
//                                         UpLoad
//                                     </Dropdown.Toggle>

//                                     <Dropdown.Menu>
//                                         <Dropdown.Item as={Link} to='/profilepic'>UpLoad ProfilePic</Dropdown.Item>
//                                         <Dropdown.Item as={Link} to='/addstory'>UpLoad Story</Dropdown.Item>
//                                         <Dropdown.Item as={Link} to='/posts' >UpLoad Post</Dropdown.Item>
//                                     </Dropdown.Menu>
//                                 </Dropdown>
//                             </Nav.Link>
//                             <Nav.Link>
//                                 <Button onClick={logout}>Logout</Button>
//                             </Nav.Link>

//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//             {/* <div className='profilesearch'>
//                 <input type='text' placeholder='search...' value={searchTerm}
//                     onChange={e => setSearchTerm(e.target.value)}
//                     className='form-control' />
//             </div> */}
//             {loading && <div className="loader">Loading...</div>}
//             <div className="search-results ">

//                 {
//                     profiles && profiles.map((item) =>
//                         <div style={{ display: 'flex', padding: 10 }}>

//                             <div>
//                                 <img src={item.profilepic} className='user1' alt="User" />
//                             </div>
//                             <div className='uname'><b><Link to={`/profiles/${item.id}`} className='link'>{item.username}</Link> </b></div>
//                         </div>
//                     )
//                 }


//             </div>
//         </div>
//     );
// }


//=======================================================================================



// import { Button, Container, Dropdown, Form, Nav, Navbar } from 'react-bootstrap';
// import './navbar.component.css';
// import logo from '../../assets/images/logo.png';
// import { BiSearch } from 'react-icons/bi';
// import { Link, useNavigate } from 'react-router-dom';
// import { useEffect, useRef, useState } from 'react';
// import store from '../../services/redux.store';
// import axios from 'axios';

// export function NavBar() {
//     const [end, setEnd] = useState(null);
//     const navigate = useNavigate();
//     const searchproductsuseref = useRef();

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

//     const [searchTerm, setSearchTerm] = useState('');
//     const [profiles, setProfiles] = useState([]);
//     const [loading, setLoading] = useState(false);

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

//     const [userdata, setuserdata] = useState(null);

//     useEffect(() => {
//         const data = localStorage.getItem("userdata");
//         if (data) {
//             try {
//                 const userDataObject = JSON.parse(data);
//                 setuserdata(userDataObject);
//             } catch (error) {
//                 console.error('Error parsing userdata:', error);
//             }
//         }
//     }, []);

//     return (
//         <div>
//             <Navbar expand="lg">
//                 <Container fluid>
//                     <Navbar.Brand href="#">
//                         <img src={logo} className='navlogo' alt="Logo" />
//                     </Navbar.Brand>
//                     <Navbar.Brand href="#">
//                         <h4 className='navtext'>Insta Share</h4>
//                     </Navbar.Brand>
//                     <Navbar.Toggle className='navmenu' />
//                     <Navbar.Collapse id="navbarScroll">
//                         <Form className="navsearch d-flex">
//                             <Form.Control
//                                 type="search"
//                                 placeholder="Search Caption"
//                                 aria-label="Search"
//                                 onChange={e => setSearchTerm(e.target.value)}
//                                 ref={searchproductsuseref}
//                             />
//                             <Button variant="outline-success" onClick={searchforproducts}><BiSearch /></Button>
//                         </Form>
//                         <Nav className="navhome me-auto my-2 my-lg-0" style={{ maxHeight: '70px' }} navbarScroll>
//                             <Nav.Link as={Link} to='/home'>Home</Nav.Link>
//                             <Nav.Link as={Link} to='/userprofile'>Profile</Nav.Link>
//                             <Nav.Link>
//                                 <Dropdown>
//                                     <Dropdown.Toggle>Upload</Dropdown.Toggle>
//                                     <Dropdown.Menu>
//                                         <Dropdown.Item as={Link} to='/profilepic'>Upload ProfilePic</Dropdown.Item>
//                                         <Dropdown.Item as={Link} to='/addstory'>Upload Story</Dropdown.Item>
//                                         <Dropdown.Item as={Link} to='/posts'>Upload Post</Dropdown.Item>
//                                     </Dropdown.Menu>
//                                 </Dropdown>
//                             </Nav.Link>
//                             <Nav.Link>
//                                 <Button onClick={logout}>Logout</Button>
//                             </Nav.Link>
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//             {loading && <div className="loader">Loading...</div>}
//             <div className="search-results">
//                 {profiles && profiles.map((item) => (
//                     <div key={item.id} style={{ display: 'flex', padding: 10 }}>
//                         <div>
//                             <img src={item.profilepic} className='user1' alt="User" />
//                         </div>
//                         <div className='uname'>
//                             <b><Link to={`/profiles/${item.id}`} className='link'>{item.username}</Link></b>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }



import { Button, Container, Dropdown, Form, Nav, Navbar } from 'react-bootstrap';
import './navbar.component.css';
import logo from '../../assets/images/logo.png';
import nosearch from '../../assets/images/no serach.png';
import { BiSearch } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import store from '../../services/redux.store';
import axios from 'axios';

export function NavBar() {
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
    const [noResults, setNoResults] = useState(false); // State to track no results

    useEffect(() => {
        if (searchTerm) {
            setLoading(true);
            axios.get(`http://localhost:4200/searchprofile?query=${searchTerm}`)
                .then(response => {
                    setProfiles(response.data);
                    setNoResults(response.data.length === 0); // Set noResults based on response
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching profiles:', error);
                    setLoading(false);
                });
        } else {
            setProfiles([]);
            setNoResults(false);
        }
    }, [searchTerm]);

    const [userdata, setuserdata] = useState(null);

    useEffect(() => {
        const data = localStorage.getItem("userdata");
        if (data) {
            try {
                const userDataObject = JSON.parse(data);
                setuserdata(userDataObject);
            } catch (error) {
                console.error('Error parsing userdata:', error);
            }
        }
    }, []);

    return (
        <div>
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">
                       <Link to='/home'><img src={logo} className='navlogo' alt="Logo" /></Link> 
                    </Navbar.Brand>
                    <Navbar.Brand href="#">
                        <h4 className='navtext'>Insta Share</h4>
                    </Navbar.Brand>
                    <Navbar.Toggle className='navmenu' />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="navsearch d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search Caption"
                                aria-label="Search"
                                onChange={e => setSearchTerm(e.target.value)}
                                ref={searchproductsuseref}
                                style={{width:'300px'}}
                            />
                            <Button variant="outline-success" onClick={searchforproducts}><BiSearch /></Button>
                        </Form>
                        <Nav className="navhome me-auto my-2 my-lg-0" style={{ maxHeight: '70px' }} navbarScroll>
                            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/userprofile'>Profile</Nav.Link>
                            <Nav.Link>
                                <Dropdown>
                                    <Dropdown.Toggle>Upload</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item as={Link} to='/profilepic'>Upload ProfilePic</Dropdown.Item>
                                        <Dropdown.Item as={Link} to='/addstory'>Upload Story</Dropdown.Item>
                                        <Dropdown.Item as={Link} to='/posts'>Upload Post</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav.Link>
                            <Nav.Link>
                                <Button onClick={logout}>Logout</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {loading && <div className="loader">Loading...</div>}
            <div className="search-results">
                {profiles && profiles.length > 0 ? (
                    profiles.map((item) => (
                        <div key={item.cid} style={{ display: 'flex', padding: 10 }}>
                            <div>
                                <img src={item.profilepic} className='user1' alt="User" />
                            </div>
                            <div className='uname'>
                                <b><Link to={`/profiles/${item.cid}`} className='link'>{item.username}</Link></b>
                            </div>
                        </div>
                    ))
                ) : (
                    noResults && (
                        <div className="no-results" >
                            <img src={nosearch}  alt="No results found" />
                        </div>
                    )
                )}
            </div>
        </div>
    );
}
