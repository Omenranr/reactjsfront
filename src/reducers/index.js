import { combineReducers } from "redux";
import classReducer from "./classReducer";
import bookReducer from "./bookReducer"

export default combineReducers({
    classrooms: classReducer,
    books: bookReducer
})