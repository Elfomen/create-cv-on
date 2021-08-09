import './SideDrawer.css'
import React , { useState } from 'react'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import LanguageIcon from '@material-ui/icons/Language';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import WorkIcon from '@material-ui/icons/Work';
import { useHistory , Link } from 'react-router-dom'
function SideDrawer({ show , setShow }){

    const sideDrawerClass = ['sidedrawer']

    show&&sideDrawerClass.push('show')

    const navi = useHistory()


    const handleNavigate = (link) => {
        navi.push(link)
        setShow()
    }


    return(
        <div className={sideDrawerClass.join(' ')}>
            <div onClick={() => handleNavigate("/personal/details")}>
                <PersonAddIcon />
                <p>Personal details</p>
            </div>
            <div onClick={() => handleNavigate("/profile")}>
                <PermContactCalendarIcon />
                <p>Profile</p>
            </div>
            <div onClick={() => handleNavigate("/education")}>
                <CastForEducationIcon />
                <p>Education</p>
            </div>
            <div onClick={() => handleNavigate("/employment")}>
                <WorkIcon />
                <p>Employment</p>
            </div>
            <div onClick={() => handleNavigate("/skills")}>
                <Brightness7Icon />
                <p>Skills</p>
            </div>
            <div onClick={() => handleNavigate("/language")}>
                <LanguageIcon />
                <p>Language</p>
            </div>
            <div onClick = {() => handleNavigate("/hobbies")}>
                <DeviceHubIcon />
                <p>Hobbies</p>
            </div>
        </div>
    )
}

export default SideDrawer