import { GET_ERROR, CLEAR_ERROR } from "./types"


//GETTING ERRORS
export const returnError = (msg, status, id = null) => (dispatch) => {
    dispatch(
        {
            type: GET_ERROR,
            payload: {msg, status, id}
        }
    )
}

//CLEAR ERRORS
export const clearError = () => (dispatch) => {
    dispatch({type: CLEAR_ERROR})
}