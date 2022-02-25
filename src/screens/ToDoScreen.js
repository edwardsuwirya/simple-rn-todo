/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {ScrollView, StyleSheet, View,} from 'react-native';
import Heading from "../components/Heading";
import Input from "../components/Input";
import ToDoList from "../containers/ToDoList";
import SubmitButton from "../components/SubmitButton";
import TabBar from "../containers/TabBar";

let todoIndex = 0;

const ToDoScreen = () => {
    const [appState, setAppState] = useState({
        inputValue: '',
        todos: [],
        type: 'All'
    })

    const inputChange = (inputValue) => {
        setAppState({...appState, inputValue: inputValue});
    }

    const submitTodo = () => {
        if (appState.inputValue.match(/^\s*$/)) {
            return
        }
        const todo = {
            title: appState.inputValue,
            todoIndex,
            complete: false
        }
        todoIndex++
        const todos = [...appState.todos, todo]
        setAppState({...appState, inputValue: '', todos: todos});
    }

    const toggleComplete = (todoIndex) => {
        let {todos} = appState;
        todos.forEach((todo) => {
            if (todo.todoIndex === todoIndex) {
                todo.complete = !todo.complete;
            }
        })
        setAppState({...appState, todos: todos});
    }
    const deleteTodo = (todoIndex) => {
        let {todos} = appState;
        todos = todos.filter((todo) => todo.todoIndex !== todoIndex)
        setAppState({...appState, todos: todos});
    }

    const setType = (type) => {
        setAppState({...appState, type: type});
    }
    return (
        <View style={styles.container}>
            <Heading/>
            <Input inputValue={appState.inputValue} inputChange={(text) => inputChange(text)}/>
            <SubmitButton submitTodo={submitTodo}/>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic" keyboardShouldPersistTaps="never" style={styles.content}>
                <ToDoList todos={appState.todos} toggleComplete={toggleComplete}
                          deleteTodo={deleteTodo} type={appState.type}/>

            </ScrollView>
            <TabBar type={appState.type} setType={setType}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        paddingTop: 10,
    }
});

export default ToDoScreen;
