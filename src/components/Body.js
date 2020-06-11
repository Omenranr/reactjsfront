import React, {useState, useEffect} from 'react'
import Classroom from './Classroom';
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { loadClassrooms, loadUser } from "../actions/classActions";



const Body = (props) => {
    //javascript code
    const {classroom, loadClassrooms} = props

    const [formState, setFormState] = useState({
        classroomName: "",
        classroom: null
    })

    //changing the state
    // setFormState(prevState => ({
    //     ...prevState,
    //     classroom: {name: "class1"}
    // }))

    // const classroom = formState.classroom

    const searchClass = (event) => {
        event.preventDefault()
        console.log("search clicked")
        loadClassrooms(formState.classroomName)
    }

    useEffect(() => {
        if(props.classroom !== null) {
            console.log(props.classroom)
            setFormState(prevFormState => ({
                ...prevFormState,
                classroomName: "",
                classroom: props.classroom
            }))
        }
    }, [props.classroom])

    // useEffect(() => {
    //     //code to get users data and put it in the state
    // }, [])

    const onChange = (event) => {
        event.persist()
        const name = event.target.name
        setFormState(formState => ({
            ...formState,
            [name]: event.target.value
            //[classroomName]: event
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
    // what functions we want from our actions (we need to import them)
    loadClassrooms: PropTypes.func.isRequired, // we are defining the function we want from the classActions.js
    // loadUser: PropTypes.func.isRequired,
    //what we want from the store
    classroom: state.classrooms.classrooms, // getting the reducer data (classReducer.js)
    // isLoading: state.classrooms.isLoading,
})

// state = {
    // classrooms: {classrooms data coming reducer}
// }

//connect is a function : it's going to connect the store + actions => props passed to the component
export default connect(mapStateToProps, {loadClassrooms})(Body)

//normal export
// export default Body