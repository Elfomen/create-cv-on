import React from 'react'
import LeftSide from '../home/Rigth/Rigth'
import RigthSide from '../home/Left/Left'
import NavBar from '../Nav/Nav'
import "./home.css"
function home() {
    return (
        <div>
            <NavBar />
            <div className="main">
              <RigthSide />
              <LeftSide />
            </div>
        </div>
    )
}

export default home
