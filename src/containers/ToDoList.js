import React from 'react'
import {View} from 'react-native'
import ToDo from "./ToDo";

const ToDoList = ({todos,toggleComplete,deleteTodo,type}) => {
    todos = todos.map((todo) => {
        return (
            <ToDo key={todo.todoIndex} todo={todo}  toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
        );
    })
    return (
        <View>
            {todos}
        </View>
    )
}
export default ToDoList;
