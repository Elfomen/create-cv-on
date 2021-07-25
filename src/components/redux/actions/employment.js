import * as employment_constants from '../constants/employment'


export const add_employment = (employment) => (dispatch) => {
    console.log(employment)
    dispatch({
        type: employment_constants.ADD_EMPLOYMENT_DESCRIPTION,
        payload: employment
    })
}

export const add_new_employment = (employment) => (dispatch) => {
    dispatch({
        type: employment_constants.ADD_EMPLOYMENT,
        payload: employment
    })
}

export const setEmploymentPosition = (position) => (dispatch) => {
    dispatch({
        type : employment_constants.SET_EMPLOYMENT_POSITION , 
        payload : {
            id : position
        }
    })
}

export const deleteemployment = () => (dispatch) => {
    dispatch({
        type : employment_constants.DELETE_EMPLOYMENT
    })
}