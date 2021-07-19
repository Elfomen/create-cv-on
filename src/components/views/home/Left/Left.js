import React from 'react'
import './Left.css'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import LanguageIcon from '@material-ui/icons/Language';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import WorkIcon from '@material-ui/icons/Work';
function Left() {
    return (
        <div className="left">
            <div>
                <PersonAddIcon />
                <p>Personal details</p>
            </div>
            <div>
                <PermContactCalendarIcon />
                <p>Profile</p>
            </div>
            <div>
                <CastForEducationIcon />
                <p>Education</p>
            </div>
            <div>
                <WorkIcon />
                <p>Employment</p>
            </div>
            <div>
                <Brightness7Icon />
                <p>Skills</p>
            </div>
            <div>
                <LanguageIcon />
                <p>Language</p>
            </div>
            <div>
                <DeviceHubIcon />
                <p>Hobbies</p>
            </div>
        </div>
    )
}

export default Left
