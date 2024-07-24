import './nopage.css';
import nopage from '../../assets/images/nopage.png';
import { Link } from 'react-router-dom';


export function NoPage(){
    return(
        <div className='nomain'>
            <img src={nopage}  className='noimg'/>
            <button className='nopagebtn btn btn-primary'><Link to='/home' className='link'>Home Page</Link></button>
        </div>
    )
}