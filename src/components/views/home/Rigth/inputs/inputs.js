import React from 'react'
import './inputs.css'
import PERSONAL_DETAILS from './inputComponents/personalDetails/personal'
import PROFILE from './inputComponents/profile/profile'

import { BrowserRouter as Router, Switch , Route } from 'react-router-dom'
function inputs() {
    return (
        <div className="inputs">
            <Switch>
                <Route exact path="/personal/details" component={PERSONAL_DETAILS}/>
                <Route exact path="/profile" component={PROFILE}/>
            </Switch>
        </div>
    )
}

export default inputs
