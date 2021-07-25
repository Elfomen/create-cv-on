import * as ProfileConstants from '../constants/profile'

export const addProfile = (profile) => (dispatch) => {
    try {
        //dispatch({
        //    type : ProfileConstants.ADD_PROFILE_LOADING
        //})
        dispatch({
            type : ProfileConstants.ADD_PROFILE_SUCCESS , 
            payload : profile
        })

    } catch (error) {
        dispatch({
            type : ProfileConstants.ADD_PROFILE_ERROR , 
            payload : error.message
        })
    }
}