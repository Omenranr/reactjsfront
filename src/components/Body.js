import React, {useState, useEffect} from 'react'
import Classroom from './Classroom';
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { loadClassrooms } from "../actions/classActions";

const Body = () => {
    //javascript code

    const [formState, setFormState] = useState({
        classroomName: "",
        classroom: null 
    })

    const searchClass = (event) => {
        event.preventDefault()
        console.log("search clicked")
    }

    const onChange = (event) => {
        event.persist()
        const name = event.target.name
        setFormState(formState => ({
            ...formState,
            [name]: event.target.value
        }))
    }

    return (
        //jsxcode
        <div>
            <form>
                <input
                    type="text"
                    name="classroomName"
                    value={formState.classroomName}
                    onChange={onChange}
                />
                <button onClick={searchClass}>Search</button>
            </form>
        </div>
    )
}

export default Body