/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet,} from 'react-native';
import Heading from "./components/Heading";
import Input from "./components/Input";
import SubmitButton from "./components/SubmitButton";
import ToDoList from "./containers/ToDoList";
import TabBar from "./containers/TabBar";

/*
Component Creation Step
1. Buat Heading
2. Buat Input
3. Buat SubmitButton
4. Buat ToDo dan ToDoList
5. Buat ToDoButton
6. Buat TabBar dan TabBarItem
 */
let todoIndex = 0;

const App = () => {
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
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic" keyboardShouldPersistTaps="never" style={styles.content}>
                <Heading/>
                <Input inputValue={appState.inputValue} inputChange={(text) => inputChange(text)}/>
                <ToDoList todos={appState.todos} toggleComplete={toggleComplete}
                          deleteTodo={deleteTodo} type={appState.type}/>
                <SubmitButton submitTodo={submitTodo}/>
            </ScrollView>
            <TabBar type={appState.type} setType={setType}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        paddingTop: 60
    }
});

export default App;
