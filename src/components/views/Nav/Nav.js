import React from 'react'
import './Nav.css'
import ReorderIcon from '@material-ui/icons/Reorder';
import { IconButton } from '@material-ui/core'
function Nav({ setShow }) {
    return (

        <div className="navbar">
            <div className="link_drop" onClick={setShow}>
                <ReorderIcon className="drop"/>
            </div> 
            <h1>Settings</h1>
            <h1>How to use</h1>
            <h1>Exit App</h1>       
        </div>
    )
}

export default Nav
