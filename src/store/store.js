import {combineReducers, createStore} from "redux";
import ToDoReducer from "./todo/ToDoReducer";
import LoginReducer from "./login/LoginReducer";

const rootReducer = combineReducers(
    {ToDoReducer, LoginReducer}
);

const configureStore = () => {
    return createStore(rootReducer);
}
export default configureStore;
