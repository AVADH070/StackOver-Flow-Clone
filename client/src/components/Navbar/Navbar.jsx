import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import decode from 'jwt-decode'

import logo from '../../assets/logo.png'
import './Navbar.css'
import { setCurrentUser } from '../../actions/currentUser'
import Avatar from '../Avatar/Avatar'


const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let User = useSelector((state) => (state.currretUserReducer));

    useEffect(() => {

        const token = User?.token;

        if (token) {
            const decodeToken = decode(token);
            if (decodeToken.exp * 1000 < new Date().getTime()) {
                handleLogout()
            }
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    }, [dispatch])

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' })
        navigate('/')
        dispatch(setCurrentUser(null))
    }
    return (
        <nav className='main-nav'>
            <div className='navbar'>
                <Link to='/' className='nav-item nav-logo'>
                    <img src={logo} alt='logo' />
                </Link>

                {
                    User === null ?
                        <div className='login'>
                            <Link to='/Auth' className='nav-item nav-links'>Log in</Link>
                        </div> :
                        <div className='login-icon'>
                            <Avatar cursor="pointer" backgroundColor="blue" px="10px" py="7px" borderRadius="50%" ><Link style={{ color: "white", textDecoration: "none" }} to='/Users'>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
                            <button className='nav-item nav-links' onClick={handleLogout}>Log Out</button>
                        </div>
                }

            </div>
        </nav>
    )
}

export default Navbar
