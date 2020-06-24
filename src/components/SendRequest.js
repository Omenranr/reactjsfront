import React, {useState, useEffect} from 'react'
import { connect } from "react-redux"
import { PropTypes } from "prop-types"
import AddClassForm from "./AddClassForm"
import { sendPostRequest, sendGetRequest } from "../actions/responseActions"

const SendRequest = (props) => {
    const {response, sendPostRequest, sendGetRequest} = props
    useEffect(() => {
        if(response) {
            console.log(response)
            setResp(response)
        }
    }, [response])
    //javascript code
    const [resp, setResp] = useState(null)
    const [formState, setFormState] = useState({
        url: "",
        header: "",
        body: "",
    })

    const onChange = (event) => {
        event.persist()
        const name = event.target.name
        setFormState(formState => ({
            ...formState,
            [name]: event.target.value
        }))
        console.log(formState)
    }

    const onFormSubmit = (event) => {
        event.preventDefault()
        console.log("form submited")
        console.log(formState)
        sendGetRequest(formState.url)
    }

    return (
        //jsxcode
        <div>
            <form onSubmit={onFormSubmit}>
                <label>Url: </label>
                <input
                    type="text"
                    name="url"
                    value={formState.url || ""}
                    onChange={onChange}
                /><br/>
                <label>Header: </label>                
                <textarea
                    name="header"
                    value={formState.header || ""}
                    onChange={onChange}
                    style={{width: "300px", height: "120px"}}
                /><br/>
                <label>Body: </label>
                <textarea
                    type="text"
                    name="body"
                    value={formState.body || ""}
                    onChange={onChange}
                    style={{width: "300px", height: "120px"}}
                /><br/>
                <button>Send request</button>
            </form>
            {resp ? <p>{JSON.stringify(resp)}</p> : "No response yet"}
        </div>
    )
}

const mapStateToProps = state => ({
    response: state.response.response,
    sendPostRequest: PropTypes.func,
    sendGetRequest: PropTypes.func,
})

export default connect(mapStateToProps, {sendPostRequest, sendGetRequest})(SendRequest)
// export default SendRequest
