// import './userprofilepost.component.css';
// import u1 from '../../assets/images/ueer1.png';
// import { BiHeart } from 'react-icons/bi';
// import { IoChatbubbleOutline, IoShareSocialSharp } from 'react-icons/io5';
// import { useEffect, useState } from 'react';
// import { AiFillHeart } from 'react-icons/ai';
// import axios from 'axios';
// import { getlocalstorageitem } from '../../services/storages/localstorage';
// import { Card, CardBody, CardFooter, CardHeader } from 'react-bootstrap';
// import store from '../../services/redux.store';

// export function UserProfilePost() {
//     const [likedPosts, setLikedPosts] = useState({});
//     const [likeCounts, setLikeCounts] = useState({});
//     const [rempost, setRemPost] = useState([]);
//     const [userdata, setUserData] = useState(null);

//     useEffect(() => {
//         const data = getlocalstorageitem("userdata");
//         if (data) {
//             try {
//                 const userDataObject = JSON.parse(data);
//                 setUserData(userDataObject);
//             } catch (error) {
//                 console.error('Error parsing userdata:', error);
//             }
//         }
//     }, []);

//     useEffect(() => {
//         if (userdata && userdata.id) {
//             axios.get(`http://localhost:4200/getallposts`)
//                 .then((res) => {
//                     const posts = res.data;
//                     setRemPost(posts);

//                     // Initialize like states for each post
//                     const initialLikedPosts = {};
//                     const initialLikeCounts = {};
//                     posts.forEach(post => {
//                         initialLikedPosts[post.id] = false; // Assume posts are not liked initially
//                         initialLikeCounts[post.id] = post.likeCount || 0; // Use likeCount from the post data
//                     });

//                     setLikedPosts(initialLikedPosts);
//                     setLikeCounts(initialLikeCounts);
//                 })
//                 .catch((error) => {
//                     console.error('Error fetching post data:', error);
//                 });
//         }
//     }, [userdata]);
//     useEffect(()=>{
//         store.subscribe(()=>{
//             setRemPost(store.getState?.products)
//         })
//     },[])

//     const handleLikeClick = (postId) => {
//         setLikedPosts(prevLikedPosts => ({
//             ...prevLikedPosts,
//             [postId]: !prevLikedPosts[postId],
//         }));

//         setLikeCounts(prevLikeCounts => ({
//             ...prevLikeCounts,
//             [postId]: likedPosts[postId] ? prevLikeCounts[postId] - 1 : prevLikeCounts[postId] + 1,
//         }));
//     };

//     return (
//         <div>
//             {rempost && rempost.map((item) => (
//                 <div key={item.id}>
//                     <Card className='uerpostpic'>
//                         <CardHeader>
//                             <div style={{ display: 'flex', padding: 10 }}>
//                                 <div>
//                                     <img src={u1} className='user1' alt="User" />
//                                 </div>
//                                 <div className='uname'><b>{item.username}</b></div>
//                             </div>
//                         </CardHeader>
//                         <CardBody>
//                             <img src={item.postimg} className='post1' alt="Post" />
//                         </CardBody>
//                         <CardFooter>
//                             <div style={{ display: 'flex' }}>
//                                 <div onClick={() => handleLikeClick(item.id)}>
//                                     {likedPosts[item.id] ? <AiFillHeart className="red" /> : <BiHeart className='hbtn-heart' />}
//                                 </div>
//                                 <div><IoChatbubbleOutline className='hbtn' /></div>
//                                 <div><IoShareSocialSharp className='hbtn' /></div>
//                             </div>

//                             <span className='ulikes'>{likeCounts[item.id]} likes</span><br />
//                             <span className='ulikes'>Enjoying the nature with the beautiful sunrise</span><br />
//                             <span className='ulikes'>Bessie Cooper so nice we are bringing our memories back</span><br />
//                             <span className='ulikes'>Esther Howard my favourite spot</span><br />
//                             <span className='ulikes'>1 Hour Ago</span>
//                         </CardFooter>
//                     </Card>
//                 </div>
//             ))}
//         </div>
//     );
// }


//===========================================================================================



// import './userprofilepost.component.css';
// import u1 from '../../assets/images/ueer1.png';
// import { BiHeart } from 'react-icons/bi';
// import { IoChatbubbleOutline, IoShareSocialSharp } from 'react-icons/io5';
// import { useEffect, useState } from 'react';
// import { AiFillHeart } from 'react-icons/ai';
// import axios from 'axios';
// import { getlocalstorageitem } from '../../services/storages/localstorage';
// import { Card, CardBody, CardFooter, CardHeader } from 'react-bootstrap';
// import store from '../../services/redux.store';
// import { Link } from 'react-router-dom';

// export function UserProfilePost() {
//     const [allposts, setallposts] = useState([]);
//     const [likecount, setlikecount] = useState([]);
//     const [liked, setliked] = useState([]);

//     useEffect(() => {
//         axios.get("http://localhost:4200/getallposts").then((res) => {
//             setallposts(res.data);
//             setlikecount(res.data.map(() => 0)); // Initialize like counts
//             setliked(res.data.map(() => false)); // Initialize liked state
//         });

//         const unsubscribe = store.subscribe(() => {
//             const posts = store.getState().products;
//             setallposts(posts);
//             setlikecount(posts.map(() => 0)); // Initialize like counts
//             setliked(posts.map(() => false)); // Initialize liked state
//         });

//         return () => {
//             unsubscribe();
//         };
//     }, []);

//     const handlelikeclick = (index) => {
//         const updatedLiked = [...liked];
//         updatedLiked[index] = !updatedLiked[index];
//         setliked(updatedLiked);

//         const updatedLikeCount = [...likecount];
//         updatedLikeCount[index] = updatedLiked[index] ? updatedLikeCount[index] + 1 : updatedLikeCount[index] - 1;
//         setlikecount(updatedLikeCount);
//     };

//     return (
//         <div>
//             {allposts && allposts.map((item, index) => (
//                 <div className='userpostpic'>
//                     <Card  key={index}>
//                         <CardHeader>
//                             <div style={{ display: 'flex', padding: 10 }}>
//                                 <div>
//                                     <img src={u1} className='user1' alt="User" />
//                                 </div>
//                                 <div className='uname'><b>{item.username}</b></div>
//                             </div>
//                         </CardHeader>
//                         <CardBody>
//                             <img src={item.postimg} className='post1' alt="Post" />
//                         </CardBody>
//                         <CardFooter>
//                             <div style={{ display: 'flex' }}>
//                                 <div>
//                                     {liked[index] ? (
//                                         <AiFillHeart className='red' onClick={() => handlelikeclick(index)} />
//                                     ) : (
//                                         <BiHeart className='hbtn-heart' onClick={() => handlelikeclick(index)} />
//                                     )}
//                                 </div>
//                                 <div><IoChatbubbleOutline className='hbtn' /></div>
//                                 <div><IoShareSocialSharp className='hbtn' /></div>
//                             </div>
//                             <span className='ulikes'>120{likecount[index]} likes</span><br />
//                             <span className='ulikes'>Enjoying the nature with the beautiful sunrise</span><br />
//                             <span className='ulikes'>Bessie Cooper so nice we are bringing our memories back</span><br />
//                             <span className='ulikes'>Esther Howard my favourite spot</span><br />
//                             <span className='ulikes'>1 Hour Ago</span>
//                         </CardFooter>
//                     </Card>
//                 </div>
//             ))}
//         </div>
//     );
// }


//========================================================

import React, { useEffect, useState } from 'react';
import './userprofilepost.component.css';
import u1 from '../../assets/images/ueer1.png';
import { BiHeart } from 'react-icons/bi';
import { IoChatbubbleOutline, IoShareSocialSharp } from 'react-icons/io5';
import { AiFillHeart } from 'react-icons/ai';
import axios from 'axios';
import { Card, CardBody, CardFooter, CardHeader } from 'react-bootstrap';
import store from '../../services/redux.store';
import noserach from '../../assets/images/no serach.png';
import { Link } from 'react-router-dom';

export function UserProfilePost() {
    const [allposts, setallposts] = useState([]);
    const [likecount, setlikecount] = useState([]);
    const [liked, setliked] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [homepp, sethomepp] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4200/getallposts").then((res) => {
            const posts = res.data;
            setallposts(posts);
            setlikecount(posts.map(post => post.likes || 0)); // Initialize like counts
            setliked(posts.map(() => false)); // Initialize liked state
        });

        const unsubscribe = store.subscribe(() => {
            const state = store.getState();
            const posts = state.products;
            setallposts(posts);
            setSearchTerm(state.searchTerm || '');
            setlikecount(posts.map(post => post.likes || 0)); // Initialize like counts
            setliked(posts.map(() => false)); // Initialize liked state
        });

        axios.get('http://localhost:4200/gethomeprofilepic')
            .then((res) => {
                sethomepp(res.data);
            });

        return () => {
            unsubscribe();
        };
    }, []);

    const handlelikeclick = (index) => {
        const updatedLiked = [...liked];
        updatedLiked[index] = !updatedLiked[index];
        setliked(updatedLiked);

        const updatedLikeCount = [...likecount];
        updatedLikeCount[index] = updatedLiked[index] ? updatedLikeCount[index] + 1 : updatedLikeCount[index] - 1;
        setlikecount(updatedLikeCount);
    };

    const filteredPosts = allposts.filter(post => post.username && post.username.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div>
            {filteredPosts.length > 0 ? (
                filteredPosts.map((item, index) => {
                    const profilePic = homepp.find(pp => pp.username === item.username)?.profilepic || u1;
                    return (
                        <Card className='userpostpic' key={index}>
                            <CardHeader>
                                <div style={{ display: 'flex', padding: 10 }}>
                                    <div>
                                        <img src={profilePic} className='user1' alt="User" />
                                    </div>
                                    <div className='uname'>
                                        <b>
                                            <Link to={`/profiles/${item.cid}`} className='link'>{item.username}</Link>
                                        </b>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardBody>
                                <img src={item.postimg || u1} className='post1' alt="Post" />
                            </CardBody>
                            <CardFooter>
                                <div style={{ display: 'flex' }}>
                                    <div>
                                        {liked[index] ? (
                                            <AiFillHeart className='red' onClick={() => handlelikeclick(index)} />
                                        ) : (
                                            <BiHeart className='hbtn-heart' onClick={() => handlelikeclick(index)} />
                                        )}
                                    </div>
                                    <div><IoChatbubbleOutline className='hbtn' /></div>
                                    <div><IoShareSocialSharp className='hbtn' /></div>
                                </div>
                                <span className='ulikes'>{likecount[index] !== undefined ? likecount[index] : 0} likes</span><br />
                                <span className='ulikes'>Enjoying the nature with the beautiful sunrise</span><br />
                                <span className='ulikes'>Bessie Cooper so nice we are bringing our memories back</span><br />
                                <span className='ulikes'>Esther Howard my favourite spot</span><br />
                                <span className='ulikes'>1 Hour Ago</span>
                            </CardFooter>
                        </Card>
                    );
                })
            ) : (
                <div className='no-results'>
                    <img src={noserach} className='nosearchimg' alt="No results found" />
                    <p>No posts match your search criteria.</p>
                </div>
            )}
        </div>
    );
}


