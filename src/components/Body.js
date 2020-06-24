import React, {useState, useEffect} from 'react'
import { connect } from "react-redux"
import { PropTypes } from "prop-types"
import AddClassForm from "./AddClassForm"
import { addClassroom } from "../actions/classActions"

const Body = (props) => {
    //javascript code
    const [formState, setFormState] = useState({
        values: {},
        isAdded: false,
        classAdded: {}
    })

    const { addClassroom, classAdded } = props

    useEffect(() => {
        if(classAdded !== null) {
            setFormState(prev => ({
                ...prev,
                classAdded: classAdded,
                isAdded: true
            }))
        }
    }, [classAdded])

    const onChange = (event) => {
        event.persist()
        const name = event.target.name
        setFormState(formState => ({
            ...formState,
            values:{
                ...formState.values,
                [name]: event.target.value
            }
        }))
        console.log(formState)
    }

    const onAddFormSubmit = (event) => {
        event.preventDefault()
        console.log("form submited")
        console.log(formState.values)
        addClassroom(formState.values)
    }

    return (
        //jsxcode
        <div>
            <AddClassForm 
                onChange={onChange} 
                onAddFormSubmit={onAddFormSubmit} 
                formState={formState}
            />
            <div>{formState.isAdded ? formState.classAdded.name : "Not added yet"}</div>
        </div>
    )
}

const mapStateToProps = state => ({
    // what functions we want from our actions (we need to import them)
    addClassroom: PropTypes.func.isRequired, // we are defining the function we want from the classActions.js
    classAdded: state.classrooms.classAdded,
})

//connect is a function : it's going to connect the store + actions => props passed to the component
export default connect(mapStateToProps, {addClassroom})(Body)

//normal export
// export default Body