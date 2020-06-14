import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import { PropTypes } from "prop-types"
import { login } from '../actions/authActions'

const Signin = (props) => {
    //javascript code

    const {user, login} = props
    const [formState, setFormState] = useState({
        values: {},
    })
    const [userState, setUserState] = useState({
        user: null
    })


    useEffect(() => {
        if (props.user !== null) {
            console.log(props.user.user)
            setUserState(prevState => ({
                ...prevState,
                user: props.user.user
            }))
        }
    }, [props.user])

    const onChange = (event) => {
        event.persist()
        const name = event.target.name
        setFormState(formState => ({
            ...formState,
            values: {
                ...formState.values,
                [name]: event.target.value
            }
        }))
        console.log(formState.values)
    }

    const connectUser = (event) => {
        event.preventDefault()
        console.log("connect user fired")
        login(formState.values)
    }

    return (
        //jsxcode
        <div>
            <form
                onSubmit={connectUser}
            >
                <input
                    type="text"
                    name="email"
                    value={formState.values.email || ""}
                    onChange={onChange}
                />
                <input
                    type="password"
                    name="password"
                    value={formState.values.password || ""}
                    onChange={onChange}
                />
                <button>Connect</button>
            </form>
            {
                userState.user !== null ?
                    <div>
                        <h3>{"Name: " + userState.user.firstName + " " + userState.user.lastName}</h3>
                        <h4>{"Email: " + userState.user.email}</h4>
                    </div>
                    :
                    <h4>User not loaded</h4>
            }
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.auth.user,
})

//connect is a function : it's going to connect the store + actions => props passed to the component
export default connect(mapStateToProps, { login })(Signin)
