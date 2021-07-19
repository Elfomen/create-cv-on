import React from 'react'
import './inputs.css'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import DnsIcon from '@material-ui/icons/Dns';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import CropFreeIcon from '@material-ui/icons/CropFree';
import DateRangeIcon from '@material-ui/icons/DateRange';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import { IconButton } from '@material-ui/core'
function inputs() {
    return (
        <div className="inputs">
            <h1>Personal details</h1>

            <div className="input_details">
                <div>
                    <IconButton>
                        <PersonAddIcon />
                    </IconButton>
                    
                    <input type="file"/>
                </div>
                <div>
                    <IconButton>
                    <DnsIcon />
                    </IconButton>
                    <input type="text" placeholder="Names"/>
                </div>
                <div>
                    <IconButton>
                    <AlternateEmailIcon />
                    </IconButton>
                    <input type="email" placeholder="Email"/>
                </div>
                <div>
                    <IconButton>
                    <PhoneIcon />
                    </IconButton>
                    <input type="number" placeholder="Phone Number"/>
                </div>
                <div>
                    <IconButton>
                    <LocationOnIcon />
                    </IconButton>
                    <input type="text" placeholder="Adress"/>
                </div>
                <div>
                    <IconButton>
                    <LocationCityIcon />
                    </IconButton>
                    <input type="text" placeholder="City"/>
                </div>
                <div>
                    <IconButton>
                    <CropFreeIcon />
                    </IconButton>
                    <input type="text" placeholder="Zip Code"/>
                </div>
                <div>
                    <IconButton>
                    <DateRangeIcon />
                    </IconButton>
                    <input type="text" placeholder="Birth Date"/>
                </div>
                <div>
                    <IconButton>
                    <DriveEtaIcon />
                    </IconButton>
                    <input type="text" placeholder="Drivers Licence"/>
                </div>
                <div>
                    <IconButton>
                    <LinkedInIcon />
                    </IconButton>
                    <input type="text" placeholder="Linked Account ?"/>
                </div>
                <div>
                    <IconButton>
                    <GitHubIcon />
                    </IconButton>
                    <input type="text" placeholder="Github Account ?"/>
                </div>
                <div>
                    <IconButton>
                    <FolderSpecialIcon />
                    </IconButton>

                    <input type="text" placeholder="Port Folio Account ?"/>
                </div>
            </div>
        </div>
    )
}

export default inputs
