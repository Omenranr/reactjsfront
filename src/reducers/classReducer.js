import { 
    CLASS_LOADED,
    CLASS_LOADING,
    CLASS_LOAD_FAIL
 } from "../actions/types";

const initialState = {
     classrooms: null,
     isLoading: false,
}


// take previouState + action (type, payload) => newState

 export default function(state = initialState, action) {
     switch(action.type) {
        case CLASS_LOADING:
             return {
                 ...state,
                 isLoading: true,
             }
        case CLASS_LOADED:
            return {
                isLoading: false,
                classrooms: action.payload
            }
        case CLASS_LOAD_FAIL:
            return {
                isLoading: false,
                classrooms: null
            }
        default:
            return state
     }
 }