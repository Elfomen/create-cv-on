import * as EducationConstants from '../constants/education'

export const educationReducers = (state = { education : [] , position_changed : false  } , actions) => {
    switch(actions.type){
        case EducationConstants.ADD_EDUCATION_DESCRIPTION:
            const modifEduc = state.education.filter((educ,i) => (
                i!==state.education.length - 1
            ))
            return{
                ...state , 
                education : [
                    ...modifEduc ,

                    {
                        ...state.education[state.education.length - 1] , 
                        description : actions.payload.description ,
                        title : actions.payload.title ,
                        school : actions.payload.school ,
                        city: actions.payload.city ,
                        start_date : actions.payload.start_date ,
                        end_date : actions.payload.end_date ,
                    } 
                    
                ]
            }
        case EducationConstants.ADD_EDUCATION:
            return{
                ...state , 
                education : [
                    ...state.education , 
                    actions.payload
                ]
            }
        case EducationConstants.SET_EDUCATION_POSITION:
            const newEducs = state.education.filter((educ , i) => (
                i!==actions.payload.id
            ))

            return{
                ...state , 
                education : [
                    ...newEducs , 
                    state.education[actions.payload.id]
                ]
            }
        case EducationConstants.DELETE_EDUCATION:
            return{
                ...state, 
                education : state.education.filter((educ , i) => (
                    i!==state.education.length-1
                ))
            }
        case EducationConstants.SET_EDUCATION_POSITION:
            return{
                ...state , 
                position_changed : !state.position_changed
            }
        case EducationConstants.EDUCATION_POSITION_CHANGED:
            return{
                ...state , 
                position_changed : !state.position_changed
            }
        default:
            return state
    }
}