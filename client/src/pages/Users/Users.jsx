import React from 'react'

import './Users.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import UsersList from './UsersList'

const Users = () => {

    return (
        <div className='home-container-1'>
            <LeftSidebar />
            <div className="home-container-2" style={{ marginTop: "30px" }}>
                <h1 style={{ fontWeight: "400" }}>Users</h1>
                <UsersList />
            </div>
        </div>
    )
    // return(
    //     <>
    //         <div>
    //             <h1>Hello</h1>
    //             <h1>Hello</h1>
    //             <h1>Hello</h1>
    //             <h1>Hello</h1>
    //             <h1>Hello</h1>
    //         </div>
    //     </>
    // )
}

export default Users
