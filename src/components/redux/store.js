import { combineReducers, applyMiddleware, createStore } from 'redux'

import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'

import { profileReducers } from './reducers/profile'

import { educationReducers } from './reducers/education'

import { employmentReducers } from './reducers/employment'

const reducers = combineReducers({
    profile: profileReducers,
    educations: educationReducers,
    employments: employmentReducers
})

const middlewares = [thunk]

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)))

export default store