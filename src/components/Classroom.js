import React from 'react'
import AddClassForm from "./AddClassForm";

const Classroom = (props) => {
    //javascript code
    const {classroom} = props
    return (
        //jsxcode
        <div>
            <h1>{classroom.name}</h1>
            <h3>{classroom.type}</h3>
        </div>
    )
}

export default Classroom