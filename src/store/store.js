import {combineReducers, createStore} from "redux";
import ToDoReducer from "./todo/ToDoReducer";
import LoginReducer from "./login/LoginReducer";
import reactotron from '../utils/ReactotronConfig';

const rootReducer = combineReducers(
    {ToDoReducer, LoginReducer}
);

const configureStore = () => {
    return createStore(rootReducer, reactotron.createEnhancer());
}
const store = configureStore();
export default store;
