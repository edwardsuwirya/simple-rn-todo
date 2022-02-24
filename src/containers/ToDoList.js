import React from 'react'
import {View} from 'react-native'
import ToDo from "./ToDo";

const ToDoList = ({todos,toggleComplete,deleteTodo,type}) => {
    const getVisibleTodos = (todos, type) => {
        switch (type) {
            case 'All':
                return todos
            case 'Complete':
                return todos.filter((t) => t.complete)
            case 'Active':
                return todos.filter((t) => !t.complete)
        } }
    let selectedTodos = getVisibleTodos(todos, type)
    let todoItems = selectedTodos.map((todo) => {
        return (
            <ToDo key={todo.todoIndex} todo={todo}  toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
        );
    })
    return (
        <View>
            {todoItems}
        </View>
    )
}
export default ToDoList;
