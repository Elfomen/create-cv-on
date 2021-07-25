import React from 'react'
import './inputs.css'
import PERSONAL_DETAILS from './inputComponents/personalDetails/personal'
import PROFILE from './inputComponents/profile/profile'
import EDUCATION from './inputComponents/education/education'
import EMPLOYMENT from './inputComponents/employment/emp'
import SKILLS from './inputComponents/skills/skill'
import LANGUAGE from './inputComponents/language/lang'
import HOBBIES from './inputComponents/hobbies/hob'

import { BrowserRouter as Router, Switch , Route } from 'react-router-dom'
function inputs() {
    return (
        <div className="inputs">
            <Switch>
                <Route exact path="/personal/details" component={PERSONAL_DETAILS}/>
                <Route exact path="/profile" component={PROFILE}/>
                <Route exact path="/education" component={EDUCATION}/>
                <Route exact path="/employment" component={EMPLOYMENT}/>
                <Route exact path="/skills" component={SKILLS}/>
                <Route exact path="/language" component={LANGUAGE}/>
                <Route exact path="/hobbies" component={HOBBIES}/>
            </Switch>
        </div>
    )
}

export default inputs
