import React, {useState, useEffect} from 'react'
import { Classroom } from "./views";

const Body = () => {
    //javascript code
    const [counterState, setCounterState] = useState({
        counter: 0,
        title: "title"
    }) 

    const increment = (event) => {
        event.preventDefault()
        setCounterState(counterState => {
            return {
                counter: counterState.counter+1,
                title: counterState.title + "couter is on " + " " + counterState.counter
            }
        })
    }

    return (
        //jsxcode
        <div>
            <h1>{counterState.title}</h1>
                {   
                <div>
                    {counterState.counter}
                    <button onClick={increment}>Increment</button>
                </div>    
                }
        </div>
    )
}

export default Body