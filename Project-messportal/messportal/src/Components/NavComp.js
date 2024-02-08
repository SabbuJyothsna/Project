import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const NavComp = (props) => {
    const { loggedIn, email } = props;
    const navigate = useNavigate();
    const onButtonClick = () => {
        if (loggedIn) {
            localStorage.removeItem("user")
            props.setLoggedIn(false)
        }
    }
    return (
        <div>
            {(loggedIn ? <div>
                <Link to="/login" className='btn signup btn-primary' onClick={onButtonClick}>Log Out</Link>
            </div> : <div><Link to="/login" className='btn signup btn-primary'>Sign in</Link>{" "}</div>)}  
        </div>
    )
}

export default NavComp
