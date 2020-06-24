import { RESPONSE_LOADING, RESPONSE_LOADED, RESPONSE_ERROR} from '../actions/types'

const initialState = {
    response: null,
    isLoading: false,
}

export default function(state=initialState, action) {
    switch(action.type) {
        case RESPONSE_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case RESPONSE_LOADED:
            return {
                ...state,
                isLoading: false,
                response: action.payload
            }
        case RESPONSE_ERROR:
            return {
                ...state,
                isLoading: false,
                response: null
            }
        default:
            return state
    }
}