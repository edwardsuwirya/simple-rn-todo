/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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

const App = () => {
    let inputValue = "";
    let todos = [{
        todoIndex: 1,
        title: 'Title 1',
        isComplete: false
    }, {
        todoIndex: 2,
        title: 'Title 2',
        isComplete: false
    }];

    let type = '';
    const inputChange = (inputValue) => {
        console.log('Input Value: ', inputValue);
    }

    const submitTodo = () => {
        console.log('Submit');
    }

    const toggleComplete = (todoIndex) => {
        console.log('Complete : ', todoIndex);
    }
    const deleteTodo = (todoIndex) => {
        console.log('Delete : ', todoIndex);
    }

    const setType = (type) => {
        console.log('Set Type : ' + type);
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic" keyboardShouldPersistTaps="never" style={styles.content}>
                <Heading/>
                <Input inputValue={inputValue} inputChange={(text) => inputChange(text)}/>
                <ToDoList todos={todos} toggleComplete={toggleComplete}
                          deleteTodo={deleteTodo} type={type}/>
                <SubmitButton submitTodo={submitTodo}/>
            </ScrollView>
            <TabBar type={type} setType={setType}/>
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
