import * as education_constants from '../constants/education'
import { educationReducers } from '../reducers/education'


export const add_education = (education) => (dispatch) => {
    console.log(education)
    dispatch({
        type : education_constants.ADD_EDUCATION_DESCRIPTION , 
        payload : education
    })
}

export const add_new_education = (education) => (dispatch) => {
    dispatch({
        type : education_constants.ADD_EDUCATION , 
        payload : education
    })
}

export const setEducationPosition = (position) => (dispatch) => {
    dispatch({
        type : education_constants.SET_EDUCATION_POSITION , 
        payload : {
            id : position
        }
    })
}

export const deleteEducation = () => (dispatch) => {
    dispatch({
        type : education_constants.DELETE_EDUCATION
    })
}