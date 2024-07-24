// import './login.component.css';
// import img from '../../assets/images/login logo.png';
// import logo from '../../assets/images/logo.png';
// import { Link, useNavigate } from 'react-router-dom';
// import { useRef, useState } from 'react';
// import { setlocalstorageitem } from '../../services/storages/localstorage';
// import { getuserdata } from '../../services/userdata.service';
// export function Login() {
//     const [login, setlogin] = useState(true);
//     const [reset, setreset] = useState(false);
//     const navigate = useNavigate();
//     //creating variable for useref
//     const usernameref = useRef();
//     const passwordref = useRef();
//     function getregistereddata() {
//         const username = usernameref.current.value;
//         const password = passwordref.current.value;

//         getuserdata().then((res) => {
//             let filterdata = res.data.filter((item, index, arr) =>
//                 item.username == username && item.password == password
//             );

//             if (filterdata.length > 0) {
//                 setlocalstorageitem("userdata", filterdata)
//                 // let action = {type:"login",data: filterdata}
//                 // store.dispatch(action)
//                 alert("user exits")
//                 navigate("/home")
//             }
//             else {
//                 alert("user doesn't exit")
//             }

//         })
//             .catch((ex) => {
//                 alert(ex.message)
//             })
//     }
//     return (
//         <div className='row ms-5'>
//             <div className='img col-4'>
//                 <img src={img} className='lg-img' />
//             </div>
//             <div className='col-6  ms-3 '>
//                 {
//                     login && (
//                         <div className='login '>
//                             <img src={logo} className='log' />
//                             <h1 className='main-t'>Insta Share </h1>
//                             <label className='label-text'><b>UserName</b></label><br></br>
//                             <div className='log-text '>
//                                 <input type='text' placeholder=' User Name' className='textflied' ref={usernameref} />
//                             </div>
//                             <label className='label-text'><b>Password</b></label><br></br>
//                             <div className='log-text '>
//                                 <input type='password' placeholder=' Password' className='textflied' ref={passwordref} />
//                             </div>
//                             <div >
//                                 <label className='forgot' onClick={() => { setreset(true); setlogin(false) }} >Forgot Password ?</label>
//                             </div>
//                             <div className='log-text '>
//                                 <input type='button' className='textflied btn btn-primary' onClick={() => getregistereddata()} value='Login'></input>
//                             </div>
//                             <div className='lg-down'>
//                                 <span >Don't Have an Account? <span><Link to='/register'>Sign Up</Link> </span> </span>
//                             </div>
//                         </div>
//                     )
//                 }
//                 {
//                     reset && (
//                         <div>
//                             <div className='rpassword'>
//                                 <h1 className='main-rt'>Reset Password </h1>
//                                 <div className='resetp'>
//                                     <label className='resetm'>Enter Your Email and instructions wil be Sent to you!</label>
//                                 </div>
//                                 <label className='label-text'><b>Email</b></label><br></br>
//                                 <div className='log-text '>
//                                     <input type='text' placeholder=' Email' className='textflied' />
//                                 </div>
//                                 <div className='log-text '>
//                                     <input type='button' className='textflied btn btn-primary' value='Reset'></input>
//                                 </div>
//                                 <div className='lg-rem'>
//                                     <label>Remember it ?<span  onClick={() => { setreset(false); setlogin(true) }}> Sign In</span></label>
//                                 </div>
//                             </div>
//                         </div>
//                     )
//                 }

//             </div>



//         </div>
//     )
// }

// function handleresetpassword() {
//     const email = document.getElementById('email').value;
//     // Check if email is provided
//     if (!email) {
//         alert('Please enter your email.');
//         return;
//     }
//     //sending email
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: "srikanthkamepalli1234@gmail.com",  // Use environment variable for email user
//             pass: "qhil wgyo jxrk iqxq"   // Use environment variable for email password
//         }
//     });
//     const mailOptions = {
//         from: "srikanthkamepalli1234@gmail.com",
//         to: email,
//         subject: 'Password Reset',
//         text: 'Instructions for password reset...'
//     };
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.log('Error sending email:', error);
//         } else {
//             console.log('Email sent:', info.response);
//             alert('Password reset instructions sent to your email.');
//         }
//     });
// }



//=================================================================================================

// import './login.component.css';
// import img from '../../assets/images/login logo.png';
// import logo from '../../assets/images/logo.png';
// import { Link, useNavigate } from 'react-router-dom';
// import { useRef, useState } from 'react';
// import { setlocalstorageitem } from '../../services/storages/localstorage';
// import { getuserdata } from '../../services/userdata.service';
// import axios from 'axios';
// import { useForm } from 'react-hook-form';

// export function Login() {
//     const [isLoginView, setIsLoginView] = useState(true);
//     const navigate = useNavigate();

//     // Create refs for username and password inputs
//     const usernameRef = useRef();
//     const passwordRef = useRef();

//     const handleLogin = () => {
//         const username = usernameRef.current.value;
//         const password = passwordRef.current.value;

//         getuserdata().then((res) => {
//             const user = res.data.find(item => item.username === username && item.password === password);

//             if (user) {
//                 setlocalstorageitem("userdata", user);
//                 alert("User exists");
//                 navigate("/home");
//             } else {
//                 alert("User doesn't exist");
//             }
//         }).catch((err) => {
//             alert(err.message);
//         });
//     };



//     const {
//         register,
//         handleSubmit
//     }=useForm();
//     async function handleResetPassword(data){
//         let formdata = new FormData();
//         formdata.append("email", data.email);

//         const config = {
//             headers: { "content-type": "multipart/form data" }
//         }
//         const res = await axios.post("http://localhost:4200/resetpassword", formdata, config)
//         alert("Password sent to your email")
//         window.location.reload();
//         // navigate('/login');

//         // Alternatively, to reload the current page:
//         // window.location.reload();
//     };

//     return (
//         <div className="login-container">
//             <div className="login-image">
//                 <img src={img} alt="Login Logo" />
//             </div>
//             <div className="login-form-container">
//                 {isLoginView ? (
//                     <div className="login-form">
//                         <img src={logo} className="login-logo" alt="Logo" />
//                         <h1 className="login-title">Insta Share</h1>
//                         <label className="label-text"><b>Username</b></label>
//                         <div className="login-input-container">
//                             <input type="text" placeholder="Username" className="login-input" ref={usernameRef} />
//                         </div>
//                         <label className="label-text"><b>Password</b></label>
//                         <div className="login-input-container">
//                             <input type="password" placeholder="Password" className="login-input" ref={passwordRef} />
//                         </div>
//                         <div className="login-forgot" onClick={() => setIsLoginView(false)}>
//                             Forgot Password?
//                         </div>
//                         <div className="login-button-container">
//                             <input type="button" className="login-button btn btn-primary" onClick={handleLogin} value="Login" />
//                         </div>
//                         <div className="signup-link">
//                             <span>Don't Have an Account? <Link to="/register">Sign Up</Link></span>
//                         </div>
//                     </div>
//                 ) : (
//                     <div className="reset-password-container">
//                         <h1 className="reset-password-title">Reset Password</h1>
//                         <div className="reset-password-message">
//                             Enter your email and instructions will be sent to you!
//                         </div>
//                         <form onSubmit={handleSubmit((data)=>{handleResetPassword(data)})}>
//                             <label className="resetlabel-text"><b>Email</b></label>
//                             <div className="reset-password-input-container">
//                                 <input type="email"  placeholder="Email" className="reset-password-input"
//                                 {...register('email')} />
//                             </div>
//                             <div className="reset-password-button-container">
//                                 <input type="submit" className="reset-password-button btn btn-primary" value="Reset" />
//                             </div>
//                             {/* {message && <div className="reset-password-message">{message}</div>} */}
//                             <div className="back-to-login" onClick={() => setIsLoginView(true)}>
//                                 Remember it? Sign In
//                             </div>
//                         </form>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }


//===============================================================================
// import './login.component.css';
// import img from '../../assets/images/login logo.png';
// import logo from '../../assets/images/logo.png';
// import { Link, useNavigate } from 'react-router-dom';
// import { useRef, useState } from 'react';
// import { setlocalstorageitem } from '../../services/storages/localstorage';
// import { getuserdata } from '../../services/userdata.service';
// import axios from 'axios';
// import { useForm } from 'react-hook-form';
// import { ClipLoader } from 'react-spinners';

// export function Login() {
//     const [isLoginView, setIsLoginView] = useState(true);
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();

//     // Create refs for username and password inputs
//     const usernameRef = useRef();
//     const passwordRef = useRef();

//     const handleLogin = () => {
//         const username = usernameRef.current.value;
//         const password = passwordRef.current.value;

//         setLoading(true); // Show spinner

//         getuserdata().then((res) => {
//             const user = res.data.find(item => item.username === username && item.password === password);

//             if (user) {
//                 setlocalstorageitem("userdata", user);
//                 alert("User exists");
//                 setTimeout(() => {
//                     setLoading(false); // Hide spinner
//                     navigate("/home");
//                 }, 1000); // Delay of 3 seconds
//             } else {
//                 alert("User doesn't exist");
//                 setLoading(false); // Hide spinner
//             }
//         }).catch((err) => {
//             alert(err.message);
//             setLoading(false); // Hide spinner
//         });
//     };

//     const { register, handleSubmit } = useForm();

//     const handleResetPassword = async (data) => {
//         let formdata = new FormData();
//         formdata.append("email", data.email);

//         const config = {
//             headers: { "content-type": "multipart/form-data" }
//         };

//         setLoading(true); // Show spinner

//         try {
//             const res = await axios.post("http://localhost:4200/resetpassword", formdata, config);
//             alert("Password sent to your email");
//             window.location.reload();
//         } catch (error) {
//             alert(error.message);
//         } finally {
//             setLoading(false); // Hide spinner
//         }
//     };



//     //   //validations on login form
//     //   document.getElementById('loginForm').addEventListener('submit', function (event) {
//     //     event.preventDefault(); // Prevent form submission

//     //     // Get input values
//     //     var username = document.getElementById('username').value.trim();
//     //     var password = document.getElementById('password').value.trim();

//     //     // Validate fields
//     //     var errorMessage = '';
//     //     if (!username || !password) {
//     //         errorMessage = 'Please fill out all fields.';
//     //     } else if (!isValidEmail(username)) {
//     //         errorMessage = 'Please enter a valid email address.';
//     //     } else if (password.length < 8) {
//     //         errorMessage = 'Password must be at least 8 characters long.';
//     //     }

//     //     // Display error message
//     //     var errorContainer = document.getElementById('errorMessages');
//     //     errorContainer.textContent = errorMessage;

//     //     // If no errors, submit the form
//     //     if (errorMessage === '') {
//     //         // Submit form
//     //         this.submit();
//     //     }
//     // });
//     // function isValidEmail(email) {
//     //     // Regular expression for basic email validation
//     //     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     //     return emailRegex.test(email);
//     // }


//     return (
//         <div className="login-container">
//             <div className="login-image">
//                 <img src={img} alt="Login Logo" />
//             </div>
//             <div className="login-form-container">
//                 {loading ? (
//                     <div className="spinner-container">
//                         <ClipLoader size={50} color={"#123abc"} loading={loading} />
//                     </div>
//                 ) : (
//                     <>
//                         {isLoginView ? (
//                             <div className="login-form">
//                                 <img src={logo} className="login-logo" alt="Logo" />
//                                 <h1 className="login-title">Insta Share</h1>
//                                 <form >
//                                     <div id="errorMessages"></div>
//                                     <label className="label-text"><b>Username</b></label>
//                                     <div className="login-input-container">
//                                         <input type="text" placeholder="Username"  className="login-input" ref={usernameRef} />
//                                     </div>
//                                     <label className="label-text"><b>Password</b></label>
//                                     <div className="login-input-container">
//                                         <input type="password" placeholder="Password"  className="login-input" ref={passwordRef} />
//                                     </div>
//                                     <div className="login-forgot" onClick={() => setIsLoginView(false)}>
//                                         Forgot Password?
//                                     </div>
//                                     <div className="login-button-container">
//                                         <input type="button" className="login-button btn btn-primary" onClick={handleLogin} value="Login" />
//                                     </div>
//                                     <div className="signup-link">
//                                         <span>Don't Have an Account? <Link to="/register">Sign Up</Link></span>
//                                     </div>
//                                 </form>
//                             </div>
//                         ) : (
//                             <div className="reset-password-container">
//                                 <h1 className="reset-password-title">Reset Password</h1>
//                                 <div className="reset-password-message">
//                                     Enter your email and instructions will be sent to you!
//                                 </div>
//                                 <form onSubmit={handleSubmit(handleResetPassword)}>
//                                     <label className="resetlabel-text"><b>Email</b></label>
//                                     <div className="reset-password-input-container">
//                                         <input type="email" placeholder="Email" className="reset-password-input" {...register('email')} />
//                                     </div>
//                                     <div className="reset-password-button-container">
//                                         <input type="submit" className="reset-password-button btn btn-primary" value="Reset" />
//                                     </div>
//                                     <div className="back-to-login" onClick={() => setIsLoginView(true)}>
//                                         Remember it? Sign In
//                                     </div>
//                                 </form>
//                             </div>
//                         )}
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// }

///=====================================================================================================================




import './login.component.css';
import img from '../../assets/images/login logo.png';
import logo from '../../assets/images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { setlocalstorageitem } from '../../services/storages/localstorage';
import { getuserdata } from '../../services/userdata.service';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { ClipLoader } from 'react-spinners';

export function Login() {
    const [isLoginView, setIsLoginView] = useState(true);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLogin = (data) => {
        const { username, password } = data;

        setLoading(true); // Show spinner

        getuserdata().then((res) => {
            const user = res.data.find(item => item.username === username && item.password === password);

            if (user) {
                setlocalstorageitem("userdata", user);
                alert("Login Successfully.....");
                setTimeout(() => {
                    setLoading(false); // Hide spinner
                    navigate("/home");
                }, 1000); // Delay of 1 second
            } else {
                setErrorMessage("username & password are invalid please enter correct username & password");
                setLoading(false); // Hide spinner
            }
        }).catch((err) => {
            setErrorMessage(err.message);
            setLoading(false); // Hide spinner
        });
    };

    const handleResetPassword = async (data) => {
        const formdata = new FormData();
        formdata.append("email", data.email);

        const config = {
            headers: { "content-type": "multipart/form-data" }
        };

        setLoading(true); // Show spinner

        try {
            await axios.post("http://localhost:4200/resetpassword", formdata, config);
            alert("Password sent to your email");
            window.location.reload();
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setLoading(false); // Hide spinner
        }
    };

    return (
        <div className="login-container">
            <div className="login-image">
                <img src={img} alt="Login Logo" />
            </div>
            <div className="login-form-container">
                {loading ? (
                    <div className="spinner-container">
                        <ClipLoader size={50} color={"#123abc"} loading={loading} />
                    </div>
                ) : (
                    <>
                        {isLoginView ? (
                            <div className="login-form">
                                <img src={logo} className="login-logo" alt="Logo" />
                                <h1 className="login-title">Insta Share</h1>
                                <form onSubmit={handleSubmit(handleLogin)}>
                                    <div id="errorMessages">{errorMessage}</div>
                                    <label className="label-text"><b>Username</b></label>
                                    <div className="login-input-container">
                                        <input 
                                            type="text" 
                                            placeholder="Username" 
                                            className="login-input" 
                                            {...register('username', { required: 'Username is required' })} 
                                        />
                                        {errors.username && <p className="error-message">{errors.username.message}</p>}
                                    </div>
                                    <label className="label-text"><b>Password</b></label>
                                    <div className="login-input-container">
                                        <input 
                                            type="password" 
                                            placeholder="Password" 
                                            className="login-input" 
                                            {...register('password', { required: 'Password is required', minLength: { value: 3, message: 'Password must be at least 3 characters long' } })} 
                                        />
                                        {errors.password && <p className="error-message">{errors.password.message}</p>}
                                    </div>
                                    <div className="login-forgot" onClick={() => setIsLoginView(false)}>
                                        Forgot Password?
                                    </div>
                                    <div className="login-button-container">
                                        <input type="submit" className="login-button btn btn-primary" value="Login" />
                                    </div>
                                    <div className="signup-link">
                                        <span>Don't Have an Account? <Link to="/register">Sign Up</Link></span>
                                    </div>
                                </form>
                            </div>
                        ) : (
                            <div className="reset-password-container">
                                <h1 className="reset-password-title">Reset Password</h1>
                                <div className="reset-password-message">
                                    Enter your email and instructions will be sent to you!
                                </div>
                                <form onSubmit={handleSubmit(handleResetPassword)}>
                                    <label className="resetlabel-text"><b>Email</b></label>
                                    <div className="reset-password-input-container">
                                        <input 
                                            type="email" 
                                            placeholder="Email" 
                                            className="reset-password-input" 
                                            {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email address' } })} 
                                        />
                                        {errors.email && <p className="error-message">{errors.email.message}</p>}
                                    </div>
                                    <div className="reset-password-button-container">
                                        <input type="submit" className="reset-password-button btn btn-primary" value="Reset" />
                                    </div>
                                    <div className="back-to-login" onClick={() => setIsLoginView(true)}>
                                        Remember it? Sign In
                                    </div>
                                </form>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
