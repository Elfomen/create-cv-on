import React , { useState , useEffect } from 'react'
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


import { useDispatch , useSelector } from 'react-redux'
import { updatePersonalDetails } from '../../../../../../redux/actions/personal_details'


import './personal.css'
function Personal() {

    const dispatch = useDispatch()

    const [personal_details , setPD] = useState({
        image : "" , 
        names : "" , 
        email : "" , 
        phone : "" , 
        adress : "" , 
        city : "" , 
        zipcode : "" , 
        birth_date : "" , 
        driver_licence : "" , 
        linked : "" , 
        github : "" , 
        port_folio : ""
    })

    const personalDet = useSelector(state => state.personal_detail)

    const { personal_det } = personalDet

    useEffect(() => {
        setPD(personal_det)
    } , [])
    
    
    useEffect(() => {
        dispatch(updatePersonalDetails(personal_details))
    } , [personal_details])

    



    return (
        <div className="personal">
            <h1>Personal details</h1>

            <div className="personal_details">
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
                    <input type="text" placeholder="Names" value={personal_details.names}
                    onChange={e => setPD({
                        ...personal_details , 
                        names : e.target.value
                    })}/>
                </div>
                <div>
                    <IconButton>
                    <AlternateEmailIcon />
                    </IconButton>
                    <input type="email" placeholder="Email" value={personal_details.email}
                    onChange={e => setPD({
                        ...personal_details , 
                        email : e.target.value
                    })}/>
                </div>
                <div>
                    <IconButton>
                    <PhoneIcon />
                    </IconButton>
                    <input type="text" placeholder="Phone Number" value={personal_details.phone}
                    onChange={e => setPD({
                        ...personal_details , 
                        phone : e.target.value
                    })}/>
                </div>
                <div>
                    <IconButton>
                    <LocationOnIcon />
                    </IconButton>
                    <input type="text" placeholder="Adress" value={personal_details.adress}
                    onChange={e => setPD({
                        ...personal_details , 
                        adress : e.target.value
                    })}/>
                </div>
                <div>
                    <IconButton>
                    <LocationCityIcon />
                    </IconButton>
                    <input type="text" placeholder="City" value={personal_details.city}
                    onChange={e => setPD({
                        ...personal_details , 
                        city : e.target.value
                    })}/>
                </div>
                <div>
                    <IconButton>
                    <CropFreeIcon />
                    </IconButton>
                    <input type="text" placeholder="Zip Code" value={personal_details.zipcode}
                    onChange={e => setPD({
                        ...personal_details , 
                        zipcode : e.target.value
                    })}/>
                </div>
                <div>
                    <IconButton>
                    <DateRangeIcon />
                    </IconButton>
                    <input type="date" placeholder="Birth Date" value={personal_details.birth_date}
                    onChange={e => setPD({
                        ...personal_details , 
                        birth_date : e.target.value
                    })}/>
                </div>
                <div>
                    <IconButton>
                    <DriveEtaIcon />
                    </IconButton>
                    <input type="text" placeholder="Drivers Licence" value={personal_details.driver_licence}
                    onChange={e => setPD({
                        ...personal_details , 
                        driver_licence : e.target.value
                    })}/>
                </div>
                <div>
                    <IconButton>
                    <LinkedInIcon />
                    </IconButton>
                    <input type="text" placeholder="Linked Account ?" value={personal_details.linked}
                    onChange={e => setPD({
                        ...personal_details , 
                        linked : e.target.value
                    })}/>
                </div>
                <div>
                    <IconButton>
                    <GitHubIcon />
                    </IconButton>
                    <input type="text" placeholder="Github Account ?" value={personal_details.github}
                    onChange={e => setPD({
                        ...personal_details , 
                        github : e.target.value
                    })}/>
                </div>
                <div>
                    <IconButton>
                    <FolderSpecialIcon />
                    </IconButton>

                    <input type="text" placeholder="Port Folio Account ?" value={personal_details.port_folio}
                    onChange={e => setPD({
                        ...personal_details , 
                        port_folio : e.target.value
                    })}/>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Personal
