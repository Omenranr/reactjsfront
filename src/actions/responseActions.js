import axios from 'axios'
import { RESPONSE_LOADING, RESPONSE_LOADED, RESPONSE_ERROR} from '../actions/types'

export const sendPostRequest = (url, header, body) => (dispatch, getState) => {
    console.log("url", url)
    console.log("header", header)
    console.log("body", body)
}

export const sendGetRequest = (url, header) => (dispatch, getState) => {
    console.log("get url", url)
    console.log("get header", header)
    let defaultHeader = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    if(header) {
        defaultHeader = header
    }

    dispatch({type: RESPONSE_LOADING})

    axios.get(url, defaultHeader)
    .then(result => {
        console.log(result.data)
        dispatch({type: RESPONSE_LOADED, payload: result.data})
    })
    .catch(err => {
        dispatch({type: RESPONSE_ERROR})
    })
}