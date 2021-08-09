import * as employment_constants from '../constants/employment'

export const employmentReducers = (state = { employment: [] , position_changed : false }, actions) => {
    switch (actions.type) {
        case employment_constants.ADD_EMPLOYMENT_DESCRIPTION:
            const modifEmp = state.employment.filter((emp, i) => (
                i !== state.employment.length - 1
            ))
            return {
                ...state,
                employment: [
                    ...modifEmp,

                    {
                        ...state.employment[state.employment.length - 1],
                        description: actions.payload.description,
                        position: actions.payload.position,
                        employer: actions.payload.employer,
                        city: actions.payload.city,
                        start_date: actions.payload.start_date,
                        end_date: actions.payload.end_date,
                    }

                ]
            }
        case employment_constants.ADD_EMPLOYMENT:
            return {
                ...state,
                employment: [
                    ...state.employment,
                    actions.payload
                ]
            }
            case employment_constants.SET_EMPLOYMENT_POSITION:
                const newEmp = state.employment.filter((emp , i) => (
                    i!==actions.payload.id
                ))
    
                return{
                    ...state , 
                    employment : [
                        ...newEmp , 
                        state.employment[actions.payload.id]
                    ]
                }
            case employment_constants.DELETE_EMPLOYMENT:
                return{
                    ...state, 
                    employment : state.employment.filter((emp , i) => (
                        i!==state.employment.length-1
                    ))
                }
            case employment_constants.EMPLOYMENT_POSITION_CHANGED:
                return{
                    ...state , 
                    position_changed: !state.position_changed
                }
        default:
            return state
    }
}