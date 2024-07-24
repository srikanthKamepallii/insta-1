import './register.component.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
export function Register() {
    const {
        register,
        handleSubmit
    } = useForm();
    return (
        <div>
            <div className='register'>
                <div className='login '>
                    <img src={logo} className='main-log' />
                    <h1 className='main-text'>Insta Share </h1>
                    <h2>Register</h2>
                    <form method='post' id='regform' action='http://localhost:4200/saveusersdata'
                    onSubmit={handleSubmit(()=>{document.getElementById("regform").submit()})}> 
                        <label className='rlabel-text'><b>UserName</b></label><br></br>
                        <div className='log-text '>
                            <input type='text' placeholder='User Name' className='form-control'
                            {...register("username")} />
                        </div>
                        <label className='rlabel-text'><b>EmailAddress</b></label><br></br>
                        <div className='log-text '>
                            <input type='email' placeholder='EmailAddress' className='form-control'
                            {...register("email")} />
                        </div>
                        <label className='rlabel-text'><b>ProfileName</b></label><br></br>
                        <div className='log-text '>
                            <input type='text' placeholder='Profile Name' className='form-control'
                            {...register("userprofile")} />
                        </div>
                        <label className='rlabel-text'><b>Password</b></label><br></br>
                        <div className='log-text '>
                            <input type='password' placeholder='Password' className='form-control'
                            {...register("password")} />
                        </div>
                        
                        <div className='log-text '>
                            <input type='submit' className='form-control btn btn-primary' value='Register'></input>
                        </div>
                        <div className='regi-down'>
                            <span className='already'>Already have an Account? <span><Link to='/login'> Sign In</Link></span> </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}