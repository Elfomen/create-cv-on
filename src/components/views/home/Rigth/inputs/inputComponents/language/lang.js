import React from 'react'
import './language.css'
import EvStationIcon from '@material-ui/icons/EvStation';
import { IconButton } from '@material-ui/core'
import Slider from '../../../../../../slider/Slider'
function Language() {
    return (
        <div className="language">
            <h1>Languages</h1>
            <div>
                <IconButton>
                    <EvStationIcon />
                </IconButton>

                <input placeholder="Enter language"/>

            </div>

            <div>
                <Slider />
            </div>

            <div className="button_pair">
                <button>Add Language</button>
                <button>Remove Language</button>
            </div>
        </div>
    )
}

export default Language
