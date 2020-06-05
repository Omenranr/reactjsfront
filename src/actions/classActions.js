import axios from 'axios'
import { 
    CLASS_LOADED,
    CLASS_LOADING,
    CLASS_LOAD_FAIL
} from "./types";

// case1 : () =>
// case2 : param =>
// case3 : (param1, param2, ...)

export const loadClassrooms = () => (dispatch, getState) => {
    //PUT CLASSROOMS STATE TO LOADING
    dispatch({type: CLASS_LOADING})
    axios.get('http://localhost:3001/class/selectAll', tokenConfig(getState))
    .then(data => {
        dispatch({
            type: CLASS_LOADED,
            payload: data
        })
    })
    .catch(err => {
        console.log("error", err)
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