import { combineReducers } from "redux";
import classReducer from "./classReducer";
import bookReducer from "./bookReducer"
import authReducer from "./authReducer"
import errReducer from "./errReducer"
import responseReducer from "./responseReducer";

export default combineReducers({
    classrooms: classReducer,
    books: bookReducer,
    auth: authReducer,
    err: errReducer,
    response: responseReducer
})