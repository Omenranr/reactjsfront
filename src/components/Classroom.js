import React from 'react'


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