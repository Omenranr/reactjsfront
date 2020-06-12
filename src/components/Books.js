import React, {useState, useEffect} from 'react'
import { connect } from "react-redux"
import { PropTypes } from "prop-types"
import { loadBooks } from "../actions/bookActions";

const Books = (props) => {
    //javascript code
    const {books, loadBooks} = props

    const [formState, setFormState] = useState({
        values: {},
        books: null
    })

    

    const loadBooks = (event) => {
        // event.preventDefault()
        console.log("load clicked")
        getBooks()
    }

    useEffect(() => {
        if(props.books !== null) {
            console.log(props.books)
            setFormState(prevFormState => ({
                ...prevFormState,
                bookName: "",
                books: props.books
            }))
        }
    }, [props.books])

    // useEffect(() => {
    //     //code to get users data and put it in the state
    // }, [])

    const onChange = (event) => {
        event.persist()
        const name = event.target.name
        setFormState(formState => ({
            ...formState,
            values: {

            }
            //[classroomName]: event
        }))
        console.log(formState)
    }

    return (
        //jsxcode
        <div>
            {/* <form
                onSubmit={searchClass}
            >
                <input
                    type="text"
                    name="classroomName"
                    value={formState.classroomName}
                    onChange={onChange}
                /> 
                <button>Search</button>
            </form> */}
            {
                formState.books !== null ?
                <p>{formState.books}</p>
                :
                ""
            }
            <button onClick={getBooks}>Get Books</button>
        </div>
    )
}

const mapStateToProps = state => ({
    // what functions we want from our actions (we need to import them)
    loadBooks: PropTypes.func.isRequired, // we are defining the function we want from the classActions.js
    // loadUser: PropTypes.func.isRequired,
    //what we want from the store
    books: state.books.books, // getting the reducer data (classReducer.js)
    // isLoading: state.classrooms.isLoading,
})

// state = {
    // classrooms: {classrooms data coming reducer}
// }

//connect is a function : it's going to connect the store + actions => props passed to the component
export default connect(mapStateToProps, {loadBooks})(Books)

//normal export
// export default Body