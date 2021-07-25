import * as ProfileConstants from '../constants/profile'

export const profileReducers = (state = { profile : { } } , actions) => {
    switch(actions.type){
        case ProfileConstants.ADD_PROFILE_LOADING:
            return{
                ...state , 
                add_profile_loading : true
            }
        case ProfileConstants.ADD_PROFILE_SUCCESS:
            return{
                ...state , 
                profile : actions.payload ,
                add_profile_loading : false
            }
        case ProfileConstants.ADD_PROFILE_ERROR:
            return{
                ...state , 
                add_profile_loading : false ,
                add_profile_error : actions.payload
            }
        default:
            return state
    }
}