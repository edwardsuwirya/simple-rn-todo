import React from 'react'
import {FlatList, View} from 'react-native'
import ToDo from "./ToDo";

const ToDoList = ({todos}) => {
    //renderItem akan melempar sebuah props item
    const todoItems = ({item}) => {
        return (
            <ToDo todo={item}/>
        );
    };
    return (
        <View style={{marginBottom:30}}>
            <FlatList
                data={todos}
                renderItem={todoItems}
                keyExtractor={item => item.todoIndex}
            />
        </View>
    )
}
export default ToDoList;
