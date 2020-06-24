import React from 'react'

// name: {type: String, required: true},
// teacher: {type: Schema.Types.ObjectId, ref: 'users'},
// students: [{type: Schema.Types.ObjectId, ref: 'users'}],
// maxNumber: {type: Number, required: true},
// type: {type: String, required: true}

const AddClassForm = (props) => {
    //javascript code
    const {onAddFormSubmit, onChange, formState} = props

    return (
        //jsxcode
        <div>
            <form
                onSubmit={onAddFormSubmit}
            >
                <input 
                    type="text"
                    name="name"
                    onChange={onChange}
                    placeholder="Class name"
                    value={formState.values.name || ''}
                />
                <input
                    type="number"
                    name="maxNumber"
                    placeholder="Max number"
                    onChange={onChange}
                />
                <input 
                    type="text"
                    name="type"
                    placeholder="Class type"
                    onChange={onChange}
                />
                <button>Add</button>
            </form>
        </div>
    )
}

export default AddClassForm