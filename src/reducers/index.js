import { combineReducers } from "redux";
import classReducer from "./classReducer";
import bookReducer from "./bookReducer"
import authReducer from "./authReducer"
import errReducer from "./errReducer"

export default combineReducers({
    classrooms: classReducer,
    books: bookReducer,
    auth: authReducer,
    err: errReducer
})