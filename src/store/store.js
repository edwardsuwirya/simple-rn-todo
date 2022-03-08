import {combineReducers, createStore} from "redux";
import ToDoReducer from "./todo/ToDoReducer";
import LoginReducer from "./login/LoginReducer";
import reactotron from '../utils/ReactotronConfig';
import AppReducer from "./app/AppReducer";

const rootReducer = combineReducers(
    {AppReducer, ToDoReducer, LoginReducer}
);

const configureStore = () => {
    return createStore(rootReducer, reactotron.createEnhancer());
}
export default configureStore;
