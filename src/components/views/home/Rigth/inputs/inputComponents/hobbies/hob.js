import React from 'react'
import './hob.css'
import EvStationIcon from '@material-ui/icons/EvStation';
import { IconButton } from '@material-ui/core'
import Slider from '../../../../../../slider/Slider'
function Hobby() {
    return (
        <div className="hobies">
            <h1>Hobbies</h1>
            <div>
                <IconButton>
                    <EvStationIcon />
                </IconButton>

                <input placeholder="Enter Hobby name"/>

            </div>

            <div>
                <Slider />
            </div>

            <div className="button_pair">
                <button>Add Hobby</button>
                <button>Remove Hobby</button>
            </div>
        </div>
    )
}

export default Hobby
