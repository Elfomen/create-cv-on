import * as personal_details_constants from '../constants/personal_details'
export const personal_details_reducers = (state = { personal_det : { } } , actions) => {
    switch(actions.type){
        case personal_details_constants.ADD_PERSONAL_DETAILS:
            return{
                ...state , 
                personal_det : actions.payload
            }
        default:
            return state
    }
}