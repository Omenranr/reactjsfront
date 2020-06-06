import React, {useState, useEffect} from 'react'
import Classroom from './Classroom';
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { loadClassrooms } from "../actions/classActions";

const Body = (props) => {
    //javascript code
    const {classroom, loadClassrooms} = props
    const [formState, setFormState] = useState({
        classroomName: "",
        classroom: null
    })

    const searchClass = (event) => {
        event.preventDefault()
        console.log("search clicked")
        loadClassrooms(formState.classroomName)
    }

    useEffect(() => {
        if(props.classroom !== null) {
            console.log(props.classroom)
            setFormState(formState => ({
                ...formState,
                classroomName: "",
                classroom: props.classroom
            }))
        }
    }, [props.classroom])

    const onChange = (event) => {
        event.persist()
        const name = event.target.name
        setFormState(formState => ({
            ...formState,
            [name]: event.target.value
        }))
        console.log(formState)
    }

    return (
        //jsxcode
        <div>
            <form
                onSubmit={searchClass}
            >
                <input
                    type="text"
                    name="classroomName"
                    value={formState.classroomName}
                    onChange={onChange}
                />
                <button>Search</button>
            </form>
            {
                formState.classroom !== null ?
                <Classroom classroom={formState.classroom}/>
                :
                <h3>No class loaded</h3>
            }
        </div>
    )
}

const mapStateToProps = state => ({
    loadClassrooms: PropTypes.func.isRequired,
    classroom: state.classrooms.classrooms
})

export default connect(mapStateToProps, {loadClassrooms})(Body)