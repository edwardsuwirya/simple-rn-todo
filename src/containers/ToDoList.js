import React from 'react'
import {FlatList, View} from 'react-native'
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
    //renderItem akan melempar sebuah props item
    let todoItems = ({item}) => {
        return (
            <ToDo todo={item}/>
        );
    };
    return (
        <View>
            <FlatList
                data={selectedTodos}
                renderItem={todoItems}
                keyExtractor={item => item.todoIndex}
            />
        </View>
    )
}
export default ToDoList;
