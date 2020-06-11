import axios from 'axios'
import { 
    CLASS_LOADED,
    CLASS_LOADING,
    CLASS_LOAD_FAIL
} from "./types";

// case1 : () =>
// case2 : param =>
// case3 : (param1, param2, ...)

export const loadClassrooms = (classroomName) => (dispatch, getState) => {
    //PUT CLASSROOMS STATE TO LOADING
    console.log("searching data", classroomName)
    dispatch({type: CLASS_LOADING})
    axios.post('http://localhost:3001/class/selectByName', {classroomName: classroomName}, tokenConfig(getState))
    .then(result => {
        dispatch({
            type: CLASS_LOADED,
            payload: result.data
        })
    })
    .catch(err => {
        console.log("error", err)
    })
}

export const loadUser = (userData) => (dispatch, getState) => {
    dispatch({type: USER_LOADING})
    axios.post('http://localhost:3001/auth/loadUser', userData, tokenConfig(getState))
    .then(response => {
        dispatch({
            type: USER_LOADED,
            payload: response.data
        })
    })
    .catch(err => {
        dispatch({type: USER_LOAD_FAIL})
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