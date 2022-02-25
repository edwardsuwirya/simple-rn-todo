import {ADD_TODO, CHANGE_TYPE, DELETE_TODO, SET_TODO_NAME, SHOW_LOADING, TOGGLE_COMPLETE} from "../../utils/constants";

const initialState = {
    isLoading:false,
    newTodoName:'',
    todoIndex: 1,
    todo: [],
    type: 'All'
};
const ToDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            return {
                ...state,
                newTodoName: '',
                todoIndex: state.todoIndex + 1,
                todo: [...state.todo, action.payload]
            };
        }
        case TOGGLE_COMPLETE: {
            let todos = [...state.todo];
            todos.forEach((todo) => {
                if (todo.todoIndex === action.payload) {
                    todo.complete = !todo.complete;
                }
            })
            return {
                ...state,
                todo: todos
            };
        }
        case DELETE_TODO: {
            let todos = state.todo.filter((todo) => todo.todoIndex !== action.payload)
            return {
                ...state,
                todo: todos
            };
        }
        case CHANGE_TYPE: {
            return {
                ...state,
                type: action.payload
            };
        }
        case SET_TODO_NAME: {
            return {
                ...state,
                newTodoName: action.payload
            };
        }
        case SHOW_LOADING: {
            return {
                ...state,
                isLoading: action.payload
            };
        }
        default:
            return state;
    }
}
export default ToDoReducer;
