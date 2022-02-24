import React from 'react'
import {View} from 'react-native'
import ToDo from "./ToDo";
import {useSelector} from "react-redux";

const ToDoList = () => {
    const todos = useSelector(state => state.ToDoReducer.todo);
    const todoType = useSelector(state => state.ToDoReducer.type);

    const getVisibleTodos = (todos, type) => {
        switch (type) {
            case 'All':
                return todos
            case 'Complete':
                return todos.filter((t) => t.complete)
            case 'Active':
                return todos.filter((t) => !t.complete)
        }
    }

    let selectedTodos = getVisibleTodos(todos, todoType);

    let todoItems = selectedTodos && selectedTodos.map((todo) => {
        return (
            <ToDo key={todo.todoIndex} todo={todo}/>
        );
    })
    return (
        <View>
            {todoItems}
        </View>
    )
}
export default ToDoList;
