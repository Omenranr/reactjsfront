import axios from 'axios'
import {
    BOOKS_LOADING,
    BOOKS_LOADED,
    BOOKS_LOAD_FAIL
} from './types'

export const loadBooks = () => (dispatch, getState) => {
    dispatch({type: BOOKS_LOADING})
    axios.get('http://localhost:3001/class/selectAll', tokenConfig(getState))
    .then(response => {
        console.log(response)
        dispatch({
            type: BOOKS_LOADED,
            payload: response.data
        })
    })
    .catch(error => {
        //we need later to call error function
        dispatch({type: BOOKS_LOAD_FAIL})
    })
}

export const tokenConfig = getState => {
    const config = {
        headers: {
            "Content-type": "application/json",
        }
    }
    return config
}