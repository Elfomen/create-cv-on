import * as personal_details_constants from '../constants/personal_details'

export const updatePersonalDetails = (personaldetail) => (dispatch) =>{
    dispatch({
        type : personal_details_constants.ADD_PERSONAL_DETAILS, 
        payload : personaldetail
    })
}