import axios from 'axios'
import { returnError } from "./errActions";
import {
    USER_LOADING, 
    USER_LOADED, 
    AUTH_ERROR,
    LOGIN_SUCCES, 
    LOGIN_FAIL, 
    REGISTER_SUCCES, 
    REGISTER_FAIL, 
    LOGOUT_SUCCESS,
} from './types'


export const loadUser = () => (dispatch, getState) => {
    dispatch({type: USER_LOADING})
    axios.get('http://localhost:3001/userAuth/getUser', tokenConfig(getState))
    .then(result => {
        dispatch(
            {
                type: USER_LOADED,
                payload: result.data
            }
        )
    })
    .catch(err => {
        returnError(err.response.msg, err.response.status)
        dispatch({type: AUTH_ERROR})
        // we can redirect the user outside the app
    })
}

export const register = (values) => (dispatch, getState) => {
    const body = JSON.stringify(values)
    axios.post("http://localhost:3001/userAuth/signup", body, tokenConfig(getState))
    .then(result => {
        dispatch(
            {
                type: REGISTER_SUCCES,
                payload: result.data
            }
        )
    })
    .catch(err => {
        returnError(err.response.msg, err.response.status, 'REGISTER_FAIL')
        dispatch({type: REGISTER_FAIL})
    })
}

export const login = (values) => (dispatch, getState) => {
    const body = JSON.stringify(values)
    axios.post("http://localhost:3001/userAuth/signin", body, tokenConfig(getState))
    .then(result => {
        dispatch(
            {
                type: LOGIN_SUCCES,
                payload: result.data
            }
        )
    })
    .catch(err => {
        returnError(err.response.msg, err.response.status, 'LOGIN_FAIL')
        dispatch({type: LOGIN_FAIL})
    })
}

export const logout = () => (dispatch, getState) => {
    dispatch({type: LOGOUT_SUCCESS})
}

export const tokenConfig = (getState) => {

    // GETTING TOKEN FROM STATE
    const token = getState().auth.token

    const config = {
        headers: {
            "Content-type": "application/json",
        }
    }

    if(token) config.headers['x-auth-token'] = token

    return config
}