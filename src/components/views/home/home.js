import React , { useState } from 'react'
import LeftSide from '../home/Rigth/Rigth'
import RigthSide from '../home/Left/Left'
import NavBar from '../Nav/Nav'
import BackDrop from '../Drawers/BackDrop/BackDrop'
import SideDrawer from "../Drawers/SideDrawer/SideDrawer"
import "./home.css"
function Home() {

    const [show , setShow] = useState(false)


    return (
        <div>
            <NavBar setShow={() => setShow(!show)}/>
            <div className="main">
              <RigthSide />
              <LeftSide />
              <BackDrop show={show} setShow={() => setShow(!show)}/>
              <SideDrawer show={show} setShow={() => setShow(!show)}/>
            </div>
            
        </div>
    )
}

export default Home
