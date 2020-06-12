import { 
    BOOKS_LOADED,
    BOOKS_LOADING,
    BOOKS_LOAD_FAIL
 } from "../actions/types"

 const initialState = {
     books: null,
     isLoading: false,
 }

 export default function(state = initialState, action) {
     switch(action.type) {
         case BOOKS_LOADING: 
            return {
                ...state,
                isLoading: true,
            }
        case BOOKS_LOADED:
            return {
                books: action.payload,
                isLoading: false,
            }
        case BOOKS_LOAD_FAIL:
            return {
                books: null,
                isLoading: false
            }
        default:
            return state
     }
 }
