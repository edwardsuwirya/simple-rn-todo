import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import ToDoButton from "../components/ToDoButton";

const ToDo = ({todo, toggleComplete, deleteTodo}) => (
    <View style={styles.todoContainer}>
        <Text style={styles.todoText}>
            {todo.title}
        </Text>
        <View style={styles.buttons}>
            <ToDoButton
                name='Done'
                onPress={() => toggleComplete(todo.todoIndex)}/>
            <ToDoButton
                name='Delete'
                onPress={() => deleteTodo(todo.todoIndex)}/>
        </View>
    </View>
)
const styles = StyleSheet.create({
    todoContainer: {
        marginLeft: 20,
        marginRight: 20,
        //Mandatory style for shadowing
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: '#ededed',
        paddingLeft: 14,
        paddingTop: 7,
        paddingBottom: 7,
        //Shadowing for IOS
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#000000',
        shadowOffset: {width: 3, height: 3},
        //Shadowing for Android
        elevation: 3,
        flexDirection: 'row',
        alignItems: 'center'
    },
    todoText: {
        fontSize: 16
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
})
export default ToDo;
