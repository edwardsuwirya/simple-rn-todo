import {ADD_TODO, CHANGE_TYPE, DELETE_TODO, TOGGLE_COMPLETE} from "../../utils/constants";

export function addTodo(newTodo) {
    return {
        type: ADD_TODO,
        payload: newTodo
    }
}

export function toggleComplete(todoIndex) {
    return {
        type: TOGGLE_COMPLETE,
        payload: todoIndex
    }
}

export function deleteTodo(todoIndex) {
    return {
        type: DELETE_TODO,
        payload: todoIndex
    }
}

export function changeType(type) {
    return {
        type: CHANGE_TYPE,
        payload: type
    }
}

