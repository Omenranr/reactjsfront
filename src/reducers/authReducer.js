import {
    USER_LOADING, 
    USER_LOADED, 
    AUTH_ERROR,
    LOGIN_SUCCES, 
    LOGIN_FAIL, 
    REGISTER_SUCCES, 
    REGISTER_FAIL, 
    LOGOUT_SUCCESS,
} from '../actions/types'

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    isLoading: false,
    user: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true,
            }
        case USER_LOADED:
            return {
                ...state,
                isLoading: false,
                user: action.payload,
            }
        case LOGIN_SUCCES:
        case REGISTER_SUCCES:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            }
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case REGISTER_FAIL:
        case AUTH_ERROR:
            localStorage.removeItem('token')
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                token: null,
            }
        default:
            return state
    }
}