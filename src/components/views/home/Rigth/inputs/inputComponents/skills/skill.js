import React from 'react'
import './skill.css'
import EvStationIcon from '@material-ui/icons/EvStation';
import { IconButton } from '@material-ui/core'
import Slider from '../../../../../../slider/Slider'
function Skill() {
    return (
        <div className="skill">
            <h1>Skills</h1>
            <div>
                <IconButton>
                    <EvStationIcon />
                </IconButton>

                <input placeholder="Enter skill name"/>

            </div>

            <div>
                <Slider />
            </div>

            <div className="button_pair">
                <button>Add Skill</button>
                <button>Remove Skill</button>
            </div>
        </div>
    )
}

export default Skill
